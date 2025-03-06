import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
    const location = useLocation();

    return (
        <>
            <Header />
            <main className={location.pathname === '/' ? '' : 'mt-18'}>
                <Outlet />
                {/* C'est où les routes enfant seront rendues */}
            </main>
        </>
    );
}

export default MainLayout;
