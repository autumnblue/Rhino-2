import { compose, pure, withHandlers, withState, withPropsOnChange } from 'recompose';

import { SafeHTML, RichText, Button } from 'src/components';

import RichTextListItem from './RichTextListItem';
import css from './style.css'

const editorValueEnhancer = withState('editorValue', 'onEditorValueChange', '');
const editingIndexEnhancer = withState('editIndex', 'onSetEditIndex')

const handlersEnhancer = withHandlers({
  onAdd: ({ onChange, editorValue, input: { value } }) => () => {
    onChange([
      ...value,
      editorValue,
    ])
  },

  onEdit: ({ onChange, editing }) => () => {},

  onSetEditIndex: ({ onSetEditIndex, onEditorValueChange, input: { value } }) => index => {
    onEditorValueChange(value[index]);
    onSetEditIndex(index);
  },

  onRemove: ({ onChange, input: { value } }) => index => () => {}
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
        className={`${css.item} ${editIndex === index ? css.editingItem : ''}`}
        key={index}
        index={index}
        html={item}
        onSetEditIndex={onSetEditIndex}
        onRemove={onRemove}
      />
    ))}
    <RichText onChange={onEditorValueChange} value={editorValue} />
    <Base exists={isEditing} component={Button} onClick={onEdit}>Save</Base>
    <Base exists={isEditing} component={Button} onClick={onCancel}>Cancel</Base>
    <Base exists={!isEditing} component={Button} onClick={onAdd}>Add</Base>
  </div>
)

export default enhance(ReduxRichTextList);
