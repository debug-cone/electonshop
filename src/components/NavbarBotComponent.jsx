// react
import { useState, useEffect } from 'react'

// service
import ProductsService from '../services/productsService'

// 1:17:00

function NavbarBotComponent() {
    const [category, setCategory] = useState([]);
    const [isActive, setIsActive] = useState(false)

    function handleActiveCategory() {
        setIsActive(!isActive)
    }

    useEffect(() => {
        ProductsService.getAllCategory()
            .then((res) => setCategory(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='bg-whiteTextColor py-[20px]'>
            <div className="container mx-auto flex-center gap-5 flex-col lg:flex-row h-full ">
                <button 
                className='bg-mainBlue text-whiteTextColor px-[12px] py-[8px] rounded-md cursor-pointer hover:bg-mainYellow transition-all duration-300'
                onClick={handleActiveCategory}>
                    {isActive ? 'Hide' : 'Show'} Category
                    {/* {
                        isActive
                        ?
                        'Hide Category'
                        :
                        'Show Category'
                    } */}
                </button>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center'>
                    {
                        isActive
                        ?
                        <>
                            {category.map((cat, i) => {
                                return (
                                <li 
                                key={i}
                                className='w-[250px] bg-mainBlue text-white px-[12px] py-[6px] text-center rounded-lg cursor-pointer hover:bg-mainYellow transition-all '
                                >
                                    {cat.slug}
                                </li>
                                )
                            })}
                        </>    
                        :
                        null
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavbarBotComponent