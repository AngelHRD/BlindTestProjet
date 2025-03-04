import { useState } from 'react';

function SliderMp3() {
    const [isPlaying, setIsPlaying] = useState(false);

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
                className='w-1/3 appearance-none h-1 bg-[#7FF000] rounded-full mx-2 thumb-custom'
                aria-label='Choisir la durée de la musique'
            />

            {/* met le en dessous */}
            <div className='block '>
                <p className='text-white '>Titre de la musique</p>
            </div>
        </>
    );
}

export default SliderMp3;
