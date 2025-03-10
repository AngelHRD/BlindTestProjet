import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function SliderMp3({ selectedSong }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    const startTimeSong = 10;
    const maxTimeSong = 30;

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

            const handleMetadataLoaded = () => setDuration(audio.duration);
            const handleTimeUpdate = () => {
                setProgress((audio.currentTime / audio.duration) * 100);
                setCurrentTime(audio.currentTime);
            };

            const handleEnded = () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
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
    }, [selectedSong]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                if (audioRef.current.currentTime < startTimeSong) {
                    audioRef.current.currentTime = startTimeSong;
                }
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Ecoute les touches espace et enter pour jouer ou mettre en pause la musique
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

    // Mettre à jour la progression de l'audio
    const handleProgress = (e) => {
        const value = e.target.value;
        setProgress(value);
        if (audioRef.current) {
            audioRef.current.currentTime = (value / 100) * duration;
            setCurrentTime(audioRef.current.currentTime);
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
                className='w-7/12 appearance-none h-[5px] bg-[#7FF000] rounded-full mx-2 cursor-pointer'
                aria-label='Progression de la musique'
                style={{
                    background: `linear-gradient(to right, #7ff000 ${progress}%, #ffffff ${progress}%)`,
                }}
            />
            <span className=' text-white text-lg'>{formatTime(Math.max(duration - currentTime, 0))}</span>
        </>
    );
}

SliderMp3.propTypes = {
    selectedSong: PropTypes.shape({
        mp3: PropTypes.string.isRequired,
    }).isRequired,
};

export default SliderMp3;
