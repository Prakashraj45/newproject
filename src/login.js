import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true); 
    
    const storedCredentials = JSON.parse(localStorage.getItem('credentials')) || {};

    if (storedCredentials[email]) {
      
      if (storedCredentials[email] === password) {
        toast.success('Login successful!');
        navigate('/success'); 
      } else {
        toast.error('Incorrect password.');
      }
    } else {
      
      const updatedCredentials = { ...storedCredentials, [email]: password };
      localStorage.setItem('credentials', JSON.stringify(updatedCredentials)); 
      toast.success('Registration successful!');
      navigate('/success');
    }

    setLoading(false); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">Login</h1>
        <form onSubmit={handleSubmit}>
          <InputComponent 
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            errors={errors}
          />
          <ButtonComponent disabled={loading} />
        </form>
        {loading && <p className="mt-4 text-center text-gray-600">Loading...</p>}
      </div>
    </div>
  );
};

export default Login;
