import { Outlet, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setPrevUrl } from "../api/navSlice";


const RequireAuth = () => {
    const token = import.meta.env.VITE_COOKIE_TOKEN;

    const checkCookiePresence = (name: string) => {
        const cookies = document.cookie.split('; ');
        return cookies.some(cookie => cookie.startsWith(name + '='));
    };

    const isCookiePresent = checkCookiePresence(token);
    //back to login page
    const reroute = () => {
        return <Navigate to="/login" />
    }

    return isCookiePresent ? <Outlet /> : reroute();

}

export default RequireAuth;
