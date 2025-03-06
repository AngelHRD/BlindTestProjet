import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoxShadowGenre(data) {
    const [text, setText] = useState(null);
    const [fontSize, setFontSize] = useState('2rem'); // Initialisation à 2rem

    useEffect(() => {
        const textBox = document.getElementById('dynamic-text');

        // Met à jour le texte dynamique dès que data.data.title est disponible
        setText(data?.data?.title);

        let newFontSize = 32; // Taille max en px, correspondant à 2rem
        const maxWidth = 100; // Largeur max à comparer

        while (textBox.scrollWidth > maxWidth && newFontSize > 8) {
            // Min taille de la police est 8px
            newFontSize--; // Réduit la taille de la police si elle dépasse
        }

        // Conversion de la taille en rem
        setFontSize(`${newFontSize / 16}rem`);
    }, [data]);

    return (
        <div className='bg-blur w-3/5 max-w-[800px] h-[550px] px-24 py-12 flex flex-col items-center gap-4 mt-5 bg-green-600'>
            <div className='container-text-genre'>
                <div className='text-box' id='dynamic-text' style={{ fontSize: fontSize }}>
                    {text}
                </div>
            </div>
            <p className='para'>
                Bienvenue dans une expérience ultime pour tous les amateurs de musique et de challenges.
            </p>
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
