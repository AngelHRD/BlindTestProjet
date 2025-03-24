import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ApiRequest from '../services/api';
import SliderMp3 from '../components/PlayGamePage/SliderMp3';
import ButtonPlayGame from '../components/PlayGamePage/ButtonPlayGame';
import Loader from '../components/Loader';
import QuitConfirmation from '../components/PlayGamePage/QuitConfirmation';
import CountDown from '../components/PlayGamePage/Countdown';

function PlayGamePage() {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [showQuitOverlay, setShowQuitOverlay] = useState(false);
    const [currentRound, setCurrentRound] = useState(0);
    const [countdown, setCountdown] = useState(3);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const { name: genre } = useParams();

    const navigate = useNavigate();
    const maxSongs = parseInt(localStorage.getItem('maxSongs') || 5);

    // Réinitialiser le score à 0
    useEffect(() => {
        localStorage.setItem('score', 0);
        setScore(0);
    }, [genre]);

    const fetchMusic = useCallback(async () => {
        setLoading(true);
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
            const randomizeSongs = [...new Set(response.data)].sort(() => Math.random() - 0.5).slice(0, 4);
            setSongs(randomizeSongs);
            console.log('randomizeSongs', randomizeSongs);

            const song = randomizeSongs[Math.floor(Math.random() * randomizeSongs.length)];
            setSelectedSong(song);
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            navigate('/error');
        } finally {
            setLoading(false);
        }
    }, [genre, navigate]);

    // Récupérer les musiques au chargement de la page
    useEffect(() => {
        fetchMusic();
    }, [fetchMusic]);

    // Passer à la musique suivante + gestion du score
    const handleNextSong = (isCorrect) => {
        setScore((prevScore) => {
            const updatedScore = isCorrect ? prevScore + 1 : prevScore;
            localStorage.setItem('score', updatedScore);
            return updatedScore;
        });

        if (currentRound + 1 >= maxSongs) {
            navigate(`/genres/${genre}/blind-test/score`);
        } else {
            setCurrentRound((prevRound) => prevRound + 1);
            fetchMusic();
        }
    };

    // Compte à rebours avant le début du jeu

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleQuitClick = () => {
        setShowQuitOverlay(true);
        setIsPaused(true);
    };

    const handleCancelQuit = () => {
        setShowQuitOverlay(false);
        setIsPaused(false);
    };

    const handleConfirmQuit = () => {
        navigate('/genres');
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <section className={countdown !== 0 ? 'bg-[#141313]' : 'blur-color-green'}>
            {/* la class précédente applique .blur-color-green-score lorsque countdown est actif et revient à .blur-color-green une fois qu'il est fini. */}
            <div className='container mx-auto px-4 h-screen lg:h-[calc(100vh-72px)] pt-5 relative flex flex-col overflow-hidden'>
                {/* 🔹 Modification : bouton "Quitter" ouvre l'overlay au lieu de rediriger immédiatement */}
                <button
                    onClick={handleQuitClick}
                    className='md:flex flex items-center gap-1 lg:my-5 my-2.5  cursor-pointer w-fit hover:opacity-80'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-8 text-white'
                        aria-hidden='true'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                    </svg>
                    <p className='text-white text-lg md:text-xl '>Quitter</p>
                </button>

                {/* Affichage du compte à rebours avant le jeu */}
                {countdown !== 0 ? (
                    <div
                        className=' flex flex-col flex-grow justify-center items-center h-full w-full'
                        onClick={() => setCountdown(0)}
                    >
                        <CountDown countdown={countdown} />
                    </div>
                ) : (
                    <>
                        {/* Affichage du jeu */}
                        {/* Titre */}
                        <div className='w-full flex flex-col text-center mb-3 '>
                            <h3 className='t-briller-vide main-title  '>{selectedSong?.genre}</h3>
                        </div>

                        {/* Slider : en bas pour mobile, en haut pour desktop */}
                        <div className='absolute bottom-40 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center order-3 md:relative md:top-0 md:order-2 md:py-7 '>
                            <SliderMp3
                                key={selectedSong._id}
                                selectedSong={selectedSong}
                                currentRound={currentRound}
                                maxSongs={maxSongs}
                                onSongEnd={handleNextSong}
                            />
                        </div>

                        <div className='grid justify-items-center grid-cols-1 gap-x-10 gap-8 mx-auto mt-10 w-fit order-2 md:mt-5 md:order-3 sm:grid-cols-2 '>
                            <ButtonPlayGame songs={songs} selectedSong={selectedSong} onGoodAnswer={handleNextSong} />
                        </div>
                    </>
                )}
            </div>
            <QuitConfirmation isOpen={showQuitOverlay} onConfirm={handleConfirmQuit} onCancel={handleCancelQuit} />
        </section>
    );
}

export default PlayGamePage;
