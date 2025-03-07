import { Link } from 'react-router-dom';
import './cssLayouts/header.css';

function Header() {
    return (
        <>
            <header className='fixed top-0 left-0 z-50 w-full bg-blur-nav'>
                <nav className='h-18 flex items-center justify-between mx-35 '>
                    <Link className='relative w-fit ' to='/'>
                        <h1 className='t-briller-logo relative z-10'>blindify</h1>
                        <span className='t-briller-logo-vide absolute top-1 left-1 z-0'>blindify</span>
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
