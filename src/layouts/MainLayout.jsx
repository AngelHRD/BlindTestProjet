import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
    const location = useLocation(); // Récupère l'URL actuelle

    // Masquer le Header si l'utilisateur est sur la page d'erreur
    const hideHeader = location.pathname === '/404';

    return (
        <>
            {!hideHeader && <Header />} {/* Afficher le Header seulement si hideHeader est false */}
            <main>
                <Outlet />
                {/* C'est où les routes enfant seront rendues */}
            </main>
        </>
    );
}

export default MainLayout;
