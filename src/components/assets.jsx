export default function Assets() {
    const assets = [
        {
            name: 'balance',
            currency: '$',
            amount: 100,
        },
        {
            name: 'Crypto',
            currency: 'eth',
            amount: 2.1,
        },
        
    ]

  return (
    <div className="assets flex w-full m-2">
        {
        assets.map((value, index)=> {
            return(
                <div className='p-1 px-2 bg-grsay-50 shadow-xs m-1 rounded-md w-full flex flex-col flex-start'>
                <p className='font-light text-xs'>{value.name}</p>
                <div className="flex flex-row">
                    <p className='my-3 me-2 font-bold text-green-500'>{value.currency}</p>
                    <h1 className='font-extralight'>{value.amount}</h1>
                </div>
                </div>
                )
            })
        }
    </div>
  )
}
