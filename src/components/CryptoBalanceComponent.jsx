import React from 'react';

const CryptoBalanceComponent = () => {
  const userCryptoBalance = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: 0.1,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: 1.5,
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      balance: 10,
    },
  ]; 

  return (
        // <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        //     <h1 className="text-3xl font-bold mb-4 text-yellow-300">Your Crypto Balance</h1>
        //     <div className="flex flex-col items-center justify-center w-full">
        //         {
        //             userCryptoBalance.map((crypto, index) => (
        //             <div key={index} className="flex flex-row justify-between w-full p-4 border-b border-gray-600">
        //                 <div className="flex flex-col items-start">
        //                 <p className="text-lg font-bold text-blue-500">{crypto.name}</p>
        //                 <p className="text-sm text-gray-400">{crypto.symbol}</p>
        //                 </div>
        //                 <div className="flex flex-col items-end">
        //                 <p className="text-lg font-bold text-green-500">{crypto.balance}</p>
        //                 <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2">
        //                     Withdraw
        //                 </button>
        //                 </div>
        //             </div>
        //             )
        //         )}
        //     </div>
        // </div>
            <main>
                <div className='p-1 px-2 bg-grsay-50 shadow-xs m-1 rounded-md w-full flex flex-col flex-start'>
                    <p className='font-light text-xs'>{ 'crypto'.toUpperCase() }</p>
                    <div className="flex flex-row">
                        <p className='my-3 me-2 font-bold text-green-500'>$</p>
                        <h1 className='font-extralight'>100</h1>
                    </div>
                </div>
                <div className="overflow-x-auto assets flex w-full m-2">
                    <table className="min-w-full rounded-lg shadow-xs text-sm text-left">
                        {
                            userCryptoBalance.map((value, index)=> {
                                return(
                                    <tbody key={index}>
                                        <tr className="hover:bg-transparent">
                                            {/* <td className="px-1 py-2 w-10">
                                                <img src={ value.image } alt="gcard image" className="w-6"/>
                                            </td> */}
                                            <td className="px-1 py-2">{value.name}</td>
                                            <td className="px-1 py-2 font-bold text-teal-500">{value.balance}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </table>
                </div>
            </main>
  );
};

export default CryptoBalanceComponent;


