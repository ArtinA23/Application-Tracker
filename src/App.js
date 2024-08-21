import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Dashboard />
        </div>
    );
}

export default App;