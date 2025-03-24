import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ApiRequest from '../../services/api';

function Login() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email('Email invalide').required('Email requis'),
        password: yup
            .string()
            .required('Mot de passe requis')
            .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await ApiRequest.post(
                '/auth/login',
                {
                    email: data.email,
                    password: data.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message || 'Erreur lors de la connexion');
        }
    };

    return (
        <div className='flex items-center justify-center lg:h-[calc(100vh-72px)]' role='main'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center text-white mb-8' id='login-title'>
                    Connexion
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' aria-labelledby='login-title' noValidate>
                    <div>
                        <label htmlFor='email' className='sr-only'>
                            Email
                        </label>
                        <input
                            {...register('email')}
                            id='email'
                            type='email'
                            placeholder='Email'
                            required
                            aria-required='true'
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.email && (
                            <p id='email-error' className='text-red-500 text-sm' role='alert'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor='password' className='sr-only'>
                            Mot de passe
                        </label>
                        <input
                            {...register('password')}
                            id='password'
                            type='password'
                            placeholder='Mot de passe'
                            required
                            aria-required='true'
                            aria-invalid={errors.password ? 'true' : 'false'}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.password && (
                            <p id='password-error' className='text-red-500 text-sm' role='alert'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out'
                        aria-label='Se connecter'
                    >
                        Se connecter
                    </button>
                </form>
                <p className='text-center mt-6 text-gray-400'>
                    Pas encore de compte ?{' '}
                    <Link to='/register' className='text-blue-500 hover:text-blue-400'>
                        Inscrivez-vous ici
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
