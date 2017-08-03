import { compose, pure, withState, withHandlers, withPropsOnChange } from 'recompose';
import { Col, Row } from 'reactstrap';

import { Input, Checkbox, FieldError, ExpandableRichText } from 'src/components';

const canEditEnhancer = withState('canEdit', 'onCanEditChange', ({ input: { value } }) => {
  console.log('azaza', value)
  return value !== null
});
const inputValueEnhancer = withState('inputValue', 'onChangeInput', ({ input: { value } }) => value)

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange }, canEdit, inputValue }) => () => onChange(canEdit ? inputValue : null),
  onCanEditChange: ({ input: { onChange, value }, onCanEditChange, onChangeInput }) => (canEdit) => {
    onCanEditChange(canEdit);

    if(canEdit) {
      onChange('');
    } else {
      onChange(null);
      onChangeInput('');
    }
  }
});

const propsEnhancer = withPropsOnChange(
  ['inputValue', 'canEdit'], ({ inputValue, canEdit }) => ({
    inputValue: canEdit ? inputValue : '',
  })
)

const enhance = compose(
  canEditEnhancer,
  inputValueEnhancer,
  handlersEnhancer,
  propsEnhancer,
  pure,
)

const ReduxCustomizableText = ({
  input: { name },
  canEdit,
  error,
  inputValue,

  onCanEditChange,
  onChangeInput,
  onChange,
}) => (
  <Row>
    <Col md="6" sm="12">
      <Checkbox
        checked={canEdit}
        onChange={onCanEditChange}
        label="Customize"
        id={`customize_${name}`}
      />
    </Col>
    <Col md="6" sm="12">
      <Input
        disabled={!canEdit}
        onBlur={onChange}
        onChange={onChangeInput}
        value={inputValue}
        passValue
      />
    </Col>
    <Col md="12">
      <FieldError error={error} />
    </Col>
  </Row>
)

export default enhance(ReduxCustomizableText);
