import LinkBack from '../components/LinkBack';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiRequest from '../services/api';
import SliderMp3 from '../components/SliderMp3';
import ButtonPlayGame from '../components/ButtonPlayGame';
import Loader from '../components/Loader';

function PlayGamePage() {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [songCount, setSongCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const { name: genre } = useParams();
    const navigate = useNavigate();
    const maxSongs = 5;

    const fetchMusic = async () => {
        setLoading(true);
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
            const randomizeSongs = [...new Set(response.data)].sort(() => Math.random() - 0.5).slice(0, 4);
            setSongs(randomizeSongs);

            const song = randomizeSongs[Math.floor(Math.random() * randomizeSongs.length)];
            setSelectedSong(song);
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
        if (songCount < maxSongs - 1) {
            setSongCount(songCount + 1);
            console.log('songCount:', songCount);
            fetchMusic();
        } else {
            return navigate(`/genres/${genre}/blind-test/score`);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <section className='blur-color-green'>
            <div className='container mx-auto px-4 h-screen lg:h-[calc(100vh-72px)] pt-5 relative'>
                <LinkBack to='/genres' text='Quitter' />

                {/* Titre toujours en haut */}
                <div className='w-full flex flex-col text-center my-3 '>
                    <h2 className='t-owners main-title '>
                        Blin
                        <span className='t-briller main-title'>d </span>
                        test
                    </h2>

                    <h3 className='t-briller-vide second-title  '>{selectedSong?.genre}</h3>
                </div>

                {/* Slider : en bas pour mobile, en haut pour desktop */}
                <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center  md:relative md:top-0 md:order-2 md:py-7  '>
                    <SliderMp3 key={selectedSong._id} selectedSong={selectedSong} />
                </div>

                {/* Boutons : entre le titre et le slider pour mobile, sous le slider pour desktop */}
                <div className='grid justify-items-center lg:mb-12 grid-cols-1 gap-x-10 gap-8 mx-auto mt-7 w-fit lg:mt-7 sm:grid-cols-2 '>
                    <ButtonPlayGame songs={songs} selectedSong={selectedSong} onGoodAnswer={handleNexSong} />
                </div>
            </div>
        </section>
    );
}

export default PlayGamePage;
