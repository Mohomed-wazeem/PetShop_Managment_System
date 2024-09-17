import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate, useParams } from 'React-router-dom';

const UpdateProducts = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();


  //Function to Update data 
  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(result => {
        const product = result.data;
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setImage(product.image);
      })
      .catch(err => console.log(err));
  }, [id]);

  //Function to Update the image 
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
      .put(`http://localhost:3001/UpdateProducts/${id}`, { name, description, price, image })
      .then((result) => {
        console.log(result);
        navigate('/Products');
      })
      .catch((err) => console.log(err));
  };

  //Clear the form details
  const handleReset = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="container-fluid d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className='col-12 col-md-8 col-lg-6 bg-white rounded p-4 shadow-lg' style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 className="text-center mb-4">Update Products</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='text'
              id="productName"
              value={name}
              className='form-control'
              required
              placeholder='Enter product name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <textarea
              id="productDescription"
              value={description}
              className='form-control'
              required
              placeholder='Enter product description'
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='mb-3'>
            <input
              type='number'
              id="productPrice"
              value={price}
              className='form-control'
              required
              placeholder='Enter product price'
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
            {image && <img src={image} alt={name} className="img-fluid mt-2" style={{ maxHeight: '200px', width: '100%', objectFit: 'contain' }} />}
          </div>
          <div className='d-grid gap-2'>
            <button type="submit" className='btn btn-success w-100'>Update</button>
            <button type="reset" className="btn btn-light w-100" onClick={handleReset}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
