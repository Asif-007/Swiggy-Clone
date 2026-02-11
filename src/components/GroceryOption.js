import groceryData from "../utils/Grocery";
import GroceryCard from "./GroceryCard";
function GroceryOption() {
    const { info } = groceryData;
  return (
      <div className="mt-20 w-[80%] container mx-auto">
          <h1 className="font-bold text-2xl">Shop groceries on Instamart</h1>
      <div className="container mx-auto w-[80%] flex flex-wrap mt-20 gap-5">
        {info.map((value) => {
          return <GroceryCard key={value.id} foodData={value}></GroceryCard>;
        })}
      </div>
    </div>
  );
}

export default GroceryOption;