import Wrapper from "~/components/wrapper"
import Logo from "./logo"
import Dropdown from "./dropdown"
import Search from "./search"
import User from "./user"
import Shop from "./shop"
import { Link , useLocation } from "react-router-dom"
import { SHOP_LINK , PRODUCT_LINK } from "~/utils/consts/menu"
import { useAuth } from "~/stores/auth/hooks"
import classNames from "classnames"

function Header() {

    const user = useAuth()
    const location = useLocation()

    const isShopPage = location.pathname.startsWith('/shop');
    const isProfilePage = location.pathname.startsWith('/profile');
    const isOrderPage = location.pathname.startsWith('/order');
    const isContactPage = location.pathname.startsWith('/contact');
    
    return (
        <Wrapper
        classname={classNames('bg-orange py-[18px]' , 
        {   
            '!bg-white': isShopPage || isProfilePage || isOrderPage || isContactPage ,
        }
        )}>
            <div className="flex items-center justify-between">
                <Logo variant='header' />
                <nav className="lg:block hidden">
                    <ul className="flex items-center text-sm font-medium gap-x-10">
                        <li>
                            <Link>
                                Home
                            </Link>
                        </li>
                        <li className="relative">
                            <Link
                            to='/shop'
                            className="rounded py-1 px-1"
                            >Shop
                            </Link>
                        </li>
                        <li className="relative">
                            <Dropdown 
                            name='Product'
                            >
                            {
                                PRODUCT_LINK.map((shop , index) => (
                                    <Link
                                    key={index}
                                    to={shop.path}
                                    className="hover:bg-[#FFAB00] transition-colors w-full block rounded py-1 px-1"
                                    >{shop.title}
                                    </Link>
                                ))
                            }
                            </Dropdown>
                        </li>
                        <li>
                           <Link to='/contact'>
                                Contact Us
                           </Link>     
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-x-4">
                    <Search />
                    {user ? <User to='/profile' /> : <User to='/login' />}
                    <Shop /> 
                </div>
            </div>
        </Wrapper>
    )
}

export default Header