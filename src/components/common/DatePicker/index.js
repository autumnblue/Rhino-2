import { SingleDatePicker } from 'react-dates';
import { bool, object, func, string, oneOfType, arrayOf } from 'prop-types';
import { compose, pure, withPropsOnChange, withHandlers, withState, defaultProps } from 'recompose';
import moment from 'moment';
import { omit } from 'lodash';
import classNames from 'classnames';

import { FieldError } from 'src/components';

import css from './style.css';

const propTypes = {
  error: oneOfType([string, arrayOf(string)]),
  focused: bool.isRequired,
  date: object,
  className: string.isRequired,

  onFocusChange: func.isRequired,
  onChange: func.isRequired,
};

const returnFalse = () => false;

const defaultPropsEnhancer = defaultProps({
  showIcon: true,
})

const focusedEnhancer = withState('focused', 'onFocusChange', false);

const handlersEnhancer = withHandlers({
  onFocusChange: ({ onFocusChange }) => ({ focused }) => onFocusChange(!!focused),
  onChange: ({ onChange }) => value => onChange(value ? value.toDate().toISOString() : value),
});

const propsEnhancer = withPropsOnChange(
  ['value', 'disabled', 'className', 'showIcon'],
  ({ value, disabled, className, showIcon }) => ({
    date: value ? moment(value) : null,
    className: classNames({
      [css.datePicker]: true,
      [css.disabled]: !!disabled,
      [css.noIcon]: !showIcon,
      [className]: !!className,
    }),
  })
);

const enhance = compose(
  defaultPropsEnhancer,
  focusedEnhancer,
  handlersEnhancer,
  propsEnhancer,
  pure,
);

const DatePicker = ({
  focused,
  date,
  error,
  className,
  showIcon,

  onFocusChange,
  onChange,
  ...props
}) => (
  <div className={className}>
    <SingleDatePicker
      showDefaultInputIcon={showIcon}
      focused={focused}
      date={date}
      onDateChange={onChange}
      onFocusChange={onFocusChange}
      isOutsideRange={returnFalse}
      {...omit(props, ['value', 'disabled'])}
    />
    <FieldError error={error} />
  </div>
);

DatePicker.propTypes = propTypes;

export default enhance(DatePicker);
