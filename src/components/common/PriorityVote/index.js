import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';
import classNames from 'classnames';
import { func, number, string } from 'prop-types';

import { Icon, FieldError } from 'src/components';

import css from './style.css';

const propTypes = {
  value: number.isRequired,
  className: string.isRequired,
  error: string,

  onVoteUp: func.isRequired,
  onVoteDown: func.isRequired,
};

const handlersEnhancer = withHandlers({
  onVoteUp: ({ onChange, value }) => () => onChange(value - 1),
  onVoteDown: ({ onChange, value }) => () => onChange(value + 1),
});

const propsEnhancer = withPropsOnChange(['value', 'disabled'], ({ className, disabled, value }) => ({
  className: classNames({
    [className]: !!className,
    [css.vote]: true,
    [css.disabled]: disabled,
    [css.critical]: value <= 1,
  }),
}));

const enhance = compose(
  handlersEnhancer,
  propsEnhancer,
  pure,
);

const PriorityVote = ({
  value,
  className,
  error,

  onVoteUp,
  onVoteDown,
}) => (
  <div className={className}>
    <Icon
      wb="chevron-up"
      className={`${css.voteButton} ${css.upVoteButton}`}
      onClick={onVoteUp}
    />
    <span>{value || '–'}</span>
    <Icon
      wb="chevron-down"
      className={css.voteButton}
      onClick={onVoteDown}
    />
    <FieldError error={error} />
  </div>
);

PriorityVote.propTypes = propTypes;

export default enhance(PriorityVote);
