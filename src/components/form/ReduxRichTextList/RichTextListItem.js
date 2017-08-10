import { compose, pure, withHandlers } from 'recompose'

import { SafeHTML } from 'src/components';

const handlersEnhancer = withHandlers({
  onDoubleClick: ({ onSetEditIndex, index }) => (evt) => {
    evt.preventDefault();
    onSetEditIndex(index);
  }
});

const enhance = compose(
  handlersEnhancer,
  pure,
)

const RichTextListItem = ({
  html,
  className,
  onDoubleClick,
}) => (
  <SafeHTML
    className={className}
    html={html}
    onDoubleClick={onDoubleClick}
  />
)

export default enhance(RichTextListItem);
