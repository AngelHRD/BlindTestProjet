import { useState } from 'react';

function SliderMp3() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleProgress = (e) => {
        const value = e.target.value;
        setProgress(value);

        e.target.style.setProperty('--progress', `${value}%`);
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
                    onClick={() => setIsPlaying(!isPlaying)}
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
                className='w-7/12 appearance-none h-1 bg-[#7FF000] rounded-full mx-2 thumb-custom'
                aria-label='Choisir la durée de la musique'
            />
        </>
    );
}

export default SliderMp3;
