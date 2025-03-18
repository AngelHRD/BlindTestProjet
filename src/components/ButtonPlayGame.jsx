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
                        w-full h-16 min-w-[300px] 
                        lg:w-88 lg:h-28 lg:min-w-[400px] lg:text-xl linear max-w-sm scale-[1.03] animate-rotate-border cursor-pointer rounded-lg bg-conic/[from_var(--border-angle)] from-gray-800 from-70% via-[chartreuse] via-90% to-gray-800 to-100% p-px shadow-lg transition-all duration-500 ease-in-out hover:shadow-[chartreuse]/10
                        
                        ${gameOver ? (song._id === selectedSong._id ? 'opacity-100' : 'opacity-0 ') : ''}
                        ${hideButton && song._id !== clickedId ? 'opacity-0 pointer-events-none' : ''}
                    `}
                    onClick={() => handleClick(song._id)}
                >
                    <div className='flex h-full w-full items-center justify-center rounded-lg bg-[var(--noir)] p-10 text-center text-xl text-white transition-colors duration-500 ease-in-out hover:bg-neutral-900'>
                        {song.artist} - {song.title}
                    </div>
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
