import { Link } from 'react-router-dom';
import ButtonPerso from '../components/ButtonPerso';

const ErrorPage = () => {
    return (
        <section className='container h-[calc(100vh-72px)] mx-auto flex flex-col items-center justify-center'>
            <div className='relative text-center'>
                <h2 className='text-2xl lg:text-5xl t-owners z-10'>Erreur 404</h2>
                <h1 className='text-2xl lg:text-5xl t-owners z-10 mt-5'> Page non trouvée</h1>
            </div>

            <div className='mt-5 w-full flex justify-center'>
                <ButtonPerso to='/' text="Retour à l'accueil" width='lg:w-1/3 w-full' height='lg:h-14 h-10' />
            </div>
        </section>
    );
};

export default ErrorPage;
