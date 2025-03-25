import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ButtonPerso from '../../components/ButtonPerso';
import { useState, useEffect } from 'react';
import ApiRequest from '../../services/api';
import { motion } from 'framer-motion';

function Register() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hidden = setTimeout(() => {
            setIsVisible(true);
        }, 670);

        return () => clearTimeout(hidden);
    }, []);

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

            // Sauvegarder les informations de l'utilisateur
            localStorage.setItem(
                'user',
                JSON.stringify({
                    username: data.username,
                    email: data.email,
                }),
            );
            localStorage.setItem('token', response.data.token);
            window.dispatchEvent(new Event('localStorageChanged'));

            navigate('/');
        } catch (error) {
            console.error(error);
            setErrorMessage(error?.response?.data?.message || "Erreur lors de l'inscription");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col items-center justify-center lg:h-[calc(100vh-72px)]' role='main'>
            {/* SVG */}
            <div className='mb-4 flex items-center justify-center'>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 80 80' width='200' height='200'>
                    <circle className='animate-draw-circle' fill='none' stroke='#7ff000' cx='40' cy='24.33' r='21.73' />
                    <path
                        className={`${isVisible ? 'block' : 'hidden'} animate-draw-body `}
                        fill='none'
                        stroke='#7ff000'
                        d='M40,46.16h0c11.99,0,21.73,9.73,21.73,21.73v9.76H18.27v-9.76c0-11.99,9.73-21.73,21.73-21.73Z'
                    />
                </svg>
            </div>
            {/* FORMULAIRE */}
            <div className='px-8 rounded-lg w-full max-w-md'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
                    <h2 className='text-3xl text-center text-white mb-8' id='register-title'>
                        Inscription
                    </h2>
                </motion.div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6'
                    aria-labelledby='register-title'
                    noValidate
                >
                    <div>
                        <label htmlFor='username' className='sr-only'>
                            Nom d&apos;utilisateur
                        </label>
                        <div className='p-px rounded-lg bg-[conic-gradient(from_var(--border-angle),#7ff000,#141313,#7ff000)] animate-rotate-border'>
                            <input
                                {...register('username')}
                                id='username'
                                type='text'
                                placeholder="Nom d'utilisateur"
                                required
                                aria-required='true'
                                aria-invalid={errors.username ? 'true' : 'false'}
                                aria-describedby={errors.username ? 'username-error' : undefined}
                                className='w-full px-4 para text-[1.1rem] py-4.5 rounded-lg bg-[#141313] text-white placeholder-gray-400 focus:outline-none'
                            />
                        </div>
                        {errors.username && (
                            <p id='username-error' className='text-red-500 text-sm mt-1' role='alert'>
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='email' className='sr-only'>
                            Email
                        </label>
                        <div className='p-px rounded-lg bg-[conic-gradient(from_var(--border-angle),#7ff000,#141313,#7ff000)] animate-rotate-border'>
                            <input
                                {...register('email')}
                                id='email'
                                type='email'
                                placeholder='Email'
                                required
                                aria-required='true'
                                aria-invalid={errors.email ? 'true' : 'false'}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                                className='w-full px-4 para text-[1.1rem] py-4.5 rounded-lg bg-[#141313] text-white placeholder-gray-400 focus:outline-none'
                            />
                        </div>
                        {errors.email && (
                            <p id='email-error' className='text-red-500 text-sm mt-1' role='alert'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='password' className='sr-only'>
                            Mot de passe
                        </label>
                        <div className='relative p-px rounded-lg bg-[conic-gradient(from_var(--border-angle),#7ff000,#141313,#7ff000)] animate-rotate-border'>
                            <input
                                {...register('password')}
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Mot de passe'
                                required
                                aria-required='true'
                                aria-invalid={errors.password ? 'true' : 'false'}
                                aria-describedby={errors.password ? 'password-error' : undefined}
                                className='w-full px-4 para text-[1.1rem] py-4 rounded-lg bg-[#141313] text-white placeholder-gray-400 focus:outline-none'
                            />
                            <button
                                type='button'
                                onClick={() => togglePasswordVisibility()}
                                className='absolute right-3 top-1/2 -translate-y-1/2'
                                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                            >
                                {showPassword ? (
                                    <svg
                                        viewBox='0 0 48 48'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        className='w-6 h-6 text-white transition-colors'
                                    >
                                        <path d='M0 0h48v48H0z' fill='none'></path>
                                        <g>
                                            <circle cx='24' cy='24' r='4'></circle>
                                            <path d='M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z'></path>
                                        </g>
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox='0 0 48 48'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        className='w-6 h-6 text-white transition-colors'
                                    >
                                        <path d='M0 0h48v48H0z' fill='none'></path>
                                        <g>
                                            <path d='M24,14c7.072,0,12.741,6.584,15.201,9.992C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z'></path>
                                            <path d='M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4s-4-1.794-4-4C20,21.794,21.794,20,24,20z'></path>
                                        </g>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p id='password-error' className='text-red-500 text-sm mt-1' role='alert'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='confirmPassword' className='sr-only'>
                            Confirmer le mot de passe
                        </label>
                        <div className='relative p-px rounded-lg bg-[conic-gradient(from_var(--border-angle),#7ff000,#141313,#7ff000)] animate-rotate-border'>
                            <input
                                {...register('confirmPassword')}
                                id='confirmPassword'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Confirmer le mot de passe'
                                required
                                aria-required='true'
                                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                                aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
                                className='w-full px-4 para text-[1.1rem] py-4.5 rounded-lg bg-[#141313] text-white placeholder-gray-400 focus:outline-none'
                            />
                            <button
                                type='button'
                                onClick={() => togglePasswordVisibility()}
                                className='absolute right-3 top-1/2 -translate-y-1/2'
                                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                            >
                                {showPassword ? (
                                    <svg
                                        viewBox='0 0 48 48'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        className='w-6 h-6 text-white transition-colors'
                                    >
                                        <path d='M0 0h48v48H0z' fill='none'></path>
                                        <g>
                                            <circle cx='24' cy='24' r='4'></circle>
                                            <path d='M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z'></path>
                                        </g>
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox='0 0 48 48'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        className='w-6 h-6 text-white transition-colors'
                                    >
                                        <path d='M0 0h48v48H0z' fill='none'></path>
                                        <g>
                                            <path d='M24,14c7.072,0,12.741,6.584,15.201,9.992C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z'></path>
                                            <path d='M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4s-4-1.794-4-4C20,21.794,21.794,20,24,20z'></path>
                                        </g>
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p id='confirm-password-error' className='text-red-500 text-sm mt-1' role='alert'>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                        {errorMessage && (
                            <p className='text-red-500 text-sm mt-1' role='alert'>
                                {errorMessage}
                            </p>
                        )}
                    </div>
                    <div className='mt-15'>
                        <ButtonPerso
                            type='submit'
                            text="S'inscrire"
                            width='w-full'
                            height='h-12'
                            aria-label="S'inscrire"
                        />
                    </div>
                </form>
                <p className='text-center para text-sm mt-4 text-white'>
                    Déjà inscrit ?{' '}
                    <Link to='/login' className='text-[chartreuse] hover:underline ml-0.5'>
                        Connectez-vous ici
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
