import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoAddCircle, IoTrash, IoCreate } from 'react-icons/io5';

const Productlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios('http://localhost:5000/products')
        setProducts(response.data);
    };

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProducts();
    };

  return (
    <div>
        <h1 className='title'>Product</h1>
        <h1 className='subtitle'>List Of Product</h1>
        <Link to={'/products/add'} className='button is-primary mb-2'><IoAddCircle /></Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index)=> (
                <tr key={product.uuid}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.user.name}</td>
                    <td>
                        <Link to={`/products/edit/${product.uuid}`} className='button is-small is-info mr-2'><IoCreate /></Link>
                        <button onClick={()=> deleteProduct(product.uuid)} className='button is-small is-danger'><IoTrash/></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Productlist;