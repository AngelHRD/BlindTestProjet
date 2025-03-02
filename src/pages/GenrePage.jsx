import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiRequest from '../services/api';

function GenrePage() {
    const { name } = useParams(); // Récupérer le nom du genre depuis l'URL
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Nouvel état pour le chargement

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await ApiRequest.get(`/cards`);
                const allGenres = response.data;

                const genre = allGenres.find((g) => g.title.toLowerCase() === name.toLowerCase());

                if (genre) {
                    setData(genre);
                } else {
                    console.log('Genre non trouvé !');
                    setData(null);
                }
            } catch (error) {
                console.error('Erreur API:', error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchGenre();
    }, [name]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className='relative min-h-screen'>
            <img src={data.img_v2} alt={data.title} className='absolute inset-0 h-full w-full object-cover -z-10' />

            <div>
                <Link to='/genres' className='flex items-center py-5 cursor-pointer'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-8 text-white'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                    </svg>

                    <p className='para'>Retour</p>
                </Link>
            </div>

            <div className='border border-white w-xl h-96'></div>
        </div>
    );
}

export default GenrePage;
