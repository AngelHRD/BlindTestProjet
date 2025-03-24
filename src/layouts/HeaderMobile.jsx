import { useLocation, Link } from 'react-router-dom';

function HeaderMobile() {
    const location = useLocation();

    // Détermine quel SVG doit avoir un fill actif
    const getFill = (path) => (location.pathname === path ? '#7ff000' : 'none');

    return (
        <header className='fixed top-[92vh] left-1/2 transform -translate-x-1/2 w-auto px-6 p-2 bg-blur-dark rounded-t-lg flex space-x-16 lg:hidden z-50'>
            {/* Accueil */}
            <Link to='/' className='flex flex-col items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 80 80' width='25' height='25'>
                    <polygon
                        fill={getFill('/')}
                        stroke='#7ff000'
                        points='77.2 39.38 40 2.18 2.8 39.38 15.09 39.38 15.09 77.82 64.91 77.82 64.91 39.38 77.2 39.38'
                    />
                </svg>
                <p className='text-[10px] text-[chartreuse]'>Accueil</p>
            </Link>

            {/* Blind Test */}
            <Link to='/genres' className='flex flex-col items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 80 80' width='25' height='25'>
                    <path
                        fill={getFill('/genres')}
                        stroke='#7ff000'
                        d='M29.35,6.04l-6.64,50.45c-2.23-2.25-5.31-3.64-8.73-3.64-6.79,0-12.3,5.51-12.3,12.3s5.51,12.3,12.3,12.3,12.12-5.34,12.28-12l7.12-54.71h39.98c-1.21,7.92-4.41,33.16-6.15,46.98-2.23-2.28-5.34-3.69-8.78-3.69-6.79,0-12.3,5.51-12.3,12.3s5.51,12.3,12.3,12.3c6.33,0,11.54-4.79,12.22-10.94h.04s6.98-54.07,7.72-58.93l.41-2.7H29.35Z'
                    />
                </svg>
                <p className='text-[10px] whitespace-nowrap text-[chartreuse]'>Blind test</p>
            </Link>

            {/* Compte */}
            <Link to='/login' className='flex flex-col items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 80 80' width='25' height='25'>
                    <circle fill={getFill('/compte')} stroke='#7ff000' cx='40' cy='24.33' r='21.73' />
                    <path
                        fill={getFill('/compte')}
                        stroke='#7ff000'
                        d='M40,46.16h0c11.99,0,21.73,9.73,21.73,21.73v9.76H18.27v-9.76c0-11.99,9.73-21.73,21.73-21.73Z'
                    />
                </svg>
                <p className='text-[10px] text-[chartreuse]'>Compte</p>
            </Link>
        </header>
    );
}

export default HeaderMobile;
