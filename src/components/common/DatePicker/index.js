import { SingleDatePicker } from 'react-dates'
import { compose, pure, withPropsOnChange, withHandlers, withState } from 'recompose'
import { omit } from 'lodash'
import moment from 'moment'

import css from './style.css'

const focusedEnhancer = withState('focused', 'onFocusChange', false);

const handlersEnhancer = withHandlers({
  onFocusChange: ({ onFocusChange }) => ({ focused }) => onFocusChange(focused)
})

const propsEnhancer = withPropsOnChange(['value'], ({ value }) => ({
  date: moment(value)
}));

const enhance = compose(
  focusedEnhancer,
  handlersEnhancer,
  propsEnhancer,
  pure
)

const DatePicker = ({
  focused,
  date,


  onFocusChange,
  onChange,
  ...props,
}) => (
  <div className={css.datePicker}>
  <SingleDatePicker
    showDefaultInputIcon
    focused={focused}
    date={date}
    onDateChange={onChange}
    onFocusChange={onFocusChange}
    {...props}
  />
  </div>
)

export default enhance(DatePicker)
