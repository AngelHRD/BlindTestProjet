import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiRequest from '../services/api';

function GenrePage() {
    const { name } = useParams(); // Récupérer le nom du genre depuis l'URL
    const [genreData, setGenreData] = useState(null);

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await ApiRequest.get(`/cards`);
                const allGenres = response.data;

                const genre = allGenres.find((g) => g.title.toLowerCase() === name.toLowerCase());

                if (genre) {
                    setGenreData(genre);
                } else {
                    console.log('Genre non trouvé !');
                    setGenreData(null);
                }
            } catch (error) {
                console.error('Erreur API:', error);
            }
        };

        fetchGenre();
    }, [name]);

    return (
        <div className=''>
            <Link to='/genres' className=''>
                Retour
            </Link>
            {genreData ? (
                <>
                    <h1 className=''>{genreData.title}</h1>
                    <img src={genreData.img} alt={genreData.title} className='' />
                    <p className=''>{genreData.description}</p>
                </>
            ) : (
                <p className=''>Genre introuvable.</p>
            )}
        </div>
    );
}

export default GenrePage;
