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
        <>
            {songs.map((song) => (
                <button
                    key={song._id}
                    aria-label={`Choisir la musique : ${song.artist} - ${song.title}`}
                    className={`
                            w-full h-20 min-w-[300px] tracking-wide transition-all duration-300 rounded-lg btn-text-game   
                            md:w-80 md:h-24 md:min-w-[350px] md:text-lg md:rounded-xl
                            lg:w-88 lg:h-28 lg:min-w-[400px] lg:text-xl lg:tracking-widest

                            ${
                                clickedId !== song._id
                                    ? 'bg-gradient-to-r from-[rgba(127,240,0,0.752)] via-[#19c207] to-[#7ff000]'
                                    : ''
                            }
                            ${clickedId === song._id && isCorrect ? 'bg-green-500' : ''}
                            ${clickedId === song._id && !isCorrect ? 'bg-[#7ff000] ' : ''}
                        `}
                    onClick={() => handleClick(song._id)}
                    disabled={clickedId !== null}
                >
                    {/* Artist - Song */}
                    {clickedId === song._id && !isCorrect ? 'Mauvaise réponse' : `${song.artist} - ${song.title}`}
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
