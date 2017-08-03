import { DatePicker } from 'src/components';

const ReduxDatePicker = ({
  input: { value, onChange }
}) => (
  <DatePicker date={value} onDateChange={onChange} />
)
