import { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonPlayGame({ songs, selectedSong, onGoodAnswer }) {
    const [clickedId, setClickedId] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [hideButton, setHideButton] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (id) => {
        if (gameOver) return;

        const correctId = selectedSong?._id;
        setClickedId(id);
        const correct = id === correctId;
        setIsCorrect(correct);

        if (correct) {
            setHideButton(true);
            setTimeout(() => {
                onGoodAnswer();
                setClickedId(null);
                setIsCorrect(false);
            }, 3000);
        } else {
            setHideButton(true);
            setGameOver(true);
            setTimeout(() => {
                onGoodAnswer();
                setClickedId(null);
                setIsCorrect(false);
            }, 3000);
        }
    };

    // IDEE :

    // - Ajout effet tremblement cas d'erreur et/ou feux d'artifice bonne réponse
    // -Ajout effet de song bonne/mauvaise réponse

    return (
        <>
            {songs.map((song) => (
                <button
                    key={song._id}
                    aria-label={`Choisir la musique : ${song.artist} - ${song.title}`}
                    className={`
                        w-full h-20 min-w-[300px] tracking-wide transition-all duration-300 rounded-lg btn-text-game 
                        bg-gradient-to-r from-[rgba(127,240,0,0.752)] via-[#19c207] to-[#7ff000]  
                        md:w-80 md:h-24 md:min-w-[350px] md:text-lg md:rounded-xl
                        lg:w-88 lg:h-28 lg:min-w-[400px] lg:text-xl lg:tracking-widest
                        
                        ${gameOver ? (song._id === selectedSong._id ? 'opacity-100' : 'opacity-0 ') : ''}
                        ${hideButton && song._id !== clickedId ? 'opacity-0 pointer-events-none' : ''}
                    `}
                    onClick={() => handleClick(song._id)}
                >
                    {song.artist} - {song.title}
                </button>
            ))}
        </>
    );
}

ButtonPlayGame.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
    selectedSong: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        artist: PropTypes.string,
        title: PropTypes.string,
    }).isRequired,
    onGoodAnswer: PropTypes.func.isRequired,
};

export default ButtonPlayGame;
