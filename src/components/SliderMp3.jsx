import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function SliderMp3({ selectedSong }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
    const isAudioInitialized = useRef(false);

    // Constantes de départ et la durée maximale de l'audio
    const startTime = 40;
    const maxTimeSong = 15;

    // Formate le temps en minutes:secondes
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Initialise et gère l'audio quand selectedSong change
    useEffect(() => {
        if (selectedSong) {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            const audio = new Audio(selectedSong.mp3);
            audioRef.current = audio;
            isAudioInitialized.current = true;

            // Gestion des métadonnées de l'audio
            const handleMetadataLoaded = () => {
                const actualDuration = audio.duration;
                const limitedDuration = Math.min(maxTimeSong, actualDuration - startTime);
                setDuration(limitedDuration);
                audio.currentTime = startTime;
            };

            // Met à jour le progrès et le temps courant
            const handleTimeUpdate = () => {
                if (audioRef.current) {
                    const adjustedCurrentTime = audioRef.current.currentTime - startTime;
                    const limitedCurrentTime = Math.min(adjustedCurrentTime, maxTimeSong);
                    setCurrentTime(limitedCurrentTime);
                    setProgress((limitedCurrentTime / maxTimeSong) * 100);

                    // Arrêter l'audio si la durée maximale est atteinte
                    if (limitedCurrentTime >= maxTimeSong) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            };

            // Réinitialise l'état quand l'audio se termine
            const handleEnded = () => {
                setIsPlaying(false);
                setCurrentTime(0);
                setProgress(0);
            };

            // Ajoute des écouteurs d'événements pour l'audio
            audio.addEventListener('loadedmetadata', handleMetadataLoaded);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);

            // Nettoie les écouteurs d'événements
            return () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                    isAudioInitialized.current = false;
                }
            };
        }
    }, [selectedSong]);

    // Gère la lecture et la pause de l'audio
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.error('Erreur lors de la lecture :', error);
                    });
                }
                setIsPlaying(true);
            }
        }
    };

    // Gère les touches pour contrôler la lecture
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                togglePlay();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isPlaying]);

    // Gère le changement de la barre de progression
    const handleProgress = (e) => {
        const value = e.target.value;
        setProgress(value);
        if (audioRef.current) {
            const newTime = startTime + (value / 100) * maxTimeSong;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime - startTime);
        }
    };

    return (
        <>
            <div className='text-white'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-10 w-10 cursor-pointer'
                    onClick={togglePlay}
                >
                    {isPlaying ? (
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 5.25v13.5m-7.5-13.5v13.5' />
                    ) : (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                        />
                    )}
                </svg>
            </div>
            <input
                type='range'
                min='0'
                max='100'
                value={progress}
                onChange={handleProgress}
                className='w-7/12 appearance-none h-[5px] bg-[#7FF000] rounded-full mx-2 thumb-custom '
                aria-label='Progression de la musique'
                style={{
                    background: `linear-gradient(to right, #7ff000 ${progress}%, #ffffff ${progress}%)`,
                }}
            />
            <span className='text-white text-lg'>{formatTime(Math.max(duration - currentTime, 0))}</span>
        </>
    );
}

// Définit les types attendus pour les props
SliderMp3.propTypes = {
    selectedSong: PropTypes.shape({
        mp3: PropTypes.string.isRequired,
    }).isRequired,
};

export default SliderMp3;
