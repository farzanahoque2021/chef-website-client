import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
                setError('');
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/');
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithubSignIn = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <p className='mb-4 text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <p className='mb-4 ml-8'>
                            <Link to="/register" className='label-text-alt link link-hover text-blue-400'>New to Chef Heaven? Please Register</Link>
                        </p>
                        <div className='flex flex-col p-4'><button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-4">Sign in with google</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline btn-info mb-4">Sign in with github</button></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;