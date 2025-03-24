import { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonPerso from '../ButtonPerso';
import MaxSongsInput from './MaxSongsInput';
import { useRef } from 'react';

function BoxShadowGenre({ data }) {
    const [maxSongs, setMaxSongs] = useState(Number(localStorage.getItem('maxSongs')) || 5);
    const [isValid, setIsValid] = useState(true);
    const buttonRef = useRef(null);

    const getTitleClasses = () => {
        const title = data?.title?.trim();
        if (!title) return '';

        const words = title.split(/\s+/);
        const longestWord = Math.max(...words.map((word) => word.length));

        let fontSizeClass = '';

        if (words.length === 1 && longestWord <= 5) {
            fontSizeClass = 'lg:text-[3rem] text-[9vw]'; // Court
        } else if (words.length <= 2 && longestWord <= 8) {
            fontSizeClass = 'lg:text-[2.5rem] text-[7vw]'; // Moyen (2 mots ou mot moyen)
        } else {
            fontSizeClass = 'lg:text-[2rem] text-[6vw]'; // Long (plusieurs mots ou mot très long)
        }

        return `text-center ${fontSizeClass}`;
    };

    const handleMaxSongsUpdate = (newMaxSongs) => {
        setMaxSongs(newMaxSongs);
        setIsValid(newMaxSongs >= 5 && newMaxSongs <= 30);
    };

    return (
        <div className='bg-blur-genre mx-2 px-4 py-10  flex flex-col items-center gap-4 lg:w-3/5 lg:max-w-[800px] lg:py-12 lg:mx-0 lg:px-24'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='t-owners lg:text-[3.7rem] text-[10vw] leading-[0.7]'>
                    Blin<span className='t-briller lg:text-[3.7rem] text-[10vw] leading-[0.7]'>d</span> test
                    <hr className='border-0.5 text-[chartreuse] w-full mt-2'></hr>
                </h2>

                {/*fontsize change dynamiquement la taille de la police selon le nombre de mots.*/}
                <div className={`text-bt-genre flex items-center justify-center lg:my-2 ${getTitleClasses()}`}>
                    {data?.title}
                </div>
            </div>

            <div className='flex flex-col gap-4 mx-4 lg:mx-0 lg:mb-6'>
                <p className='para hidden lg:block lg:text-[1.2rem] text-base'>
                    Imbattable en blind test {data?.title} ? C&apos;est ce qu&apos;on va voir !
                </p>
                <MaxSongsInput initialValue={maxSongs} onChange={handleMaxSongsUpdate} buttonRef={buttonRef} />
                <p className='para lg:text-[1.2rem] text-base text-center lg:text-start'>
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
