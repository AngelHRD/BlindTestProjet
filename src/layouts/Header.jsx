import { Link, useNavigate } from 'react-router-dom';
import ButtonPerso from '../components/ButtonPerso';
import { useState, useEffect, useRef } from 'react';

function Header() {
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const checkUserInStorage = () => {
            const userFromStorage = localStorage.getItem('user');
            if (userFromStorage) {
                setUser(JSON.parse(userFromStorage));
            } else {
                setUser(null);
            }
        };

        // Vérifier immédiatement
        checkUserInStorage();

        // Écouter les changements du localStorage
        window.addEventListener('localStorageChanged', checkUserInStorage);
        window.addEventListener('storage', checkUserInStorage);

        // Fermer le dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup
        return () => {
            window.removeEventListener('storage', checkUserInStorage);
            window.removeEventListener('localStorageChanged', checkUserInStorage);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <>
            <header className='sticky top-0 left-0 z-50 w-full  bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(0,0,0,0.1))] backdrop-blur-[8px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)] '>
                <nav className='h-[72px]  items-center mx-35 justify-between hidden md:flex'>
                    <Link className='relative w-fit' to='/'>
                        <h1 className='t-briller-logo relative z-0 text-center'>blindify</h1>
                        <span className='t-briller-logo-vide absolute top-0.5 left-0.5 z-0 text-center transition-all duration-100 ease-in-out hover:top-1 hover:left-1'>
                            blindify
                        </span>
                    </Link>

                    {user ? (
                        <div className='relative' ref={dropdownRef}>
                            <div
                                className='flex items-center cursor-pointer gap-2 rounded-full px-4 py-2   hover:bg-neutral-800'
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    version='1.1'
                                    viewBox='0 0 80 80'
                                    width='25'
                                    height='25'
                                >
                                    <circle stroke='#7ff000' cx='40' cy='24.33' r='21.73' />
                                    <path
                                        stroke='#7ff000'
                                        d='M40,46.16h0c11.99,0,21.73,9.73,21.73,21.73v9.76H18.27v-9.76c0-11.99,9.73-21.73,21.73-21.73Z'
                                    />
                                </svg>
                                <span className='text-white font-semibold text-lg'>
                                    {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
                                </span>
                            </div>
                            {isDropdownOpen && (
                                <div className='absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-neutral-900 ring-1 ring-black ring-opacity-5'>
                                    <div className='py-1'>
                                        <button
                                            className='block w-full text-center para px-4 py-2 text-white hover:bg-neutral-800 transition-colors duration-200'
                                            onClick={() => {
                                                navigate('/compte');
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Mon compte
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className='block w-full text-center para px-4 py-2 text-white hover:bg-neutral-800 transition-colors duration-200'
                                        >
                                            Déconnexion
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <ButtonPerso
                            to='/login'
                            text='Connexion'
                            width='w-1/7'
                            height='h-3/5'
                            hidden='hidden lg:block'
                        />
                    )}
                </nav>
            </header>
        </>
    );
}

export default Header;
