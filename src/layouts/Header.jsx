import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className='border border-b-black w-full shadow-sm bg-[#6262620D]'>
                <nav className='h-24 flex items-center justify-between mx-35 '>
                    <Link className='relative w-fit ' to='/'>
                        <h1 className='t-briller-logo relative z-10'>blindify</h1>
                        <span className='t-briller-logo-vide absolute top-1 left-1'>blindify</span>
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
