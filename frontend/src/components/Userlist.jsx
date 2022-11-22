import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoAddCircle, IoTrash, IoCreate } from 'react-icons/io5';

const Userlist = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios('http://localhost:5000/users')
        setUsers(response.data);
    };

    const deleteUsers = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    };

  return (
    <div>
        <h1 className='title'>Users</h1>
        <h1 className='subtitle'>List Of Users</h1>
        <Link to={'/users/add'} className='button is-primary mb-2'><IoAddCircle /></Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={user.uuid}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                        <Link to={`/users/edit/${user.uuid}`} className='button is-small is-info mr-2'><IoCreate/></Link>
                        <button onClick={() => deleteUsers(user.uuid)} className='button is-small is-danger'><IoTrash/></button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Userlist;