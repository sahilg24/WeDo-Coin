import React from "react";
import WedoPageDemo from "./pages/WedoHomePage/WedoPageDemo";
import WedoAccountPageDemo from "./pages/WedoAccountPage/WedoAccountPageDemo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<WedoPageDemo />} />
                <Route path="/account" element={<WedoAccountPageDemo />} />
            </Routes>
        </Router>
    );
}

export default App;