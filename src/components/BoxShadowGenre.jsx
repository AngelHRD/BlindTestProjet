import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoxShadowGenre(data) {
    console.log('coucou', data);
    const [text, setText] = useState(null);
    const [fontSize, setFontSize] = useState('3.7rem'); // Initialisation à 5rem

    useEffect(() => {
        const newText = data?.data?.title; // Valeur par défaut
        setText(newText);

        // Vérifie le nombre de mots dans le texte
        const words = newText.trim().split(/\s+/);
        setFontSize(words.length > 1 ? '2rem' : '3.7rem');
    }, [data]);

    return (
        <div className='bg-blur mx-2 px-4 lg:w-3/5 lg:max-w-[800px] h-[550px] lg:mx-0 lg:px-24 py-12 flex flex-col items-center gap-4'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='t-owners lg:text-[3.7rem] text-[10vw]'>
                    Blin<span className='t-briller lg:text-[3.7rem] text-[10vw]'>d</span> test
                    <hr className='border-0.5 text-[chartreuse] w-full mt-2'></hr>
                </h2>

                {/*fontsize change dynamiquement la taille de la police selon le nombre de mots.*/}
                <div
                    className='text-bt-genre text-center flex items-center justify-center h-[5rem] my-2'
                    style={{ fontSize }}
                >
                    {text}
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='para hidden lg:block lg:text-[1.2rem] text-base'>
                    Imbattable en blind test {data.data.title} ? C&apos;est ce qu&apos;on va voir !
                </p>
                <p className='para lg:text-[1.2rem] text-base'>
                    Prépare-toi à relever le défi ! Tu auras 15 secondes pour écouter chaque extrait et choisir laquelle
                    des 4 propositions correspond à la chanson et à l&apos;artiste ou groupe.
                </p>
                <p className='para hidden lg:block lg:text-[1.2rem] text-base'>
                    Attention, chaque seconde compte. À toi de montrer que tu as l&apos;oreille ! Prêt à te mesurer à ce
                    blind test ? C&apos;est parti !
                </p>
            </div>
            <Link
                to={`/genres/${data.data.slug}/blind-test`}
                className='bg-[chartreuse] w-3/4 h-14 rounded-xl mt-auto btn-text flex justify-center items-center lg:text-[1.2rem] text-base'
            >
                Let&apos;s go !
            </Link>
        </div>
    );
}

export default BoxShadowGenre;
