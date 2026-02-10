import imageGridCards from "../utils/FoodData";
import FoodCard from "./FoodCard";
export default function FoodOption() {
    return (
        <>
            <div className="container mx-auto w-[80%] flex flex-wrap">
                {
                    imageGridCards.map((foodData)=>{return <FoodCard key={foodData.id} foodData={foodData}></FoodCard>})
                }
            </div>
        </>
    )
}