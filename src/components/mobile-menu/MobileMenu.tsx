import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionBtn, DangerBtn, ThemeSelector } from '..';
import "./mobile-menu.scss";
import { RESET_LAUNCH, UPDATE_EDITING_ID } from '../../redux/lauchSlice';

export const MobileMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        Cookies.remove(token);
        navigate("/login");
    }

    const token = import.meta.env.VITE_COOKIE_TOKEN;

    //curent route
    const location = useLocation();


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
        <div className='menu-items'>
            <ThemeSelector />
            <ActionBtn clickHandler={handleClick}>  {location.pathname !== "/edit" ? "Add New Launch" : "Back to Launches"}</ActionBtn>
            <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
        </div>
    )
}