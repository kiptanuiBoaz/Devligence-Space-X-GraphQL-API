import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './components';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "650px" }}>
                {/* everrything between nav and footer */}
                <Outlet />

            </main>
            <Footer />
        </>
    )
}