import React, {useState, useEffect} from 'react'
import { auth, db, provider } from '../firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { doc, setDoc, collection } from 'firebase/firestore'
import './SignUp.css'

function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()       
        await createUserWithEmailAndPassword(auth, email, pass)
        
        const userCred = {
            name, 
            email,
            pass
        }

        const userRef = doc(collection(db, 'Users'));
            await setDoc(userRef, userCred)
                .then(() => {
                    console.log("Account has been created!")
                })
                .catch((error) => {
                    console.log("error has occured!", error);
                })
        navigate('/home')
    }

    const Login = async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            console.error('Google login error:', error);
          });
          navigate('/home')
    }

    return (

            <div className='SubContainer'>
                <h2 className='signHead'>Welcome to Little Lemon!</h2>
                <div className='formContainer'>
                    <h3 className='head2'>Register your account</h3>
                    <form onSubmit={signIn} className='signForm'>
                    <div className='field'>
                        <label htmlFor='name'>Enter Name</label>
                        <input 
                        type='text' 
                        id='name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='email'>Enter Email</label>
                        <input 
                        type='email' 
                        id='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='pass'>Enter Password</label>
                        <input 
                        type='password' 
                        id='pass' 
                        required min={8}
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)}/>
                        <div className='forgetPass'>
                            <a href='#'>Forget Password?</a>
                        </div>
                    </div>
                    <div className='createBtn'>
                        <button type='submit' className='submitBtn'>Create Account</button>
                    </div>
                    </form>

                    <div className='divider'></div>

                    <div className='googleLogin'>
                        <button onClick={Login}>Login With Google</button>
                    </div>
                    <div className='Login'>
                        <p>Need to Login? <Link to="/login">Login</Link></p>
                    </div>
                    <div className='guest'>
                        <button className='guestBtn' onClick={() => navigate('/home')}>Join as Guest</button>
                    </div>
                </div>
            </div>
    )
}

export default SignUp