import LinkBack from '../components/LinkBack';
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
        <section className='blur-color-green-score'>
            <div className='container mx-auto px-4 h-screen lg:h-[calc(100vh-72px)] pt-5 relative text-white  '>
                <LinkBack to='/genres' text='Quitter' />

                <div className='flex flex-col  items-center bg-blur border h-10/12 '>
                    <h2 className='t-owners-test text-5xl md:text-7xl pt-10 '>
                        Blin
                        <span className='t-briller-test text-5xl md:text-7xl'>d </span>
                        test
                    </h2>

                    <h3 className='t-briller-vide-test text-4xl md:text-6xl '>{genre}</h3>

                    <p className='text-2xl md:text-4xl pt-10 '>Bien joué ! Tu as trouvé </p>
                    <p className='text-8xl md:text-9xl py-10 text-black'>8</p>
                    <p className='text-xl md:text-4xl'>titres sur X</p>
                    <p className='text-xl md:text-4xl pt-40'>Améliore toi avec nos autres blind test !</p>
                    <Link className='px-4 py-2 mt-5 bg-[#7ff000] rounded-xl  text-black text-xl md:text-4xl'>
                        Let&apos;s goooooo
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ScorePage;
