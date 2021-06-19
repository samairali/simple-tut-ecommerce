import React from 'react';
import './style.scss'
import Button from '../../Components/Forms/Button/Button';
import { signInWithGoogle } from './../../Firebase/FirebaseConfig';
import ResultCalculator from './../../Components/CalculatorSlider/ResultCalculator';


const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <div className="signin-main-area">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <Button onClick={signInWithGoogle}>
                        Signin With Google
                    </Button>
                </form>
            </div>
            <ResultCalculator />
        </>
    );
}

export default Login;

