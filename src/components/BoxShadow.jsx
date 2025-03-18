import ButtonPerso from './ButtonPerso';

function BoxShadow() {
    return (
        <>
            <div className='bg-blur w-full lg:w-3/5 max-w-[800px] mb-[10vh] lg:mb-0 lg:px-24 px-[11vw] lg:py-12 py-6 flex flex-col items-center gap-4 lg:mt-5 lg:text-[3.7rem] text-4xl mt-auto'>
                {/* titre*/}
                <div className='flex justify-center'>
                    <div className='w-full my-3 flex flex-col'>
                        <h2 className='t-owners lg:text-[3.7rem] text-[10vw] leading-[0.7]'>
                            Blin<span className='t-briller lg:text-[3.7rem] text-[10vw] leading-[0.7]'>d</span> test
                        </h2>
                        <h2 className='pl-4 t-briller-vide lg:text-[3.7rem] text-[10vw] leading-[0.7]'>battle</h2>
                    </div>
                </div>

                {/* paragraphes*/}
                <div className='flex flex-col gap-4 flex-1'>
                    <p className='para lg:text-[1.2rem] text-base'>
                        Bienvenue dans une expérience ultime pour tous les amateurs de musique et de challenges.
                    </p>
                    <p className='para lg:text-[1.2rem] text-base'>
                        Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent faire la
                        différence.
                    </p>
                    <p className='para lg:text-[1.2rem] text-base'>
                        Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques indémodables, tu
                        trouveras des playlists variées qui mettront tes connaissances à l’épreuve.
                    </p>
                </div>

                {/* bouton*/}
                {/* <Link
                    to={`/genres`}
                    className='bg-[chartreuse] lg:w-3/4 w-full lg:h-14 h-10 rounded-xl lg:mt-6 btn-text flex justify-center items-center lg:text-[1.2rem] text-base'
                >
                    Jouer !
                </Link> */}
                <ButtonPerso to='/genres' text='Jouer !' width='lg:w-3/4 w-full' height='lg:h-14 h-10' />
            </div>
        </>
    );
}

export default BoxShadow;
