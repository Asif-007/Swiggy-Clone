import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import { BrowserRouter, Route, Routes } from "react-router";
import RestaurantMenu from './components/RestaurantMenu';
import SearchFood from "./components/SearchFood";
function App() {
    return (
        <>
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>} ></Route>
                    <Route path='/restaurant' element={<Restaurant></Restaurant>} ></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
                    <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


createRoot(document.getElementById('root')).render(<App />);