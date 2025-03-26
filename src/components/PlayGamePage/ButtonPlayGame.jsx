import { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonPlayGame({ songs, selectedSong, onGoodAnswer }) {
    const [clickedId, setClickedId] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (id) => {
        if (gameOver) return;

        const correctId = selectedSong?._id;
        setClickedId(id);

        const correct = id === correctId;
        setIsCorrect(correct);

        if (correct) {
            setGameOver(true);
            setTimeout(() => {
                onGoodAnswer(true);
                setClickedId(null);
                setIsCorrect(false);
                setGameOver(false);
            }, 3000);
        } else {
            setGameOver(true);
            setTimeout(() => {
                onGoodAnswer(false);
                setClickedId(null);
                setIsCorrect(false);
                setGameOver(false);
            }, 3000);
        }
    };

    return (
        <>
            {songs.map((song) => {
                const isClicked = clickedId === song._id;
                const isCorrectAnswer = song._id === selectedSong._id;

                return (
                    <button
                        key={song._id}
                        aria-label={`Choisir la musique : ${song.artist} - ${song.title}`}
                        className={`
                            w-full h-auto min-w-[300px] 
                            lg:w-88 lg:h-28 lg:min-w-[400px] lg:text-xl linear max-w-sm scale-[1.03] animate-rotate-border cursor-pointer rounded-lg bg-conic/[from_var(--border-angle)] from-gray-800 from-70% via-[chartreuse] via-90% to-gray-800 to-100% p-px shadow-lg transition-all duration-500 ease-in-out hover:shadow-[chartreuse]/10
                            ${gameOver && !isCorrectAnswer ? 'opacity-70' : ''}
                            ${gameOver && isCorrectAnswer ? 'opacity-100' : ''}
                        `}
                        onClick={() => handleClick(song._id)}
                        disabled={gameOver}
                    >
                        <div
                            className={`
                                flex lg:h-full h-16 w-full items-center justify-center rounded-lg bg-[var(--noir)] lg:p-10 px-8 py-10 text-center text-xl transition-colors duration-500 ease-in-out hover:bg-neutral-900
                                ${gameOver && isCorrectAnswer ? 'text-[chartreuse]' : 'text-white '}
                                ${gameOver && !isCorrectAnswer ? 'line-through text-white ' : ''}
                            `}
                        >
                            {song.artist} - {song.title}
                        </div>
                    </button>
                );
            })}
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
