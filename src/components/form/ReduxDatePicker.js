import { DatePicker } from 'src/components';
import {  omit } from 'lodash'

const propTypes = {

}

const ReduxDatePicker = ({
  input: { value, onChange },
  ...props
}) => (
  <DatePicker
    value={value}
    onChange={onChange}
    {...omit(props, ['meta', 'error'])}
  />
)

ReduxDatePicker.propTypes = propTypes

export default ReduxDatePicker
