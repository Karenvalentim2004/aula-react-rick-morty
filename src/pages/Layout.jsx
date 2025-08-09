import { Outlet, Link } from "react-router-dom";
import Menu from '../Menu';

function Layout() {
    return (
        <>
            <header>
                <Menu />
            </header>
               
            <main>
                <h1>Rick and Morty</h1>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
