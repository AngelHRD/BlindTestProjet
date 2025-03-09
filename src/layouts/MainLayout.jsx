import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
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
