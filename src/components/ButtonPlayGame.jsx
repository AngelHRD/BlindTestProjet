import { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonPlayGame({ songs, selectedSong, onGoodAnswer }) {
    const [clickedId, setClickedId] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleClick = (songId) => {
        setClickedId(songId);
        const correct = songId === selectedSong._id;
        setIsCorrect(correct);

        if (correct) {
            console.log('Bravo !');
            setTimeout(() => {
                onGoodAnswer();
                setClickedId(null);
                setIsCorrect(false);
            }, 2000);
        } else {
            console.log('Dommage !');
            setTimeout(() => {
                setClickedId(null);
                setIsCorrect(false);
            }, 2000);
        }
    };
    return (
        <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-x-10 gap-8 mx-auto px-4 w-fit'>
            {songs.map((song) => (
                <button
                    key={song._id}
                    aria-label={`Choisir la musique : ${song.artist} - ${song.title}`}
                    className={`
                        w-full max-w-xl min-w-80 py-6 px-8 tracking-wider transition-all duration-300 text-2xl rounded-xl btn-text-game
                        ${clickedId !== song._id ? 'bg-gradient-to-b from-[#579d07] via-[#19c207] to-[#7ff000]' : ''}
                        ${clickedId === song._id && isCorrect ? 'bg-green-500' : ''}
                        ${clickedId === song._id && !isCorrect ? 'bg-[#7ff000]' : ''}
                    `}
                    onClick={() => handleClick(song._id)}
                    disabled={clickedId !== null}
                >
                    {clickedId === song._id && !isCorrect ? 'Mauvaise réponse' : `${song.artist} - ${song.title}`}
                </button>
            ))}
        </div>
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
