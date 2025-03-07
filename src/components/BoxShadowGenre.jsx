import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoxShadowGenre(data) {
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
        <div className='bg-blur w-3/5 max-w-[800px] h-[550px] px-24 py-12 flex flex-col items-center gap-4 mt-5 bg-green-600'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='t-owners'>
                    Blin<span className='t-briller'>d</span> test
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

            <p className='para'>Imbattable en blind test {data.data.title} ? C'est ce qu'on va voir !</p>
            <p className='para'>
                Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent faire la différence.
            </p>
            <p className='para'>
                Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques indémodables, tu trouveras
                des playlists variées qui mettront tes connaissances à l’épreuve.
            </p>
            <Link
                to={`/genres`}
                className='bg-[chartreuse] w-3/4 h-14 rounded-xl mt-auto btn-text flex justify-center items-center'
            >
                Let&apos;s go !
            </Link>
        </div>
    );
}

export default BoxShadowGenre;
