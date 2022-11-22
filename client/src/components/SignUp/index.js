import React, { useState } from 'react';
import Auth from '../../utils/auth.js';

const SignUp = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '', signUpCode: '' });

    let error = false

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(formState);
        try {
            const data = await fetch("http://localhost:3001/api/users/create", {
                method: 'POST',
                body: JSON.stringify(formState),
                headers: { "Content-Type": "application/json" }
            })

            Auth.login(data.accessToken, props.setCurrentPage);
        } catch (e) {
            error = true;
        }
    };

    return (
        <div className='card'>
            <h4 className='card-header' style={{ fontWeight: 100 }}>Login</h4>
            <form onSubmit={handleFormSubmit}>
                <input
                    className='form-input'
                    placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    className='form-input'
                    placeholder='password'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <br />
                <input
                    className='form-input'
                    placeholder='falcon code'
                    name='signUpCode'
                    type='password'
                    id='signUpCode'
                    value={formState.signUpCode}
                    onChange={handleChange}
                />
                <button className='btn d-block w-100' type='submit'>
                    Submit
                </button>
            </form>
            {error && <div>Login failed</div>}
        </div>
    );
};

export default SignUp;