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
        <div className='container mx-auto px-4 min-h-fit pt-5'>
            <LinkBack to='/genres' text='Quitter' />
            {/* Title */}
            <div className='w-full my-3 flex flex-col text-center'>
                <h2 className='t-owners'>
                    Blin<span className='t-briller'>d</span> test
                </h2>
                <h2 className='pl-4 t-briller-vide'>{selectedSong?.genre}</h2>
            </div>

            <div className='rounded-lg flex items-center justify-center py-10'>
                <SliderMp3 selectedSong={selectedSong} />
            </div>

            <ButtonPlayGame songs={songs} selectedSong={selectedSong} onGoodAnswer={handleNexSong} />
        </div>
    );
}

export default PlayGamePage;
