function ButtonPlayGame({ songs }) {
    return (
        <>
            <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto px-4 w-fit'>
                {songs.map((song) => (
                    <div key={song._id} className='flex justify-center items-center w-full'>
                        <button
                            aria-label='Choisir la musique'
                            className='w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-full py-5 text-lg rounded-xl btn-text-game text-center transition-all duration-300'
                        >
                            {song.artist}&nbsp; - &nbsp;{song.title}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ButtonPlayGame;
