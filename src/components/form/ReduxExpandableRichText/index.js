import { debounce } from 'lodash';
import { compose, pure, withState, withHandlers, withPropsOnChange } from 'recompose';
import { string, object, oneOfType, arrayOf, func, bool } from 'prop-types';

import { breadcrumbsType } from 'src/prop-types';
import {
  FieldError,
  SafeHTML,
  Button,
  RichText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Breadcrumbs,
} from 'src/components';

import css from './style.css';

const propTypes = {
  input: object.isRequired,
  error: oneOfType([string, arrayOf(string)]),

  isEditing: bool,
  editingValue: string.isRequired,
  breadcrumbs: breadcrumbsType,

  onChange: func.isRequired,
  onOpenEdit: func.isRequired,
  onCloseEdit: func.isRequired,
  onSetEditValue: func.isRequired,
};

const isEditingEnhancer = withState('isEditing', 'onSetIsEditing', false);
const editingValueEnhancer = withState('editingValue', 'onSetEditValue', ({ input }) => input.value);

const handlersEnhancer = withHandlers({
  onOpenEdit: ({ onSetIsEditing }) => () => onSetIsEditing(true),
  onCloseEdit: ({ onSetIsEditing }) => () => onSetIsEditing(false),
  onChange: ({ input: { onChange }, onSetIsEditing, editingValue }) => () => {
    onSetIsEditing(false);
    onChange(editingValue);
  },
  // have no idea why it needs a delay
  onSetEditValue: ({ onSetEditValue }) => debounce(value => onSetEditValue(value)),
});

const propsEnhancer = withPropsOnChange(['parentBreadcrumbs', 'label', 'onCloseEdit'], ({ parentBreadcrumbs, label, onCloseEdit }) => ({
  breadcrumbs: parentBreadcrumbs ? [
    ...parentBreadcrumbs.slice(0, parentBreadcrumbs.length - 1),
    {
      ...parentBreadcrumbs[parentBreadcrumbs.length - 1],
      onClick: onCloseEdit,
    },
    { label },
  ] : [{ label }],
}));

const enhance = compose(
  isEditingEnhancer,
  editingValueEnhancer,
  handlersEnhancer,
  propsEnhancer,
  pure,
);

const ReduxExpandableRichText = ({
  input: { value },
  error,
  isEditing,
  editingValue,
  breadcrumbs,

  onChange,
  onOpenEdit,
  onCloseEdit,
  onSetEditValue,
}) => (
  <div>
    <div className={css.content}>
      <SafeHTML html={value} />
      <Base exists={!value} component="em" className={css.empty}>Empty</Base>
    </div>
    <FieldError error={error} />
    <Button block onClick={onOpenEdit}>Edit</Button>

    <Modal isOpen={isEditing} onRequestClose={onCloseEdit} fillIn>
      <ModalHeader onRequestClose={onCloseEdit}>
        <Breadcrumbs className={css.breadcrumbs} breadcrumbs={breadcrumbs} />
        <Button onClick={onChange} color="success">Save</Button>
      </ModalHeader>
      <ModalBody>
        <RichText onChange={onSetEditValue} value={editingValue} className={css.editor} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={onCloseEdit}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);

ReduxExpandableRichText.propTypes = propTypes;

export default enhance(ReduxExpandableRichText);
