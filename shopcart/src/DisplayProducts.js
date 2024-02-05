import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DisplayProducts = ({ products, onQuantityChange }) => {
  // Initialize with null since no product is selected initially
  const [activeProductId, setActiveProductId] = useState(null);

  // Function to show modal for a specific product
  const handleShow = (productId) => setActiveProductId(productId);
  // Function to close the modal
  const handleClose = () => setActiveProductId(null);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="row align-items-center my-2 mx-2">
          <div className="col">
            <p className="product-name">{product.name}</p>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
              onClick={() => handleShow(product.id)} // Pass the product's id instead of just setting show to true
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col quantity-input-container">
            <input
              className="quantity-input"
              type="number"
              min="0"
              max="100"
              value={product.quantity}
              onChange={(e) =>
                onQuantityChange(product.id, parseInt(e.target.value))
              }
            />
            <span> quantity</span>
          </div>
          {activeProductId === product.id && ( // Check if this product's modal should be shown
            <Modal show={activeProductId !== null} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={product.image}
                  width="350"
                  alt={product.name}
                  className="mx-auto d-block"
                />
                <p>Rating: {product.rating}</p>
              </Modal.Body>
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;
