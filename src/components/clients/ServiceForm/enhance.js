import { compose, pure, withHandlers } from 'recompose';

const handlersEnhancer = withHandlers({
  // this little trick allows to call onFieldChange after redux-form updates the store
  onFieldChange: ({ onFieldChange }) => () => setTimeout(() => onFieldChange()),
  onVoteUp: ({ onEdit, id, default_sort_priority }) => () => onEdit(id, {
    default_sort_priority: default_sort_priority - 1,
    commit: true,
  }),
  onVoteDown: ({ onEdit, id, default_sort_priority }) => () => onEdit(id, {
    default_sort_priority: default_sort_priority + 1,
    commit: true,
  }),
});

export default compose(
  handlersEnhancer,
  pure,
);
