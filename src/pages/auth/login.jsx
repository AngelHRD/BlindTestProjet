import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='flex items-center justify-center lg:h-[calc(100vh-72px)]'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center text-white mb-8'>Connexion</h2>
                <form
                    // onSubmit={handleSubmit}
                    className='space-y-6'
                >
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            // value={values.email}
                            // onChange={handleChange}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Mot de passe'
                            // value={values.password}
                            // onChange={handleChange}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out'
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
