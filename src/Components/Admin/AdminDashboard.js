import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployer, listEmployer } from '../../redux/actions/adminAction';

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const dispatch = useDispatch();

  const { employer } = useSelector(state => state.listEmployer);

  const {
    success: successCreate,
    message: messageCreate,
    error: errorCreate,
  } = useSelector(state => state.addEmployer);

  useEffect(() => {
    if (successCreate) {
      dispatch(listEmployer());
    }
  }, [successCreate])

  useEffect(() => {
    dispatch(listEmployer());
  }, [])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddEmployee = (event) => {
    event.preventDefault();
    dispatch(addEmployer(formData));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Add Employee</h2>
        {errorCreate ? <p className="error-message">{errorCreate}</p> : null}
        <label>
          Name:
          <input
            style={{ width: '300px', height: '40px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', padding: '0 10px', marginBottom: '20px' }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Company:
          <input
            style={{ width: '300px', height: '40px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', padding: '0 10px', marginBottom: '20px' }}
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            style={{ width: '300px', height: '40px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', padding: '0 10px', marginBottom: '20px' }}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            style={{ width: '300px', height: '40px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', padding: '0 10px', marginBottom: '20px' }}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            style={{ width: '300px', height: '40px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', padding: '0 10px', marginBottom: '20px' }}
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
        </label>
        <button style={{ width: '300px', height: '40px', fontSize: '16px', backgroundColor: '#227093', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={handleAddEmployee}>Add Employee</button>
      </div>
      <div style={{ marginRight: '20px', width: '300px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Employer List</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Company</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {employer?.map(employer => (
              <tr key={employer.id}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employer.name}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employer.company}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{employer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
