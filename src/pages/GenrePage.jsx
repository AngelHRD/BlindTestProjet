import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkBack from '../components/LinkBack';
import ApiRequest from '../services/api';
import Loader from '../components/Loader';
import BoxShadowGenre from '../components/BoxShadowGenre';
import './cssPages/GenrePage.css';
import { Link } from 'react-router-dom';

function GenrePage() {
    const { name } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageFondGenre, setImageFondGenre] = useState();

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await ApiRequest.get(`/cards`);
                const allGenres = response.data;

                const genre = allGenres.find((g) => g.slug.toLowerCase() === name.toLowerCase());

                if (genre) {
                    setData(genre);
                } else {
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

    useEffect(() => {
        const updateImageSource = () => {
            if (window.innerWidth < 768) {
                setImageFondGenre(data?.img_phone);
            } else {
                setImageFondGenre(data?.img_desktop);
            }
        };

        if (data) {
            updateImageSource();
        }
        window.addEventListener('resize', updateImageSource);
        return () => {
            window.removeEventListener('resize', updateImageSource);
        };
    }, [data]);

    if (!data) {
        return <div className='text-center mt-10'>Données non disponible</div>;
    }
    if (loading) {
        return <Loader />;
    }

    return (
        <div className='relative max-w-full max-h-screen h-screen lg:h-[calc(100vh-72px)] bg-[#020100]'>
            {/* fond  */}
            <div className='absolute lg:-top-18 w-full h-screen'>
                <img src={imageFondGenre} alt={data.title} className='h-[100vh] object-cover object-left bottom-0' />
            </div>
            {/* container retour et box  */}
            <div className='container lg:mx-auto px-4 min-h-fit pt-10 md:pt-5 relative z-10 h-full flex flex-col'>
                <div className='absolute top-5'>
                    <LinkBack to='/genres' text='Retour' />
                </div>

                <div className='flex justify-center items-center lg:justify-end lg:items-center lg:h-full flex-grow'>
                    <BoxShadowGenre data={data} />
                </div>

                <div className=' w-full flex justify-center items-center mb-10 lg:mb-0'>
                    <Link
                        to={`/genres/${data.slug}/blind-test`}
                        className='bg-[chartreuse] w-3/4 h-14 rounded-xl btn-text flex justify-center items-center text-base lg:hidden'
                    >
                        Let&apos;s go !
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default GenrePage;
