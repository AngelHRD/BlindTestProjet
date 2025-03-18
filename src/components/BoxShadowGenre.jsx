import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoxShadowGenre(data) {
    const [text, setText] = useState(null);
    const [fontSize, setFontSize] = useState('3.7rem');
    const [maxSongs, setMaxSongs] = useState(parseInt(localStorage.getItem('maxSongs')));

    useEffect(() => {
        if (!data?.data?.title) return; // Vérifie que le titre existe avant de continuer

        const newText = data.data.title;

        // Évite de re-set l'état si la valeur est déjà correcte
        setText((prevText) => (prevText !== newText ? newText : prevText));

        const adjustFontSize = (text) => {
            const words = text.trim().split(/\s+/);
            const longWord = words.some((word) => word.length > 5);
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setFontSize(longWord || words.length > 1 ? '6vw' : '9vw');
            } else {
                setFontSize(words.length > 1 ? '2rem' : '3.7rem');
            }
        };

        adjustFontSize(newText); // Applique une première fois la taille de police

        const handleResize = () => adjustFontSize(newText);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data]);

    useEffect(() => {
        localStorage.setItem('maxSongs', maxSongs);
    }, [maxSongs]);

    return (
        <div className='bg-blur mx-2 px-4 py-10  flex flex-col items-center gap-4 lg:w-3/5 lg:max-w-[800px] lg:py-12 lg:mx-0 lg:px-24'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='t-owners lg:text-[3.7rem] text-[10vw] leading-[0.7]'>
                    Blin<span className='t-briller lg:text-[3.7rem] text-[10vw] leading-[0.7]'>d</span> test
                    <hr className='border-0.5 text-[chartreuse] w-full mt-2'></hr>
                </h2>

                {/*fontsize change dynamiquement la taille de la police selon le nombre de mots.*/}
                <div
                    className='text-bt-genre text-center flex items-center justify-center lg:my-2'
                    style={{ fontSize }}
                >
                    {text}
                </div>
            </div>
            <div className='flex flex-col gap-4 mx-4 lg:mx-0'>
                <p className='para hidden lg:block lg:text-[1.2rem] text-base'>
                    Imbattable en blind test {data.data.title} ? C&apos;est ce qu&apos;on va voir !
                </p>
                <p className='para lg:text-[1.2rem] text-base text-center lg:text-start'>
                    Prépare-toi à relever le défi !
                    <br />
                    Tu auras 15 secondes pour écouter chaque extrait et choisir laquelle des 4 propositions correspond à
                    la chanson et à l&apos;artiste ou groupe.
                </p>
                <p className='para hidden lg:block lg:text-[1.2rem] text-base'>
                    Attention, chaque seconde compte. À toi de montrer que tu as l&apos;oreille ! Prêt à te mesurer à ce
                    blind test ? C&apos;est parti !
                </p>
            </div>

            <div className='flex lg:justify-start justify-center items-center w-full gap-5'>
                <label htmlFor='maxSongs' className='text-white para lg:text-[1.2rem] text-base'>
                    Choisissez votre nombres de musiques :
                </label>
                <input
                    type='number'
                    defaultValue='5'
                    required
                    min='5'
                    max='20'
                    value={maxSongs}
                    onChange={(e) => setMaxSongs(e.target.value)}
                    className='!text-[chartreuse] para lg:text-[1.2rem] text-base w-10'
                />
            </div>

            <Link
                to={`/genres/${data.data.slug}/blind-test`}
                className='bg-[chartreuse] w-3/4 h-14 rounded-xl mt-6 btn-text justify-center items-center lg:text-[1.2rem] text-base hidden lg:flex'
            >
                Let&apos;s go !
            </Link>
        </div>
    );
}

export default BoxShadowGenre;
