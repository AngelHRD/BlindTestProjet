import { Link } from 'react-router-dom';

function BoxShadow() {
    return (
        <>
            <div className='bg-blur w-full lg:w-3/5 max-w-[800px] mb-20 lg:mb-0 lg:px-24 px-6 lg:py-12 py-6 flex flex-col items-center gap-4 lg:mt-5 lg:text-[3.7rem] text-4xl'>
                {/* titre*/}
                <div className='flex justify-center'>
                    <div className='w-full lg:my-3 flex flex-col'>
                        <h2 className='t-owners lg:text-[3.7rem] text-4xl'>
                            Blin<span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test
                        </h2>
                        <h2 className='pl-4 t-briller-vide lg:text-[3.7rem] text-4xl'>battle</h2>
                    </div>
                </div>

                {/* paragraphes*/}
                <div className='flex flex-col gap-4'>
                    <p className='para lg:text-[1.1rem] text-base'>
                        Bienvenue dans une expérience ultime pour tous les amateurs de musique et de challenges.
                    </p>
                    <p className='para lg:text-[1.1rem] text-base'>
                        Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent faire la
                        différence.
                    </p>
                    <p className='para lg:text-[1.1rem] text-base'>
                        Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques indémodables, tu
                        trouveras des playlists variées qui mettront tes connaissances à l’épreuve.
                    </p>
                </div>

                {/* bouton*/}
                <Link
                    to={`/genres`}
                    className='bg-[chartreuse] lg:w-3/4 w-full lg:h-14 h-10 rounded-xl mt-6 btn-text flex justify-center items-center lg:text-[1.2rem] text-base'
                >
                    Let&apos;s go !
                </Link>
            </div>
        </>
    );
}

export default BoxShadow;
