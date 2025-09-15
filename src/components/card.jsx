import React, { useState } from "react";
import Models from "./models";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import"./style.css"

const Card = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {console.log("hi" ); setShow(false)}
  const handleShow = () => setShow(true);
  return (
    <>
      {book.map((item) => {
        const CoversBook =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        const price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (CoversBook != undefined && price != undefined) {
          return (
            <div className="card">
              <img src={CoversBook} alt="no image found" />
              <div>
                <h6 className="title">{item.volumeInfo.title}</h6>
                <p className="amount">&#8377;{price}</p>
              </div>
              <Button variant="success" onClick={handleShow} className="view-book">view book</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.volumeInfo.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img src={CoversBook} alt="image not found" />
                  <h1>{item.volumeInfo.title}</h1>
                  <h3>{item.volumeInfo.authors}</h3>
                  <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br />
                  <a href={item.volumeInfo.previewLink}><Button>More</Button></a>
                  <h4 className="Description">{item.volumeInfo.description}</h4>
                </Modal.Body>
              </Modal>
            </div>
          );
        }
      })}
    </>
  );
};
export default Card;
