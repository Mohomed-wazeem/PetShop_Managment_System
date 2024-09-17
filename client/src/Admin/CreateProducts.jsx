import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateProducts.css';
import axios from 'axios';
import {useNavigate} from 'React-router-dom';


const CreateProducts = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate()

  //function to add images to the Product table
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/CreateProducts", { name, description, price, image })
      .then((result) => {
        console.log(result)
        navigate('/Products');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-4 shadow-lg'>
        <h2 className="text-center mb-4">Add Products</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            {/* <label htmlFor="productName" className='form-label'>Name</label> */}
            <input
              type='text'
              id="productName"
              placeholder='Enter product name'
              className='form-control'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <textarea
              id="productDescription"
              placeholder='Enter product description'
              className='form-control'
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='mb-3'>
            <input
              type='number'
              id="productPrice"
              placeholder='Enter product price'
              className='form-control'
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type='file'
              id="productImage"
              className='form-control'
              required
              onChange={handleImageChange}
            />
          </div>
          <div className='d-grid gap-2'>
            <button type="submit" className='btn btn-success w-100'>Submit</button>
            <button type="reset" className="btn btn-light w-100">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
