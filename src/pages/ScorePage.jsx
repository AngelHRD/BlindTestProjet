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
        <section className='blur-color-green-score min-h-screen lg:h-[calc(100vh-100px)]'>
            <div className='container mx-auto px-4 pt-5  min-h-screen  '>
                <LinkBack to='/' text='Quitter' />

                <div className='w-full flex flex-col text-center my-3 order-1 bg-blur p-4 text-white'>
                    <h2 className='t-ow h- ners text-4xl md:text-7xl '>
                        Blin
                        <span className='t-briller text-4xl md:text-7xl'>d </span>
                        test
                    </h2>
                    <h3 className='t-briller-vide text-3xl md:text-6xl '>{genre}</h3>
                    <p className='text-2xl md:text-4xl pt-10 '>Bien joué ! Tu as trouvé </p>
                    <p className='t-owners text-8xl md:text-9xl pt-5 !text-black'>8</p>
                    <p className='text-xl md:text-4xl pb-5'>titres sur 10</p>
                    <p className='text-xl md:text-4xl '>Améliore toi avec nos autres blind test !</p>
                    <Link
                        to='/genres'
                        className='px-14 py-2 mt-5 bg-[#7ff000] rounded-xl  text-black text-xl md:text-4xl w-fit mx-auto'
                    >
                        Let&apos;s gooo
                    </Link>{' '}
                </div>
            </div>
            {/* <div className='container mx-auto px-4 text-white  '>
                <LinkBack to='/genres' text='Quitter' />

                <div className='flex flex-col items-center bg-blur border min-h-10/12 '>
                    <h2 className='t-owners text-4xl md:text-7xl pt-5 md:pt-10 '>
                        Blin
                        <span className='t-briller text- md:text-7xl'>d </span>
                        test
                    </h2>

                    <h3 className='t-briller-vide text-3xl md:text-6xl '>{genre}</h3>

                    <p className='text-2xl md:text-4xl pt-10 '>Bien joué ! Tu as trouvé </p>
                    <p className='t-owners text-8xl md:text-9xl py-10 !text-black'>8</p>
                    <p className='text-xl md:text-4xl'>titres sur X</p>
                    <p className='text-xl md:text-4xl '>Améliore toi avec nos autres blind test !</p>
                    <Link className='px-4 py-2 mt-5 bg-[#7ff000] rounded-xl  text-black text-xl md:text-4xl'>
                        Let&apos;s goooooo
                    </Link>
                </div>
            </div> */}
        </section>
    );
}

export default ScorePage;
