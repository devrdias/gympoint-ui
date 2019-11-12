import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

// import { Container } from './styles';

export default function CustomModal({
  title,
  handleCallback,
  handleCloseModal,
  showModal,
  children,
  showHeader,
  showFooter,
  ...rest
}) {
  return (
    <Modal show={showModal} onHide={handleCloseModal} {...rest}>
      {showHeader && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>

      {showFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleCallback}>
            CONFIRM
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

CustomModal.defaultProps = {
  title: '',
  showHeader: true,
  showFooter: true,
};

CustomModal.propTypes = {
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  handleCallback: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
