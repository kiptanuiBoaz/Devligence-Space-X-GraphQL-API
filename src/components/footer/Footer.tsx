import "./footer.scss";
import { selectTheme } from '../../redux/themeSlice';
import { useSelector } from 'react-redux';

export const Footer = () => {
    const theme = useSelector(selectTheme);
    return (
        <footer className={`${theme}-footer`}>
            <p>spaceXLaunchesDataApp&#169;{new Date().getFullYear()} || developed by{" "}
                <a href="https://github.com/kiptanuiBoaz" target="_bland">@kiptanuiBooaz</a>
            </p>
        </footer>
    )
}