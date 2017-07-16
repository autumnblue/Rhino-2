import { pure } from 'recompose';
import { func, number } from 'prop-types';

import { Icon } from 'src/components';

import css from './style.css';

const propTypes = {
  onVoteUp: func.isRequired,
  onVoteDown: func.isRequired,
  value: number.isRequired,
};

const enhance = pure;

const Vote = ({
  onVoteUp,
  onVoteDown,
  value,
}) => (
  <div className={css.vote}>
    <Icon wb="chevron-up" className={css.voteButton} onClick={onVoteUp} />
    <span>{value}</span>
    <Icon wb="chevron-down" className={css.voteButton} onClick={onVoteDown} />
  </div>
);

Vote.propTypes = propTypes;

export default enhance(Vote);
