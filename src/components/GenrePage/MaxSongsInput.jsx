import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MaxSongsInput({ initialValue, onChange, buttonRef }) {
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
            setMaxSongs(lastValidValue);
            return false;
        } else {
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
            <label htmlFor='maxSongs' className='text-white para lg:text-[1.2rem] text-base my-5'>
                Choisissez votre nombre de musiques :
                <select
                    id='maxSongs'
                    required
                    value={maxSongs}
                    onChange={handleMaxSongsChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    className='!text-[chartreuse] para lg:text-[1.2rem] text-base w-12 text-center'
                >
                    {[...Array(6)].map((_, index) => (
                        <option className='bg-[#141313] w-12 ' key={index * 5 + 5} value={index * 5 + 5}>
                            {index * 5 + 5}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
}

MaxSongsInput.propTypes = {
    initialValue: PropTypes.number,
    onChange: PropTypes.func,
    buttonRef: PropTypes.object,
};

export default MaxSongsInput;
