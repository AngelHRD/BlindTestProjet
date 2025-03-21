import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiRequest from '../services/api';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import ButtonPerso from '../components/ButtonPerso';

function ScorePage() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name: genre } = useParams();
    const navigate = useNavigate();

    const [maxSongs, setMaxSongs] = useState(() => parseInt(localStorage.getItem('maxSongs')) || 5);
    const [score, setScore] = useState(() => parseInt(localStorage.getItem('score')) || 0);

    useEffect(() => {
        setMaxSongs(parseInt(localStorage.getItem('maxSongs')) || 5);
        setScore(parseInt(localStorage.getItem('score')) || 0);
    }, []);

    const fetchInfo = async () => {
        setLoading(true);
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
            setInfo(response.data);
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            navigate('/error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, [genre]);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className=' h-screen lg:h-[calc(100vh-72px)] flex flex-col justify-center'>
            <div className='container mx-auto p-6 lg:py-12 flex flex-col justify-center items-center lg:gap-y-10 h-full'>
                <div className='w-full flex-grow flex flex-col justify-center items-center gap-y-10'>
                    <p className='text-[6vw] md:text-[2vw] para'>Bien joué ! Tu as trouvé</p>
                    <div className='aspect-[1/1] lg:h-full w-full lg:w-auto lg:text-xl linear scale-[1.03] animate-rotate-border rounded-full bg-conic/[from_var(--border-angle)] from-gray-800 from-70% via-[chartreuse] via-90% to-gray-800 to-100% p-px shadow-[0_0_100px_45px_rgba(127,240,0,0.2)] transition-all duration-500 ease-in-out'>
                        <div className=' flex flex-col h-full w-full items-center justify-center rounded-full bg-[#141313] text-center text-xl text-[chartreuse] transition-colors duration-500 ease-in-out'>
                            {/* Texte centré  */}

                            <div>
                                <p className='font-score-countdown text-[40vw] lg:text-[15vw] leading-none'> {score}</p>{' '}
                                <p className='text-lg lg:text-[1.5vw] para leading-0'>titres sur {maxSongs} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mb-10 lg:mb-0 flex justify-center'>
                    <ButtonPerso
                        to='/genres'
                        text='Plus de blind test !'
                        width='lg:w-2/5 w-full'
                        height='lg:h-14 h-10'
                    />
                </div>
            </div>
        </section>
    );
}

export default ScorePage;
