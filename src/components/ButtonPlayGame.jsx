import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonPlayGame({ songs, selectedSong }) {
    const [clickedId, setClickedId] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleClick = (songId) => {
        setClickedId(songId);
        const correct = songId === selectedSong._id;
        setIsCorrect(correct);

        if (correct) {
            console.log('Bravo, vous avez trouvé la bonne musique !');
        } else {
            console.log('Dommage, vous avez choisi la mauvaise musique !');
        }
    };
    return (
        <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto px-4 w-fit '>
            {songs.map((song) => (
                <div key={song._id} className='flex justify-center items-center w-full'>
                    <button
                        aria-label={`Choisir la musique : ${song.artist} - ${song.title}`}
                        className={`
                                    w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]
                                    py-5 text-lg rounded-xl transition-all duration-300 tracking-wider
                                    ${clickedId === song._id && isCorrect ? 'bg-green-500 btn-text-game' : ''}
                                    ${clickedId === song._id && !isCorrect ? ' bg-[#7ff000] btn-text-game' : ''}

                                    
                                    ${
                                        clickedId !== song._id
                                            ? 'bg-gradient-to-b from-[#579d07] via-[#19c207] to-[#7ff000] btn-text-game'
                                            : ''
                                    }
                                `}
                        onClick={() => handleClick(song._id)}
                        disabled={clickedId !== null}
                    >
                        {clickedId === song._id && !isCorrect ? 'Mauvaise réponse' : `${song.artist} - ${song.title}`}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ButtonPlayGame;
