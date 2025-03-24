import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiRequest from '../../services/api';

function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (values.password !== values.confirmPassword) {
            return alert('Les mots de passe ne correspondent pas');
        }

        try {
            const { data } = await ApiRequest.post(
                `/auth/register`,
                {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            localStorage.setItem('token', data.token);
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message || "Erreur lors de l'inscription");
        }
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className=' flex items-center justify-center lg:h-[calc(100vh-72px)] '>
            <div className='bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center text-white mb-8'>Inscription</h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <input
                            type='text'
                            name='username'
                            placeholder="Nom d'utilisateur"
                            value={values.username}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Mot de passe'
                            value={values.password}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='Confirmer le mot de passe'
                            value={values.confirmPassword}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out'
                    >
                        S'inscrire
                    </button>
                </form>
                <p className='text-center mt-6 text-gray-400'>
                    Déjà inscrit ?{' '}
                    <Link to='/login' className='text-blue-500 hover:text-blue-400'>
                        Connectez-vous ici
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
