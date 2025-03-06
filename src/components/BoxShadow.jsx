function BoxShadow() {
    return (
        <>
            <div className='bg-blur w-3/5 h-[550px] px-24 py-12 flex flex-col items-center gap-4'>
                {/* titre*/}
                <div className='flex justify-center'>
                    <div className='w-full my-3 flex flex-col'>
                        <h2 className='t-owners'>
                            Blin<span className='t-briller'>d</span> test
                        </h2>
                        <h2 className='pl-4 t-briller-vide'>battle</h2>
                    </div>
                </div>

                {/* paragraphes*/}
                <p className='para'>
                    Bienvenue dans une expérience ultime pour tous les amateurs de musique et de challenges.
                </p>
                <p className='para'>
                    Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent faire la différence.
                </p>
                <p className='para'>
                    Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques indémodables, tu
                    trouveras des playlists variées qui mettront tes connaissances à l’épreuve.
                </p>

                {/* bouton*/}
                <button className='bg-[var(--chartreuse)] w-3/4 h-14 rounded-xl mt-auto btn-text'>Let's gooo</button>
            </div>
        </>
    );
}

export default BoxShadow;
