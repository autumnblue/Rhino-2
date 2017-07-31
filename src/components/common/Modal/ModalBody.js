import { pure } from 'recompose';

import css from './style.css'

const enhance = pure;

const ModalBody = ({ children }) => (
  <div className={`modal-body ${css.body}`}>
    {children}
  </div>
)


export default enhance(ModalBody);
