import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Paragraph,
  ModalHeader,
  ModalHeading
} from "@twilio-paste/core";

export const Submit = (props) => {
  const { reset, pristine, submitting } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    reset();
  };
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleOpen}
        disabled={pristine || submitting}
      >
        Submit
      </Button>
      <Modal
        ariaLabelledby="submit"
        isOpen={isOpen}
        onDismiss={handleClose}
        size="default"
      >
        <ModalHeader>
          <ModalHeading as="h5" id="submit">
            Thanks for submitting!
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>Come again soon....</Paragraph>
        </ModalBody>
      </Modal>
    </div>
  );
};
