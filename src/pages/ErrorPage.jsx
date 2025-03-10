import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='container h-screen mx-auto flex flex-col items-center justify-center'>
            <div className='relative text-center'>
                <h2 className='text-4xl t-owners z-10'>Erreur 404</h2>
                <h1 className='text-4xl t-owners z-10 mt-5'> Page non trouvée</h1>
            </div>

            <div className='mt-10'>
                <Link
                    to='/'
                    className='!text-black t-briller !text-xl px-6 py-3 bg-[#7ff000] rounded-2xl'
                    aria-label="Retour à l'accueil"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
