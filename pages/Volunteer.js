import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/Volunteer_ListApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/Success');
      } else {
        const data = await response.json();
        console.error('error:', data.message);
      }
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">Volunteer</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;