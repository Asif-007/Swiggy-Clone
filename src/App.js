import { createRoot } from "react-dom/client";
import React from 'react';
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
function App() {
    return (
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
        </>
    )
}


createRoot(document.getElementById('root')).render(<App />);