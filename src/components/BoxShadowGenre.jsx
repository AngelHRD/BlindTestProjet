import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function BoxShadowGenre(data) {
    const [text, setText] = useState(null);
    const [fontSize, setFontSize] = useState('2rem'); // Initialisation à 2rem
    const textBoxRef = useRef(null); // Référence vers l'élément texte

    useEffect(() => {
        setText(data?.data?.title || 'Rock'); // Valeur par défaut si aucune donnée n'est fournie
    }, [data]);

    useEffect(() => {
        if (!textBoxRef.current) return;

        const adjustFontSize = () => {
            let newFontSize = 32; // 2rem = 32px
            const maxWidth = textBoxRef.current.offsetWidth; // Largeur de la div
            const container = textBoxRef.current;

            container.style.fontSize = `${newFontSize}px`; // Applique la taille max au départ

            while (container.scrollWidth > maxWidth && newFontSize > 10) {
                newFontSize--; // Réduit la taille de la police si ça dépasse
                container.style.fontSize = `${newFontSize}px`;
            }

            setFontSize(`${newFontSize / 16}rem`); // Conversion en rem
        };

        // Ajoute un délai pour s'assurer que le texte est bien rendu avant le calcul
        const timeout = setTimeout(adjustFontSize, 0);

        return () => clearTimeout(timeout);
    }, [text]); // Exécute l'effet quand `text` change

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
