import { Link } from 'react-router-dom';
import './cssLayouts/header.css';

function Header() {
    return (
        <>
            <header className='sticky top-0 left-0 z-50 w-full bg-blur-nav'>
                <nav className='h-18 items-center mx-35 justify-start hidden md:flex'>
                    <Link className='relative w-fit' to='/'>
                        <h1 className='t-briller-logo relative z-10 text-center'>blindify</h1>
                        <span className='t-briller-logo-vide absolute top-1 left-1 z-0 text-center'>blindify</span>
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
