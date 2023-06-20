import './App.css';
// import react dependencies
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Supabase functions
import { isSessionSignedIn } from '../../Models/client';
// import Components
import LandingPage from '../LandingPage/LandingPage';
import CardDisplay from '../CardDisplay/CardDisplay';
import CreateCardForm from '../CreateCardForm/CreateCardForm';
import SignInSignUp from '../SignInSignUp/SignInSignUp';

function App() {
const [isSignedIn, setIsSignedIn ] = useState(false);
const [cardData, setCardData] = useState([]);

// Check if user is logged in
useEffect(() => {
  async function updateSignInState() {
    setIsSignedIn(await isSessionSignedIn());
  }
  updateSignInState();
}, []);

return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>}/>
            <Route path="/src/pages/landingpage" element={<LandingPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>}/>
            <Route path="/src/pages/carddisplay" element={<CardDisplay isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setCardData={setCardData} cardData={cardData} />}/>
            <Route path="/src/pages/createpostform" element={<CreateCardForm isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setCardData={setCardData} />}/>
            <Route path="/src/pages/signsignup" element={<SignInSignUp isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}/>
        </Routes>
    </BrowserRouter>
)
};

export default App;