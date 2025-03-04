import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkBack from '../components/LinkBack';
import ApiRequest from '../services/api';

function GenrePage() {
    const { name } = useParams(); // Récupére le nom du genre depuis l'URL
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Obliger sinon on a une erreur car l'objet data est null

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

    if (!data) {
        return <div className='text-center mt-10'>Données non disponible</div>;
    }

    return (
        <div className='absolute top-0 left-0 w-screen min-h-screen overflow-hidden'>
            <div className='absolute inset-0 -z-10 bg-black'>
                <img
                    src={data.img_v3}
                    alt={data.title}
                    className='h-full object-center select-none pointer-events-none'
                />
            </div>

            <div className='relative container mx-auto px-4 mt-30'>
                <LinkBack to='/genres' />
            </div>
        </div>
    );
}

export default GenrePage;
