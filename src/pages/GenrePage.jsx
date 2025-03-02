import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className='relative min-h-screen '>
            <img src={data.img_v3} alt={data.title} className='absolute w-[1920px] h-[1080px] -z-10' />

            <div className='relative  z-0'>
                <LinkBack to='/genres' />
            </div>

            <div className='relative w-[687px] h-[764px] rounded-4xl test'>
                <div className='mx-auto max-w-[450px] '>
                    <h1 className='t-owners'>
                        blin<span className='t-briller'>d</span> test
                    </h1>

                    <h2 className='t-briller-vide flex justify-end '>{data.title}</h2>

                    <p className='para'>
                        Bienvenue dans une expérience ultime pour tous les amateurs de musique et de challenges.
                        <br />
                        <br />
                        Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent faire la
                        différence.
                        <br />
                        <br />
                        Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques indémodables, tu
                        trouveras des playlists variées qui mettront tes connaissances à l’épreuve.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GenrePage;
