import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiRequest from '../services/api';
import Loader from '../components/Loader';

function ScorePage() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name: genre } = useParams();

    const fetchInfo = async () => {
        setLoading(true);
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
            setInfo(response.data);

            console.log('response', response.data);
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
        <section className='blur-color-green-score min-h-screen lg:h-[calc(100vh-100px)] flex flex-col justify-center'>
            <div className='container mx-auto p-6 flex-grow flex flex-col justify-between lg:items-center gap-y-5 lg:gap-y-10 h-full'>
                {/* ShadowBox  */}
                <div className='w-full max-w-2xl flex flex-col text-center bg-blur lg:bg-blur p-6 py-12 text-white h-full flex-grow'>
                    {/* Titre */}
                    <div className='flex-grow-[1] flex flex-col justify-start items-center gap-y-4'>
                        <h2 className='t-owners text-4xl md:text-7xl'>
                            Blin<span className='t-briller text-4xl md:text-7xl'>d </span> test
                        </h2>
                        <h3 className='t-briller-vide text-3xl md:text-6xl'>{genre}</h3>
                    </div>

                    {/* Conteneur centré ) */}
                    <div className='flex-grow-[5] flex flex-col justify-center items-center w-full gap-y-4'>
                        <p className='text-2xl md:text-4xl para'>Bien joué ! Tu as trouvé</p>
                        <p className='t-owners text-[10rem] md:text-9xl leading-none !text-[#141313] !font-medium'>8</p>
                        <p className='text-2xl md:text-4xl para'>titres sur 10</p>
                    </div>

                    {/* Texte + bouton*/}
                    <div className='flex-grow-[1] flex flex-col justify-end items-center gap-y-4'>
                        <p className='text-lg md:text-4xl para mx-2'>Améliore toi avec nos autres blind test !</p>
                        <Link
                            to='/genres'
                            className='px-14 py-2 para bg-[#7ff000] rounded-xl !text-black text-xl md:text-4xl w-fit'
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
