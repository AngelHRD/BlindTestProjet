import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
    const location = useLocation();

    return (
        <>
            <Header />
            <main>
                <Outlet />
                {/* C'est où les routes enfant seront rendues */}
            </main>
        </>
    );
}

export default MainLayout;
