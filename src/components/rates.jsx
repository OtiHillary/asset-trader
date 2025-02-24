export default function Rates() {
    const assets = [
        {
            name: 'Razer gold',
            rate: 1300,
            image: '../src/images/razer.avif',
        },
        {
            name: 'steam',
            rate: 1250,
            image: '../src/images/steam.webp'
        },
        {
            name: 'apple',
            rate: 1000,
            image: '../src/images/apple.png'
        },
    ]

    return (
        <div class="overflow-x-auto assets flex w-full m-2">
            <table class="min-w-full rounded-lg shadow-xs text-sm text-left">
                {/* <thead class="bg-gray-100">
                <tr>
                    <th class="px-1 py-2 border-b font-medium text-gray-700">Name</th>
                    <th class="px-1 py-2 border-b font-medium text-gray-700">Age</th>
                    <th class="px-1 py-2 border-b font-medium text-gray-700">Occupation</th>
                </tr>
                </thead> */}
                {
                    assets.map((value, index)=> {
                        return(
                            <tbody key={index}>
                                <tr class="hover:bg-transparent">
                                    <td class="px-1 py-2 w-10">
                                        <img src={ value.image } alt="gcard image" className="w-6"/>
                                    </td>
                                    <td class="px-1 py-2">{value.name}</td>
                                    <td class="px-1 py-2" className="font-bold text-teal-500">{value.rate}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    )
}