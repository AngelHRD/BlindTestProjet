import LinkBack from '../components/LinkBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiRequest from '../services/api';

function ScorePage() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name: genre } = useParams();

    const fetchInfo = async () => {
        setLoading(true);
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, [genre]);

    return (
        <section className='blur-color-green'>
            <div className='container mx-auto px-4 h-screen lg:h-[calc(100vh-72px)] pt-5 relative'>
                <LinkBack to='/genres' text='Quitter' />

                <div className='w-full flex flex-col text-center my-3 order-1'>
                    <h2 className='t-owners-test text-4xl md:text-7xl '>
                        Blin
                        <span className='t-briller-test text-4xl md:text-7xl'>d</span>
                        test
                    </h2>

                    <h3 className='t-briller-vide-test mt-10 text-4xl md:text-6xl '>ICI YA LE SCOREBOARD</h3>
                </div>
            </div>
        </section>
    );
}

export default ScorePage;
