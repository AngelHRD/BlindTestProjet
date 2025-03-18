import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MaxSongsInput({ initialValue, onChange, buttonRef }) {
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [maxSongs, setMaxSongs] = useState(initialValue || 5);
    const [lastValidValue, setLastValidValue] = useState(initialValue || 5);

    useEffect(() => {
        localStorage.setItem('maxSongs', maxSongs);
    }, [maxSongs]);

    const handleMaxSongsChange = (e) => {
        const value = e.target.value;

        if (value === '') {
            setMaxSongs('');
            return;
        }

        if (/^\d+$/.test(value)) {
            setMaxSongs(Number(value));
        }
    };

    const validateInput = () => {
        const numericValue = Number(maxSongs);

        if (maxSongs === '' || numericValue < 5 || numericValue > 30 || isNaN(numericValue)) {
            setError('Veuillez choisir un nombre entre 5 et 30.');
            setIsValid(false);
            setMaxSongs(lastValidValue);
            return false;
        } else {
            setError('');
            setIsValid(true);
            setLastValidValue(numericValue);
            return true;
        }
    };

    const handleBlur = () => {
        validateInput();
        if (onChange) {
            onChange(Number(maxSongs));
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // ⚠️ Empêcher le comportement par défaut
            if (validateInput() && buttonRef?.current) {
                setTimeout(() => {
                    buttonRef.current.click(); // ✅ Clique sur le bouton après validation
                }, 10);
            }
        }
    };

    return (
        <>
            <label htmlFor='maxSongs' className='text-white para lg:text-[1.2rem] text-base'>
                Choisissez votre nombre de musiques :
                <input
                    id='maxSongs'
                    type='text'
                    required
                    value={maxSongs}
                    onChange={handleMaxSongsChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className='!text-[chartreuse] para lg:text-[1.2rem] text-base w-8 text-center'
                />
            </label>
            {!isValid && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        </>
    );
}

MaxSongsInput.propTypes = {
    initialValue: PropTypes.number,
    onChange: PropTypes.func,
    buttonRef: PropTypes.object,
};

export default MaxSongsInput;
