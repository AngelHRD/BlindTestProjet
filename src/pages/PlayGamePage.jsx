import LinkBack from '../components/LinkBack';
import { useEffect, useState } from 'react';
import ApiRequest from '../services/api';
import SliderMp3 from '../components/SliderMp3';
import ButtonPlayGame from '../components/ButtonPlayGame';
import Loader from '../components/Loader';

function PlayGamePage() {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await ApiRequest.get(`/songs/rock`);
                const randomizeSongs = [...new Set(response.data)].sort(() => Math.random() - 0.5).slice(0, 4);

                setSongs(randomizeSongs);
                console.log('Randomize songs:', randomizeSongs);

                const song = randomizeSongs[Math.floor(Math.random() * randomizeSongs.length)];
                setSelectedSong(song);
            } catch (error) {
                console.error('Erreur lors du chargement:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMusic();
    }, []);

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <Loader />;
            </div>
        );
    }

    return (
        <div className='container mx-auto px-4 min-h-fit pt-10'>
            <LinkBack to='/genres' text='Quitter' />
            <div className='text-center'>
                <h1 className='t-owners'>
                    blin<span className='t-briller '>d </span> test
                </h1>
                <h2 className='t-owners-vide mb-10'> rock </h2>
            </div>
            <div className='rounded-lg flex items-center justify-center'>
                <SliderMp3 selectedSong={selectedSong} />
            </div>
            {/* <p className='text-white text-center'>Rock</p> */}
            <ButtonPlayGame songs={songs} />
        </div>
    );
}

export default PlayGamePage;
