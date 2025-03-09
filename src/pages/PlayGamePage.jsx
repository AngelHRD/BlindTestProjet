import LinkBack from '../components/LinkBack';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiRequest from '../services/api';
import SliderMp3 from '../components/SliderMp3';
import ButtonPlayGame from '../components/ButtonPlayGame';
import Loader from '../components/Loader';

function PlayGamePage() {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [loading, setLoading] = useState(true);
    const { name: genre } = useParams();

    const fetchMusic = async () => {
        setLoading(true);
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
            const randomizeSongs = [...new Set(response.data)].sort(() => Math.random() - 0.5).slice(0, 4);
            setSongs(randomizeSongs);

            const song = randomizeSongs[Math.floor(Math.random() * randomizeSongs.length)];
            setSelectedSong(song);
            console.log('selectedSong:', song);
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMusic();
    }, [genre]);

    const handleNexSong = () => {
        fetchMusic();
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <section className='container mx-auto px-4 min-h-screen lg:min-h-[calc(100vh-80px)] pt-5 relative'>
            <LinkBack to='/genres' text='Quitter' />

            {/* Titre toujours en haut */}
            <div className='w-full my-3 flex flex-col text-center order-1'>
                <h2 className='t-owners-test text-3xl sm:text-3xl md:text-4xl lg:text-[3.7rem]'>
                    Blin<span className='t-briller-test text-3xl sm:text-3xl md:text-4xl lg:text-[3.7rem]'>d</span> test
                </h2>
                <h3 className='pl-4 t-briller-vide-test text-3xl sm:text-3xl md:text-4xl lg:text-[3.7rem]'>
                    {selectedSong?.genre}
                </h3>
            </div>

            {/* Slider : en bas pour mobile, en haut pour desktop */}
            <div className='absolute bottom-40 left-0 w-full flex items-center justify-center md:relative md:top-0 md:order-2 order-3 md:pb-10 sm:bottom-60 md:bottom-auto'>
                <SliderMp3 key={selectedSong._id} selectedSong={selectedSong} />
            </div>

            {/* Boutons : entre le titre et le slider pour mobile, sous le slider pour desktop */}
            <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-x-10 gap-8 mx-auto mt-5 w-fit md:order-3 order-2'>
                <ButtonPlayGame songs={songs} selectedSong={selectedSong} onGoodAnswer={handleNexSong} />
            </div>
        </section>
    );
}

export default PlayGamePage;
