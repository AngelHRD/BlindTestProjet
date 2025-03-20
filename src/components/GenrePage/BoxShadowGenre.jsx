import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonPerso from '../ButtonPerso';
import MaxSongsInput from './MaxSongsInput';
import { useRef } from 'react';

function BoxShadowGenre({ data }) {
    const [maxSongs, setMaxSongs] = useState(Number(localStorage.getItem('maxSongs')) || 5);
    const [isValid, setIsValid] = useState(true);
    const [text, setText] = useState(null);
    const [fontSize, setFontSize] = useState('3.7rem');
    const buttonRef = useRef(null);

    useEffect(() => {
        if (!data?.title) return; // Vérifie que le titre existe avant de continuer

        const newText = data?.title;

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

    const handleMaxSongsUpdate = (newMaxSongs) => {
        setMaxSongs(newMaxSongs);
        setIsValid(newMaxSongs >= 5 && newMaxSongs <= 30);
    };

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
                    Imbattable en blind test {data?.title} ? C&apos;est ce qu&apos;on va voir !
                </p>
                <MaxSongsInput initialValue={maxSongs} onChange={handleMaxSongsUpdate} buttonRef={buttonRef} />
                <p className='para lg:text-[1.2rem] text-base text-center lg:text-start'>
                    Prépare-toi à relever le défi !
                    <br />
                    Tu auras 15 secondes pour écouter chaque extrait et choisir laquelle des 4 propositions correspond à
                    la chanson et à l&apos;artiste ou groupe.
                </p>
            </div>

            <ButtonPerso
                to={isValid ? `/genres/${data?.slug}/blind-test` : '#'}
                ref={buttonRef}
                text="Let's gooo !"
                width='lg:w-3/4 w-full'
                height='lg:h-14 h-10'
                hidden='hidden lg:block'
                disabled={!isValid}
            />
        </div>
    );
}

BoxShadowGenre.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BoxShadowGenre;
