import React from 'react'
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const GraphModal = () => {
    useEffect(() => {
        setShow(true);
      }, []);
      const handleClose = () => {
        setShow(false)
        Navigate("/")
    };
    
      const [show, setShow] = useState(false);
      const Navigate = useNavigate()
    
    return (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Employees Hierarchy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h1>Bhai mere graph hi to nahi ban raha hai</h1>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default GraphModal
