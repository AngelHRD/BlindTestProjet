import { Link } from 'react-router-dom';

function BoxShadowGenre() {
    const textBox = document.getElementById('dynamic-text');
    const inputText = document.getElementById('inputText');
    const containerWidth = 100; // Largeur max de la div

    inputText.addEventListener('input', function () {
        textBox.textContent = this.value || 'Rock'; // Texte par défaut
        let fontSize = 20; // Taille max

        textBox.style.fontSize = fontSize + 'px';

        while (textBox.scrollWidth > containerWidth && fontSize > 5) {
            fontSize--; // Réduit la taille de la typo si ça dépasse
            textBox.style.fontSize = fontSize + 'px';
        }
    });

    return (
        <>
            <div className='bg-blur w-3/5 max-w-[800px] h-[550px] px-24 py-12 flex flex-col items-center gap-4 mt-5 bg-green-600'>
                {/* titre*/}
                {/* <div className=''>
                    <div className=''>
                        <h2 className='t-owners'>
                            Blin<span className='t-briller'>d</span> test
                        </h2>
                        <div className=''>
                            <h2 className='text-fluid'>{data.data.title}</h2>
                        </div>
                    </div>
                </div> */}
                <div className='container'>
                    <div className='text-box' id='dynamic-text'>
                        Rock
                    </div>
                </div>
                <input type='text' id='inputText' placeholder='Tape un texte...'></input>

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
                <Link
                    to={`/genres`}
                    className='bg-[chartreuse] w-3/4 h-14 rounded-xl mt-auto btn-text flex justify-center items-center'
                >
                    Let&apos;s go !
                </Link>
            </div>
        </>
    );
}

export default BoxShadowGenre;
