import { Link } from 'react-router-dom';
import ButtonPerso from '../components/ButtonPerso';

function Header() {
    return (
        <>
            <header className='sticky top-0 left-0 z-50 w-full  bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(0,0,0,0.1))] backdrop-blur-[8px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)] '>
                <nav className='h-[72px] bg-amber-300 items-center mx-35 justify-between hidden md:flex'>
                    <Link className='relative w-fit' to='/'>
                        <h1 className='t-briller-logo relative z-0 text-center'>blindify</h1>
                        <span className='t-briller-logo-vide absolute top-0.5 left-0.5 z-0 text-center transition-all duration-100 ease-in-out hover:top-1 hover:left-1'>
                            blindify
                        </span>
                    </Link>
                    <div className='w-1/7 h-3/5 bg-blue-600 '>
                        <ButtonPerso
                            to='/login'
                            text='Connexion'
                            width='w-full'
                            height='h-full'
                            hidden='hidden lg:block'
                        />
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
