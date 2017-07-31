import { compose, pure, withPropsOnChange } from 'recompose';
import sanitizeHtml from 'sanitize-html'

const propsEnhancer = withPropsOnChange(['html'], ({ html }) => ({
  html: { __html: sanitizeHtml(html) },
  exists: !!html,
}))

const enhance = compose(
  propsEnhancer,
  pure,
)

const SafeHTML = ({
  html,
  exists,
  component,
}) => (
  <Base
    component={component || 'div'}
    exists={exists}
    dangerouslySetInnerHTML={html}
  />
);

export default enhance(SafeHTML);
