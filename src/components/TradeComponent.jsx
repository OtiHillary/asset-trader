import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const TradeComponent = () => {
  const [tradeData, setTradeData] = useState({
    name: '',
    image: null,
    crypto: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { trade } = useLocation();
  const queryParams = new URLSearchParams(trade);
  const query = queryParams.get('crypto');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTradeData({ ...tradeData, [name]: value });
  };

  const handleImageChange = (event) => {
    setTradeData({ ...tradeData, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', tradeData.name);
    formData.append('image', tradeData.image);

    // Send data to backend server
    fetch('/api/trade', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess('Trade successful!');
          setError(null);
        } else {
          setError(data.error);
          setSuccess(null);
        }
      })
      .catch((error) => {
        setError('Error sending trade data');
        setSuccess(null);
      });
  };

  return (
    <main>
      <div className="p-1 px-2 bg-gray-50 shadow-xs m-1 rounded-md w-full flex flex-col flex-start">
        <h1 className="font-bold text-lg">Trade</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-bold text-sm" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={tradeData.name}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-bold text-sm" htmlFor="image">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Trade
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm mt-2">{success}</p>
          )}
        </form>
      </div>
    </main>
  );
};

export default TradeComponent;