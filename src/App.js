import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Routes from './Components/Routes/Routes';
import Footer from './Components/Footer/Footer';
import { auth } from './Firebase/FirebaseConfig';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authState, setAuthState] = useState(null);
  useEffect(() => {
    setAuthState(auth.onAuthStateChanged(userAuth => {
      if(!userAuth){
        return
      }
      setCurrentUser(userAuth)
      return () => {
        setCurrentUser(null)
      }
    }))

  }, []);
  return (
    <div className="App">
      <Header currentUser />
      <Routes currentUser />
      <Footer />
    </div>
  );
}

export default App;
