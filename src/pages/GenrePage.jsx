import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkBack from '../components/LinkBack';
import ApiRequest from '../services/api';
import BoxShadowGenre from '../components/BoxShadowGenre';

function GenrePage() {
    const { name } = useParams(); // Récupère le nom du genre depuis l'URL à l'aide du hook useParams de React Router.
    const [data, setData] = useState(null); // Déclare une variable d'état 'data' pour stocker les données du genre récupérées de l'API, initialement définie à 'null'.
    const [loading, setLoading] = useState(true); // Déclare une variable d'état 'loading' pour indiquer si les données sont encore en cours de chargement. Initialement définie à 'true'.

    useEffect(() => {
        // Hook useEffect pour effectuer une action après le premier rendu du composant ou après chaque changement du paramètre 'name'.
        const fetchGenre = async () => {
            try {
                const response = await ApiRequest.get(`/cards`); // Envoie une requête GET à l'API pour récupérer les cartes disponibles.
                const allGenres = response.data; // Récupère toutes les données des genres à partir de la réponse de l'API.

                // Cherche dans les genres récupérés celui qui correspond au nom du genre passé dans l'URL.
                const genre = allGenres.find((g) => g.title.toLowerCase() === name.toLowerCase());

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

    // Si les données n'ont pas été récupérées (data est null), on affiche un message indiquant que les données ne sont pas disponibles.
    if (!data) {
        return <div className='text-center mt-10'>Données non disponible</div>;
    }

    return (
        <div className='relative max-h-screen'>
            {/* fond  */}
            <div className='absolute -top-18 bg-[#000002] w-full'>
                <img src={data.img_v3} alt={data.title} className='h-[100vh]' />
            </div>

            <div className='relative px-48 w-full z-10'>
                <LinkBack to='/genres' className='bg-amber-300' />
                <div className='flex justify-end'>
                    <BoxShadowGenre data={data}></BoxShadowGenre>
                </div>
            </div>
        </div>
    );
}

export default GenrePage;
