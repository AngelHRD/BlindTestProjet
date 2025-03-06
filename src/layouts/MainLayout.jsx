import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
    return (
        <>
            <Header />
            <main className='mt-18'>
                <Outlet />
                {/* C'est ou les routes enfant seront render */}
            </main>
        </>
    );
}

export default MainLayout;
