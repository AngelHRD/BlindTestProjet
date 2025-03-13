import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import { useEffect, useState } from 'react';

function MainLayout() {
    const location = useLocation(); // Récupérer l'URL actuelle
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Détecter la taille de l'écran

    // Met à jour `isMobile` lors du redimensionnement de l'écran
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Définir les pages où `HeaderMobile` ne doit pas apparaître
    const hideHeaderMobile = location.pathname.startsWith('/genres/');

    return (
        <>
            {/* Affichage conditionnel pour éviter le chevauchement */}
            {!isMobile && <Header />}
            {isMobile && !hideHeaderMobile && <HeaderMobile />}

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
