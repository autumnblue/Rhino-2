import ReactModal from 'react-modal';
import { oneOfType, instanceOf, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { compose, pure, withPropsOnChange } from 'recompose'

import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter';
import css from './style.css';

const modalContentType = oneOfType([
  instanceOf(ModalHeader),
  instanceOf(ModalBody),
  instanceOf(ModalFooter)
])

const propTypes = {
  children: oneOfType([
    modalContentType,
    arrayOf(modalContentType),
  ])
}

const propsEnhancer = withPropsOnChange(
  ['color', 'isOpen', 'fillIn', 'autoClose'],
  ({ color, isOpen, fillIn }) => ({
    closeTimeoutMS: 200,//autoClose ? 5000 : null,
    overlayClassName: {
      base: classNames({
        modal: true,
        fade: true,
        [`modal-${color}`]: !!color,
        [`modal-fill-in`]: !!fillIn,
        [css.overlay]: true
      }),
      afterOpen: 'show',
      beforeClose: css.hide
    },
    className: {
      base: 'modal-dialog'
    },
  })
);

const style = {
  content: {},
  overlay: {}
}

const enhance = compose(
  propsEnhancer,
  pure,
)

const Modal = ({
  isOpen,
  title,
  closeTimeoutMS,
  className,
  overlayClassName,
  backdropClassName,
  children,

  onAfterOpen,
  onRequestClose
}) => (
  <ReactModal
    isOpen={isOpen}
    closeTimeoutMS={closeTimeoutMS}
    style={style}
    className={className}
    overlayClassName={overlayClassName}
    contentLabel={title}

    onAfterOpen={onAfterOpen}
    onRequestClose={onRequestClose}
  >
    <div className="modal-content">
      {children}
    </div>
  </ReactModal>
)

export default enhance(Modal);
