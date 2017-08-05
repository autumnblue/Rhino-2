import { SingleDatePicker } from 'react-dates';
import { bool, object, func } from 'prop-types';
import { compose, pure, withPropsOnChange, withHandlers, withState } from 'recompose';
import moment from 'moment';
import { omit } from 'lodash'

import css from './style.css';

const propTypes = {
  focused: bool.isRequired,
  date: object.isRequired,

  onFocusChange: func.isRequired,
  onChange: func.isRequired,
};

const returnFalse = () => false;

const focusedEnhancer = withState('focused', 'onFocusChange', false);

const handlersEnhancer = withHandlers({
  onFocusChange: ({ onFocusChange }) => ({ focused }) => onFocusChange(focused),
});

const propsEnhancer = withPropsOnChange(['value'], ({ value }) => ({
  date: moment(value),
}));

const enhance = compose(
  focusedEnhancer,
  handlersEnhancer,
  propsEnhancer,
  pure,
);

const DatePicker = ({
  focused,
  date,

  onFocusChange,
  onChange,
  ...props
}) => (
  <div className={css.datePicker}>
    <SingleDatePicker
      showDefaultInputIcon
      focused={focused}
      date={date}
      onDateChange={onChange}
      onFocusChange={onFocusChange}
      isOutsideRange={returnFalse}
      {...omit(props, ['value'])}
    />
  </div>
);

DatePicker.propTypes = propTypes;

export default enhance(DatePicker);
