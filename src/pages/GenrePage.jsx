import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkBack from '../components/LinkBack';
import ApiRequest from '../services/api';
import Loader from '../components/Loader';
import BoxShadowGenre from '../components/BoxShadowGenre';
import './cssPages/GenrePage.css';

function GenrePage() {
    const { name } = useParams(); // Récupère le nom du genre depuis l'URL à l'aide du hook useParams de React Router.
    const [data, setData] = useState(null); // Déclare une variable d'état 'data' pour stocker les données du genre récupérées de l'API, initialement définie à 'null'.
    const [loading, setLoading] = useState(true); // Déclare une variable d'état 'loading' pour indiquer si les données sont encore en cours de chargement. Initialement définie à 'true'.
    const [imageFondGenre, setImageFondGenre] = useState(); // Variable d'état pour l'image

    useEffect(() => {
        // Hook useEffect pour effectuer une action après le premier rendu du composant ou après chaque changement du paramètre 'name'.
        const fetchGenre = async () => {
            try {
                const response = await ApiRequest.get(`/cards`); // Envoie une requête GET à l'API pour récupérer les cartes disponibles.
                const allGenres = response.data; // Récupère toutes les données des genres à partir de la réponse de l'API.
                console.log('test', response.data);
                // Cherche dans les genres récupérés celui qui correspond au nom du genre passé dans l'URL.
                const genre = allGenres.find((g) => g.slug.toLowerCase() === name.toLowerCase());

                // Si un genre correspondant est trouvé dans la réponse de l'API :
                if (genre) {
                    setData(genre); // Met à jour l'état 'data' avec les données du genre trouvé.
                } else {
                    console.log('Genre non trouvé !'); // Si aucun genre n'est trouvé, affiche un message dans la console.
                    setData(null); // Met l'état 'data' à 'null' pour signaler qu'aucun genre n'a été trouvé.
                }
            } catch (error) {
                console.error('Erreur API:', error); // Si une erreur se produit pendant la requête, affiche l'erreur dans la console.
                setData(null); // Si une erreur survient, met l'état 'data' à 'null'.
            } finally {
                setLoading(false); // Quel que soit le résultat (réussi ou échoué), met 'loading' à 'false' pour indiquer que la requête est terminée.
            }
        };

        fetchGenre(); // Appelle la fonction
    }, [name]); // Le tableau de dépendances inclut 'name', ce qui signifie que le hook se déclenche à chaque fois que la valeur de 'name' change.
    useEffect(() => {
        // Fonction qui met à jour l'image selon la taille de l'écran
        const updateImageSource = () => {
            if (window.innerWidth < 768) {
                setImageFondGenre(data?.img_phone); // Si l'écran est petit (mobile)
            } else {
                setImageFondGenre(data?.img_desktop); // Si l'écran est large (desktop)
            }
        };

        // Appel initial pour définir l'image au chargement
        if (data) {
            updateImageSource();
        }

        // Écouteur d'événements pour la mise à jour lors du redimensionnement de la fenêtre
        window.addEventListener('resize', updateImageSource);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('resize', updateImageSource);
        };
    }, [data]); // Le hook dépend de 'data' pour se déclencher une fois que les données sont chargées

    // Si les données n'ont pas été récupérées (data est null), on affiche un message indiquant que les données ne sont pas disponibles.
    if (!data) {
        return <div className='text-center mt-10'>Données non disponible</div>;
    }
    if (loading) {
        return <Loader />;
    }

    return (
        <div className='relative max-w-full max-h-screen h-screen lg:h-[calc(100vh-72px)] bg-[#020100]'>
            {/* fond  */}
            <div className='absolute lg:-top-18 w-full h-screen'>
                <img src={imageFondGenre} alt={data.title} className='h-[100vh] object-cover object-left bottom-0' />
            </div>
            {/* container retour et box  */}
            <div className='container lg:mx-auto px-4 min-h-fit pt-10 md:pt-5 relative z-10 h-full'>
                <div className='absolute top-5'>
                    <LinkBack to='/genres' text='Retour' />
                </div>
                <div className='flex justify-center lg:justify-end lg:items-center lg:h-full'>
                    <BoxShadowGenre data={data}></BoxShadowGenre>
                </div>
            </div>
        </div>
    );
}

export default GenrePage;
