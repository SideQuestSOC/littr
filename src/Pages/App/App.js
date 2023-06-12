import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Components
import LandingPage from '../LandingPage/LandingPage';
import CardDisplay from '../CardDisplay/CardDisplay';
import CreateCardForm from '../CreateCardForm/CreateCardForm';
import SignInSignUp from '../SignInSignUp/SignInSignUp';

function App() {
return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
            <Route path="/src/pages/landingpage" element={<LandingPage />}/>
            <Route path="/src/pages/carddisplay" element={<CardDisplay />}/>
            <Route path="/src/pages/createpostform" element={<CreateCardForm />}/>
            <Route path="/src/pages/signsignup" element={<SignInSignUp />}/>
        </Routes>
    </BrowserRouter>
)
};

export default App;