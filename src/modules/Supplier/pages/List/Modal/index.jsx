import React from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';

function ListModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="tiny"
      dimmer
    >
      <Modal.Header>
        Add Product Details
      </Modal.Header>

      <Modal.Content>
        <Input fluid placeholder="Enter Product Category" style={{ marginBottom: "10px" }} />
        <Input fluid placeholder="Enter Product Name" style={{ marginBottom: "10px" }} />
        <Input fluid placeholder="Product Industry Size" style={{ marginBottom: "10px" }} />
        <Input fluid placeholder="Product Finish Type" style={{ marginBottom: "10px" }} />
        <Input fluid placeholder="Enter Colour" style={{ marginBottom: "10px" }} />
        <Input fluid placeholder="Enter Image URL" style={{ marginBottom: "10px" }} />

        <Button>
          Submit
        </Button>
      </Modal.Content>
    </Modal>
  )
}

export default ListModal