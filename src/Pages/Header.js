import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

function Header() {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    // const [name, setName] = useState('');

    // useEffect(() => {
    //   const fetchName = async () => {
    //     try { 
    //       // Specify the document path
    //       const docRef = collection(db, 'Users').doc('documentId');
  
    //       // Fetch the document data
    //       const doc = await docRef.get();
  
    //       if (doc.exists) {
    //         const documentData = doc.data();
    //         setName(documentData.name); // Update the 'name' state with the fetched value
    //       } else {
    //         console.log('Document does not exist');
    //       }
    //     } catch (error) {
    //       console.error('Error fetching document:', error);
    //     }
    //   };
  
    //   fetchName();
    // }, []);

    const signOut = () => {
        auth.signOut()
        .then(() => {
            console.log("User has sign out");
          })
          .catch((error) => {
            console.error('Sign-out error:', error);
          });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            setUser(user);
            // navigate('/home');
          } else {
            setUser(null);
            navigate('/');
          }
        });
        return () => unsubscribe();
      }, [navigate]);

    return (
        <div>
            <nav className='navBar'>
                <div className='navLogo'>
                    <img src='/Images/Logo.svg' alt='logo' />
                </div>
                {user ? (
                <>
                    <div className='links'>
                        <ul>
                        <Link to='/home' className='navigation'>Home</Link>
                        <Link to='/about' className='navigation'>About</Link>
                        <Link to='/menu' className='navigation'>Menu</Link>
                        <Link to='/order' className='navigation'>Order</Link>
                        <Link to='/reserve' className='navigation'>Reserve</Link>
                        </ul>
                    </div>
                    <div className='logout'>
                        {/* <span>Welcome, {name}</span> */}
                        <span className='signoutLink' onClick={signOut}>Sign Out</span>
                    </div>
                </>
                ) : ( <></> )} 
            </nav>
        </div>
    )
}

export default Header