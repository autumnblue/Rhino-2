import { pure } from 'recompose';

const enhance = pure;

const ModalFooter = ({ children }) => (
  <div className="modal-footer">
    {children}
  </div>
)


export default enhance(ModalFooter);
