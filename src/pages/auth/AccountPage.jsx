import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkBack from '../../components/LinkBack';
import ButtonPerso from '../../components/ButtonPerso';

function AccountPage() {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('user'));

    // Renvoie sur login si pas de token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <div className='container mx-auto lg:h-[calc(100vh-72px)] '>
                <LinkBack to='/' text='Quitter' />
                <div className='flex flex-col items-center mt-20'>
                    <div className='size-64 lg:size-80 rounded-full overflow-hidden bg-[chartreuse] animate-rotate-border border  border-[chartreuse]'>
                        <img src='/default-avatar.png' alt='Photo de profil' className='w-full h-full object-cover' />
                    </div>

                    <div className='space-y-5 my-10'>
                        <p className='para '>Nom : {userInfo?.username}</p>
                        <p className='para'>
                            Email : <span>{userInfo?.email}</span>
                        </p>
                        <p className='para'>
                            Meilleur score : <span>{localStorage.getItem('bestScore') || 'Aucun'}</span>
                        </p>
                    </div>

                    <div className=''>
                        <ButtonPerso
                            to='/'
                            text='Déconnexion'
                            width='w-64'
                            height='h-16'
                            onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('user');
                                window.dispatchEvent(new Event('localStorageChanged'));

                                navigate('/');
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;
