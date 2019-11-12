import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

// import { Container } from './styles';

export default function AlertModal({
  handleCallback,
  handleCloseModal,
  showModal,
  title,
  message,
}) {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          CANCEL {}
        </Button>
        <Button variant="primary" onClick={handleCallback}>
          CONFIRM
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleCallback: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
