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
    const [countdown, setCountdown] = useState(null); // null pour "Prêt ?", puis 3,2,1
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

    useEffect(() => {
        let timer;
        if (countdown === null) {
            // Affiche "Prêt ?" pendant 1 seconde
            timer = setTimeout(() => setCountdown(3), 1500);
        } else if (countdown > 0) {
            // Décompte 3..2..1
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

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
        <section className={countdown !== 0 ? 'blur-color-green-countdown' : 'blur-color-green'}>
            {/* la class précédente applique .blur-color-green-score lorsque countdown est actif et revient à .blur-color-green une fois qu'il est fini. */}
            <div className='container mx-auto px-4 h-screen lg:h-[calc(100vh-72px)] pt-5 relative flex flex-col overflow-hidden'>
                <LinkBack to='/genres' text='Quitter' />

                {/* Affichage du compte à rebours avant le jeu */}
                {countdown !== 0 ? (
                    <div className=' flex flex-col flex-grow justify-center'>
                        {/* ShadowBox  */}
                        <div className='w-full flex flex-col h-full items-center bg-blur mt-5 mb-20 py-10'>
                            {/* Titre */}
                            <div className=' h-1/5 flex flex-col items-center justify-center'>
                                {/* <h2 className='t-owners text-4xl md:text-7xl '>
                                    Blin<span className='t-briller text-4xl md:text-7xl'>d </span> test
                                </h2>
                                <h3 className='t-briller-vide text-3xl md:text-6xl -mt-5'>{genre}</h3> */}
                            </div>

                            {/* Texte centré  */}
                            <div className='flex justify-center items-center h-3/5 '>
                                <h2 className='font-score-countdown'>{countdown === null ? 'Prêt ?' : countdown}</h2>
                            </div>

                            <button
                                onClick={() => setCountdown(0)}
                                className='para lg:text-[1.1rem] text-base hover:underline flex justify-center items-end h-1/5'
                            >
                                Skip
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Affichage du jeu */}
                        {/* Titre */}
                        <div className='w-full flex flex-col text-center my-3 order-1'>
                            <h2 className='t-owners text-4xl md:text-7xl '>
                                Blin
                                <span className='t-briller text-4xl md:text-7xl'>d </span>
                                test
                            </h2>
                            <h3 className='t-briller-vide text-3xl md:text-6xl '>{selectedSong?.genre}</h3>
                        </div>

                        {/* Slider */}
                        <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center order-3 md:relative md:top-0 md:order-2 md:py-7 '>
                            <SliderMp3 key={selectedSong?._id} selectedSong={selectedSong} />
                        </div>

                        {/* Boutons */}
                        <div className='grid justify-items-center grid-cols-1 gap-x-10 gap-8 mx-auto mt-10 w-fit order-2 md:mt-5 md:order-3 sm:grid-cols-2 '>
                            <ButtonPlayGame songs={songs} selectedSong={selectedSong} onGoodAnswer={handleNexSong} />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default PlayGamePage;
