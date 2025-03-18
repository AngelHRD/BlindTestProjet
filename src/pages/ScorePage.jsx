import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiRequest from '../services/api';
import Loader from '../components/Loader';

function ScorePage() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name: genre } = useParams();
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
        <section className='blur-color-green-score h-screen lg:h-[calc(100vh-72px)] flex flex-col justify-center'>
            <div className='container mx-auto p-6 lg:py-12 flex-grow flex flex-col justify-between lg:items-center gap-y-5 lg:gap-y-10 h-full'>
                {/* ShadowBox  */}
                <div className='w-full max-w-2xl lg:max-w-7xl  flex flex-col text-center bg-blur p-6 py-12 text-white h-full flex-grow'>
                    {/* Titre */}
                    <div className='flex-grow-[1] flex flex-col justify-start items-center gap-y-4'>
                        <h2 className='t-owners main-title'>
                            Blin<span className='t-briller main-title'>d </span> test
                        </h2>
                        <h3 className='t-briller-vide second-title -mt-5'>{genre}</h3>
                    </div>

                    {/* Texte centré  */}
                    <div className='flex-grow-[5] flex flex-col justify-center items-center w-full gap-y-4'>
                        <p className='text-2xl md:text-4xl para'>Bien joué ! Tu as trouvé</p>
                        <p className='t-owners text-[10rem] lg:text-[13rem] leading-none !text-black !font-medium'>
                            {score}
                        </p>
                        <p className='text-2xl lg:text-3xl para'>Titres sur {maxSongs}</p>
                    </div>

                    {/* Texte + bouton*/}
                    <div className='flex-grow-[1] flex flex-col justify-end items-center gap-y-4'>
                        <p className='text-lg lg:text-2xl para mx-2'>Améliore toi avec nos autres blind test !</p>
                        <Link
                            to='/genres'
                            className='px-14 py-2 para bg-[#7ff000]  rounded-xl !text-black text-xl lg:text-3xl w-fit'
                        >
                            Plus de blind test
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScorePage;
