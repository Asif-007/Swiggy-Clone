import imageGridCards from "../utils/FoodData";
import FoodCard from "./FoodCard";
export default function FoodOption() {
  const { info } = imageGridCards;
  return (
    <>
      <div className="container mx-auto w-[80%] flex flex-wrap mt-20 gap-5">
        {info.map((value) => {
          return <FoodCard key={value.id} foodData={value}></FoodCard>;
        })}
      </div>
    </>
  );
}
