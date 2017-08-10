import { compose, onlyUpdateForKeys, withPropsOnChange, withHandlers, withState } from 'recompose'
import { Field } from 'redux-form'

import { Button, ReduxOutputText, ReduxHidden, ReduxInput } from 'src/components';
import { empty } from 'src/helpers';

const idEnhancer = withState('id', 'onSetId');

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, id, member }) => () =>  onEdit(id, member),
  onDelete: ({ onDelete, id }) => evt => {
    evt.preventDefault();
    onDelete(id);
  }
});

const propsEnhancer = withPropsOnChange(['serviceInstanceValidationErrors', 'id'], ({ serviceInstanceValidationErrors, id }) => ({
  validationErrors: serviceInstanceValidationErrors[id] || empty,
}));

const enhance = compose(
  idEnhancer,
  handlersEnhancer,
  propsEnhancer,
  onlyUpdateForKeys([
    'validationErrors'
  ]),
)

const ServiceInstanceItem = ({
  member,
  validationErrors,

  onDelete,
  onSetId,
  onEdit,
}) => (
  <tr>
    <Field
      component={ReduxHidden}
      onFill={onSetId}
      name={`${member}.id`}
    />
    <td>
      <Field
        component={ReduxOutputText}
        name={`${member}.display_name`}
      />
    </td>
    <td>
      {console.log('validationErrors', validationErrors)}
      <Field
        component={ReduxInput}
        name={`${member}.unit_price`}
        onBlur={onEdit}
        error={validationErrors.unit_price}
      />
    </td>
    <td>
      <Button onClick={onDelete}>Delete Service Instance</Button>
    </td>
  </tr>
)

export default enhance(ServiceInstanceItem);
