import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photourl.value;
        // console.log(name, password, email, photo)

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add atleast two numbers')
            return;
        }
        else if (password.length < 6) {
            setError('Please add atleast six characters in your password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setError('');
                setSuccess('User account has been created successfully');
                navigate('/');
                updateUserData(loggedUser, name, photo)
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('Username updated');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />

                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="url" placeholder="photourl" name="photourl" className="input input-bordered" required />

                            </div>
                            <p className='mb-4 text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='mb-4 ml-8'>
                            <Link to="/login" className='label-text-alt link link-hover text-blue-400'>Already have an account? Please Login</Link>
                        </p>
                        <p className='mb-4 ml-8 text-green-600'>{success}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;