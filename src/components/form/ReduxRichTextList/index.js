import { compose, pure, withHandlers, withState, withPropsOnChange } from 'recompose';

import { SafeHTML, RichText, Button } from 'src/components';

import RichTextListItem from './RichTextListItem';
import css from './style.css'

const editorValueEnhancer = withState('editorValue', 'onEditorValueChange', '');
const editingIndexEnhancer = withState('editIndex', 'onSetEditIndex')

const handlersEnhancer = withHandlers({
  onAdd: ({ editorValue, onEditorValueChange, input: { value, onChange } }) => () => {
    onChange([
      ...value,
      editorValue,
    ]);

    onEditorValueChange('');
  },

  onEdit: ({ input: { onChange, value }, editIndex, editorValue, onSetEditIndex, onEditorValueChange }) => () => {
    onChange([
      ...value.slice(0, editIndex),
      editorValue,
      ...value.slice(editIndex + 1),
    ]);

    onSetEditIndex(null);
    onEditorValueChange('');
  },

  onSetEditIndex: ({ onSetEditIndex, onEditorValueChange, input: { value } }) => index => {
    onEditorValueChange(value[index]);
    onSetEditIndex(index);
  },

  onRemove: ({ input: { value, onChange } }) => index => {
    onChange([
      ...value.slice(0, index),
      ...value.slice(index + 1),
    ]);
  },

  onCancel: ({ onSetEditIndex, onEditorValueChange }) => () => {
    onSetEditIndex(null);
    onEditorValueChange('');
  }
});

const propsEnhancer = withPropsOnChange(['editIndex'], ({ editIndex }) => ({
  isEditing: typeof editIndex === 'number'
}))

const enhance = compose(
  editingIndexEnhancer,
  editorValueEnhancer,
  handlersEnhancer,
  propsEnhancer,
  pure,
)

const ReduxRichTextList = ({
  input: { value },
  editIndex,
  editorValue,
  isEditing,

  onSetEditIndex,
  onEditorValueChange,
  onEdit,
  onCancel,
  onAdd,
  onRemove,
}) => (
  <div className={css.wrapper}>
    {value.map((item, index) => (
      <RichTextListItem
        key={index}
        index={index}
        html={item}
        editIndex={editIndex}
        onSetEditIndex={onSetEditIndex}
        onRemove={onRemove}
      />
    ))}
    <RichText onChange={onEditorValueChange} value={editorValue} className={css.editor} />
    <Base exists={!isEditing} component={Button} onClick={onAdd}>Add</Base>
    <Base exists={isEditing} component={Button} onClick={onEdit}>Save</Base>{' '}
    <Base exists={isEditing} component={Button} onClick={onCancel}>Cancel</Base>
  </div>
)

export default enhance(ReduxRichTextList);
