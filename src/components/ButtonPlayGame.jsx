function ButtonPlayGame({ songs }) {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto  px-4'>
                {songs.map((song) => (
                    <div key={song._id} className='flex justify-center items-center min-w-10'>
                        <button
                            aria-label='Choisir la musique'
                            className='w-full h-full py-6 text-lg rounded-xl btn-text-game text-center'
                        >
                            {song.artist}&emsp; - &emsp;{song.title}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ButtonPlayGame;
