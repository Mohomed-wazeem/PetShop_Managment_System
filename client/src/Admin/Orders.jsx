import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Orders.css";
import axios from 'axios';
import jsPDF from 'jspdf';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/orders')
      .then(result => setOrders(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleOrderAction = (orderId, action) => {
    switch(action) {
      case 'deliver':
        // Add logic to mark the order as delivered
        alert(`Order ${orderId} delivered`);
        break;
      case 'download':
        // Generate and download the receipt
        const order = orders.find(order => order._id === orderId);
        generateReceipt(order);
        break;
      default:
        break;
    }
  };


  const generateReceipt = (order) => {
    const doc = new jsPDF();
    const deliveryCharge = 400;
    const totalPrice = order.productPrice * order.customerQuantity + deliveryCharge;
    
    doc.text('Pet care', 20, 10);
    doc.text('Customer Information:', 20, 20);
    doc.text(`Name: ${order.customerName}`, 20, 30);
    doc.text(`Email: ${order.customerEmail}`, 20, 40);
    doc.text(`Address: ${order.customerAddress}`, 20, 50);
    doc.text(`Contact: ${order.customerContact}`, 20, 60);

    doc.text('Ordered Product', 20, 80);
   // doc.text(`Product ID: ${order.productId}`, 20, 90);
    doc.text(`Name: ${order.productName}`, 20, 100);
    doc.text(`Price: $${order.productPrice}`, 20, 110);
    doc.text(`Quantity: ${order.customerQuantity}`, 20, 120);
    doc.text(`Delivery Charge: $${deliveryCharge}`, 20, 130);
    doc.text(`Total Price: $${totalPrice}`, 20, 140);

    doc.save('receipt.pdf');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Orders</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className='text-center'>
              <th scope="col">Customer</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delivery Method</th>
              <th scope="col">Pick-up Date</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.customerAddress}</td>
                <td>{order.customerContact}</td>
                <td>{order.customerQuantity}</td>
                <td>{order.productDelivery === '1' ? 'Deliver' : 'Pick-Up'}</td>
                <td>{order.productDelivery === '2' ? new Date(order.pickupDate).toLocaleDateString() : 'Delivery'}</td>
                <td>{order.productName}</td>
                <td>${order.productPrice}</td>
                <td className="text-center">
                  <button className="btn btn-link-style  me-2" onClick={() => handleOrderAction(order._id, 'deliver')}>Deliver</button>
                  <button className="btn btn-light  me-2" onClick={() => handleOrderAction(order._id, 'download')}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
