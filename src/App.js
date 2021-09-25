import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Navbar />
            <div className="container pt-3">
                <Home />
            </div>
        </>
    );
}

export default App;
