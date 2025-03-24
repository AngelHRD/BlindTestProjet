import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ApiRequest from '../../services/api';

function Register() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        username: yup.string().required("Nom d'utilisateur requis"),
        email: yup.string().email('Email invalide').required('Email requis'),
        password: yup
            .string()
            .required('Mot de passe requis')
            .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
        confirmPassword: yup
            .string()
            .required('Confirmation du mot de passe requis')
            .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
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
                '/auth/register',
                {
                    username: data.username,
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
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message || "Erreur lors de l'inscription");
        }
    };

    return (
        <div className='flex items-center justify-center lg:h-[calc(100vh-72px)]' role='main'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center text-white mb-8' id='register-title'>
                    Inscription
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6'
                    aria-labelledby='register-title'
                    noValidate
                >
                    <div>
                        <label htmlFor='username' className='sr-only'>
                            Nom d'utilisateur
                        </label>
                        <input
                            {...register('username')}
                            id='username'
                            type='text'
                            placeholder="Nom d'utilisateur"
                            required
                            aria-required='true'
                            aria-invalid={errors.username ? 'true' : 'false'}
                            aria-describedby={errors.username ? 'username-error' : undefined}
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.username && (
                            <p id='username-error' className='text-red-500 text-sm' role='alert'>
                                {errors.username.message}
                            </p>
                        )}
                    </div>
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
                    <div>
                        <label htmlFor='confirmPassword' className='sr-only'>
                            Confirmer le mot de passe
                        </label>
                        <input
                            {...register('confirmPassword')}
                            id='confirmPassword'
                            type='password'
                            placeholder='Confirmer le mot de passe'
                            required
                            aria-required='true'
                            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                            aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {errors.confirmPassword && (
                            <p id='confirm-password-error' className='text-red-500 text-sm' role='alert'>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out'
                        aria-label="S'inscrire"
                    >
                        S&apos;inscrire
                    </button>
                </form>
                <p className='text-center mt-6 text-gray-400'>
                    Déjà inscrit ?{' '}
                    <Link to='/login' className='text-blue-500 hover:text-blue-400'>
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
