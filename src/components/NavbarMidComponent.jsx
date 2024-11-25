// router
import { Link } from 'react-router-dom'

// clerk
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

// assets
import logo from '../assets/logo.png'

// react-icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

function NavbarMidComponent() {
    const navItems = [
        {
            icon: <CiUser color='white' size={26} />,
            title: 'Sign In'
        },
        {
            icon: <CiHeart color='white' size={26} />,
            title: 'Favorites',
            count: 0
        },
        {
            icon: <CiShoppingCart color='white' size={26} />,
            title: 'Cart',
            path: '/cart',
            count: 0
        }
    ]

    return (
        <div>
            <nav className='bg-mainBlue h-full md:h-[100px] py-[20px]'>
                <div className="h-full container mx-auto flex-center justify-between flex-col md:flex-row gap-5">
                    <img 
                    src={logo} 
                    alt="Electon" 
                    />
                
                    <div className='bg-whiteTextColor flex rounded-[20px]'>
                        <input 
                        type="text" 
                        placeholder='Search products...'
                        className='bg-transparent outline-none px-8 py-4'
                        />
                        <button
                        className='bg-mainYellow text-whiteTextColor px-8 py-4 rounded-r-[20px]'
                        >
                            Search
                        </button>
                    </div>

                    <div>
                        <ul className='flex-center gap-4'>
                            <li className='flex-center'>
                                <div className='flex-center'>
                                    {navItems[0].icon}
                                </div>
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton showName={true} appearance={{
                                        elements: {
                                            avatarBox: 'w-[40px] h-[40px]'
                                        },
                                        variables: {
                                            colorText: '#EDA415'
                                        }
                                    }} />
                                </SignedIn>
                            </li>
                            <li className='flex-center gap-2'>
                                <div className='flex-center'>
                                    {navItems[1].icon}
                                    <span className='badge'>{navItems[1].count}</span>
                                </div>
                                <Link 
                                to={'/'}
                                className='text-whiteTextColor'
                                >
                                    {navItems[1].title}
                                </Link>
                               
                            </li>
                            <li className='flex-center gap-2'>
                                <div className='flex-center'>
                                    {navItems[2].icon}
                                    <span className='badge'>{navItems[2].count}</span>
                                </div>    
                                <Link 
                                to={'/cart'}
                                className='text-whiteTextColor'
                                >
                                    {navItems[2].title}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarMidComponent