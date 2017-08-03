import { compose, pure, withState, withHandlers, withPropsOnChange } from 'recompose';
import { Col, Row } from 'reactstrap';

import { Input, Checkbox, FieldError, ExpandableRichText, Button } from 'src/components';


const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange }}) => onChange,
  onReset: ({ input: { onChange } }) => () => onChange(null)
});

const enhance = compose(
  handlersEnhancer,
  pure,
)

const ReduxCustomizableValue = ({
  input: { value },
  error,

  parentBreadcrumbs,
  breadcrumbLabel,
  editButtonLabel,

  onReset,
  onChange,
}) => (
  <Row>
    <Col md="4" sm="12">
      <Button onClick={onReset}>Reset</Button>
    </Col>
    <Col md="8" sm="12">
      <ExpandableRichText
        onChange={onChange}
        parentBreadcrumbs={parentBreadcrumbs}
        breadcrumbLabel={breadcrumbLabel}
        value={value}
        editButtonLabel={editButtonLabel}
      />
    </Col>
    <Col md="12">
      <FieldError error={error} />
    </Col>
  </Row>
)

export default enhance(ReduxCustomizableValue);
