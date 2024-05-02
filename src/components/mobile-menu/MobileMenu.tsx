import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionBtn, DangerBtn, Theme } from '..';
import "./mobile-menu.scss";
import { UPDATE_EDITING_ID } from '../../redux/dataSlice';

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


    //handle click event
    const handleClick = () => {
        dispatch(UPDATE_EDITING_ID("add"))
        navigate(location.pathname === "/edit" ? "/" : "/edit");
    }

    return (
        <div className='menu-items'>
            <Theme />
            <ActionBtn clickHandler={handleClick}>  {location.pathname !== "/edit" ? "Add New Joke" : "Back to Jokes"}</ActionBtn>
            <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
        </div>
    )
}