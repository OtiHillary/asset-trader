import { Link } from "react-router-dom"

export default function Assets() {
    const assets = [
        {
            name: 'total',
            currency: '$',
            amount: 102.1,            
        },
        {
            name: 'balance',
            currency: '$',
            amount: 100,
        },
        {
            name: 'crypto',
            currency: '$',
            amount: 2.1,
        },
        
    ]

  return (
    <div className="assets flex flex-wrap w-full m-2">
        {
        assets.map((value, index)=> {
            return(
                <Link to={ value.name } className='p-1 px-2 bg-grsay-50 shadow-xs m-1 rounded-md w-full flex flex-col flex-start'>
                    <p className='font-light text-xs'>{ value.name.toUpperCase() }</p>
                    <div className="flex flex-row">
                        <p className='my-3 me-2 font-bold text-green-500'>{value.currency}</p>
                        <h1 className='font-extralight'>{value.amount}</h1>
                    </div>
                </Link>
                )
            })
        }
    </div>
  )
}
