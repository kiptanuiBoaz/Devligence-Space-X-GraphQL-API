import './navbar.scss';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionBtn, DangerBtn, MobileMenu, ThemeSelector } from '..';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';
import { RESET_USER, selectTheme } from '../../redux/authSlice';
import { RESET_LAUNCH, UPDATE_EDITING_ID, selectEditingId } from '../../redux/lauchSlice';

export const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const token = import.meta.env.VITE_COOKIE_TOKEN;

    //redux store states
    const theme = useSelector(selectTheme);
    const editingId = useSelector(selectEditingId);
    console.log(editingId)
    //navigation fns
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //remove cookie 
    const logOut = () => {
        Cookies.remove(token);
        dispatch(RESET_USER());//remove user from redux
        navigate("/login");
    }

    //curent route
    const location = useLocation();


    //handle click event
    const handleClick = () => {
        dispatch(RESET_LAUNCH());
        if (location.pathname === "/") {
            dispatch(UPDATE_EDITING_ID("add"));
            navigate("/edit");
        } else {
            navigate("/");
        }
    }


    return (
        <nav className={`navbar-container ${theme}-nav`}>
            <h1 className='logo mobile-logo-display'>SpaceX</h1>
            <h1 className='logo desktop-logo-display'>SpaceX Launches</h1>
            {/* display limit selectror when viewing table */}
            {
                showMobileNav ?
                    <AiOutlineClose
                        size={30}
                        className="menu-icon"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                    />
                    :
                    <HiOutlineMenuAlt3
                        size={30}
                        className="menu-icon"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                    />
            }

            <div className={`nav-items ${showMobileNav && "mobile-nav"}`}>

                <div className="link-container">
                    <ActionBtn clickHandler={handleClick}>  {location.pathname !== "/edit" ? "Add New Launch" : "Back to Launches"}</ActionBtn>
                    <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
                </div>
                <ThemeSelector />
            </div>

            {/* menu that shows on mobile screen */}
            {showMobileNav && <div className="mobile-menu-container">
                <MobileMenu />
            </div>
            }

        </nav>
    )
}