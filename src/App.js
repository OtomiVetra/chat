import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import './App.css'
import Loader from './components/Loader';
import { Context } from './index'
import { useAuthState } from 'react-firebase-hooks/auth';



function App() {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }


  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
