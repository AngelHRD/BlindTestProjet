import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MaxSongsInput({ initialValue, onChange, buttonRef }) {
    const [maxSongs, setMaxSongs] = useState(initialValue || 10);
    const [lastValidValue, setLastValidValue] = useState(initialValue || 10);

    useEffect(() => {
        const storedValue = localStorage.getItem('maxSongs');
        if (String(maxSongs) !== storedValue) {
            localStorage.setItem('maxSongs', maxSongs);
        }
    }, [maxSongs]);

    const handleMaxSongsChange = (value) => {
        setMaxSongs(value);
        if (onChange) {
            onChange(value);
        }
    };

    const validateInput = () => {
        const numericValue = Number(maxSongs);

        if (maxSongs === '' || numericValue < 5 || numericValue > 30 || isNaN(numericValue)) {
            setMaxSongs(lastValidValue);
            return false;
        } else {
            setLastValidValue(numericValue);
            return true;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (validateInput() && buttonRef?.current) {
                setTimeout(() => {
                    buttonRef.current.click();
                }, 10);
            }
        }
    };

    return (
        <>
            <div className='flex flex-col gap-4 mb-2'>
                <p className='text-white text-left para lg:text-[1.2rem] text-base '>
                    Choisissez votre nombre de musiques :
                </p>
                <div className='flex justify-center gap-4'>
                    {[10, 20, 30].map((value) => (
                        <button
                            key={value}
                            onClick={() => handleMaxSongsChange(value)}
                            onKeyDown={handleKeyDown}
                            aria-pressed={maxSongs === value}
                            aria-label={`Choisir ${value} musiques`}
                            className={`px-6 py-2 cursor-pointer rounded-lg text-center text-xl transition-colors duration-500 ease-in-out text-[chartreuse] ${
                                maxSongs === value
                                    ? 'bg-neutral-800 shadow-[chartreuse]/60 shadow-xs '
                                    : 'bg-neutral-900 hover:bg-neutral-800 '
                            }`}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

MaxSongsInput.propTypes = {
    initialValue: PropTypes.number,
    onChange: PropTypes.func,
    buttonRef: PropTypes.object,
};

export default MaxSongsInput;
