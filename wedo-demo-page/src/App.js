import React from "react";
import WedoPageDemo from "./pages/WedoHomePage/WedoPageDemo";
import WedoAccountPageDemo from "./pages/WedoAccountPage/WedoAccountPageDemo";
import WedoWalletPageDemo from "./pages/WedoWalletPage/WedoWalletPageDemo";
import WedoProfilePageDemo from "./pages/WedoProfilePage/WedoProfilePageDemo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<WedoPageDemo />} />
                <Route path="/account" element={<WedoAccountPageDemo />} />
                <Route path="/account/wallet" element={<WedoWalletPageDemo />} />
                <Route path="/account/profile" element={<WedoProfilePageDemo />} />
            </Routes>
        </Router>
    );
}

export default App;