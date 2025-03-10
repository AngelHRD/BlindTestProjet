import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function SliderMp3({ selectedSong }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    // Configuration pour le découpage audio
    const startTimeInSeconds = 10;
    const maxDurationInSeconds = 30;

    // Formater le temps en minutes et secondes
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Charger et lire la musique quand selectedSong change
    useEffect(() => {
        if (selectedSong) {
            const audio = new Audio(selectedSong.mp3);
            audioRef.current = audio;

            const handleMetadataLoaded = () => {
                // Définir la durée effective (soit la durée maximale, soit ce qui reste de la chanson)
                const remainingDuration = audio.duration - startTimeInSeconds;
                const effectiveDuration = Math.min(maxDurationInSeconds, remainingDuration);
                setDuration(effectiveDuration);

                // Positionner l'audio au point de départ
                audio.currentTime = startTimeInSeconds;
            };

            const handleTimeUpdate = () => {
                // Calculer le temps relatif depuis le point de départ
                const relativeTime = audio.currentTime - startTimeInSeconds;

                // Calculer la progression en pourcentage basée sur la durée effective
                const calculatedProgress = (relativeTime / duration) * 100;
                setProgress(calculatedProgress > 100 ? 100 : calculatedProgress);
                setCurrentTime(relativeTime > 0 ? relativeTime : 0);

                // Arrêter l'audio si on atteint la durée maximale
                if (audio.currentTime >= startTimeInSeconds + duration) {
                    audio.pause();
                    setIsPlaying(false);
                    // Réinitialiser au point de départ
                    audio.currentTime = startTimeInSeconds;
                    setCurrentTime(0);
                    setProgress(0);
                }
            };

            const handleEnded = () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
                // Réinitialiser au point de départ
                audio.currentTime = startTimeInSeconds;
            };

            audio.addEventListener('loadedmetadata', handleMetadataLoaded);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);

            // Nettoyer les écouteurs d'événements et l'audio précédent
            return () => {
                audio.pause();
                audioRef.current = null;
                audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [selectedSong, duration]);

    // Contrôle la lecture et la pause
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                // Si on est à la fin, revenir au début
                if (audioRef.current.currentTime >= startTimeInSeconds + duration) {
                    audioRef.current.currentTime = startTimeInSeconds;
                    setCurrentTime(0);
                    setProgress(0);
                }
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Écoute les touches espace pour jouer ou mettre en pause la musique
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                togglePlay();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isPlaying]);

    // Mettre à jour la progression de l'audio
    const handleProgress = (e) => {
        const value = e.target.value;
        setProgress(value);
        if (audioRef.current) {
            // Convertir la progression en temps, en tenant compte du point de départ
            const newTime = startTimeInSeconds + (value / 100) * duration;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime - startTimeInSeconds);
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
                    aria-label='Lire ou mettre en pause la musique'
                    role='button'
                    tabIndex='0'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            togglePlay();
                        }
                    }}
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
                className='w-7/12 appearance-none h-[5px] bg-[#7FF000] rounded-full mx-2 thumb-custom cursor-pointer'
                aria-label='Choisir la durée de la musique'
                style={{
                    background: `linear-gradient(to right, #7ff000 ${progress}%, #ffffff ${progress}%)`,
                }}
            />

            <div className='text-white text-sm'>
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
        </>
    );
}

SliderMp3.propTypes = {
    selectedSong: PropTypes.shape({
        mp3: PropTypes.string.isRequired,
    }).isRequired,
};

export default SliderMp3;
