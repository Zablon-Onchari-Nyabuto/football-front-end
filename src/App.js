import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar";
import Homepage from './components/Homepage';
import Forum from './components/Forum';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`football.up.railway.app/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <LoginForm onLogin={user} />;

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path={'/loginform'} element={<LoginForm setUser={setUser} onlogin={user} />} />
          <Route path={'/signup'} element={<SignUpForm setUser={setUser} />} />
          <Route path={'/'} element={<Homepage user={user} />} />
          <Route path={"/forum"} element={<Forum />} />
          <Route path={"/aboutus"} element={<AboutUs />} />
          <Route path={"/contactus"} element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

