import React from 'react';

const BalanceComponent = () => {
  const userBalance = 1000; // Replace with actual user balance

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Balance</h1>
      <p className="text-2xl font-bold">{userBalance}</p>
      <div className="flex flex-row justify-around w-full mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Withdraw
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default BalanceComponent;