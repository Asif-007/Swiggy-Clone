import { createRoot } from "react-dom/client";
import React from 'react';
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
function App() {
    return (
        <>
            <Header></Header>
            <FoodOption></FoodOption>
        </>
    )
}


createRoot(document.getElementById('root')).render(<App />);