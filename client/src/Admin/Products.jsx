import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
import { Link } from 'React-router-dom'; 
import axios from 'axios';

const Products = () => {

  //Get product details from the database
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err));
  }, []);


  //Delete function to delete record from the table
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="row w-100 mt-3 mb-3">
        <div className="col-12 text-center">
        </div>
      </div>
      <h3 className="text-center mb-4"> Pets and Accessories</h3>

      <div className="row w-100 flex-grow-1 overflow-auto">
        <div className="col-12">
          <div className="table-responsive">

            <table className="table custom-table">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>
                      <img src={product.image} alt={product.name} className="img-fluid product-image" />
                    </td>
                    <td>
                      <Link to={`/UpdateProducts/${product._id}`} className="btn btn-light m-1">Update</Link>
                      <button className="btn btn-danger m-1" onClick={() => handleDelete(product._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Link to="/CreateProducts" className="btn btn-success mb-5">Add Product</Link>
    </div>
  );

 
}

export default Products;
