export default function GroceryCard({ foodData }) {
  return (
    <>
      <div className="flex flex-col">
        <a href={foodData?.action?.link}>
          <img
            className="w-40 h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              foodData?.imageId
            }
          ></img>
        </a>
        <h2 className="text-center text-[rgb(2,6,12,0.75)] font-bold">
          {foodData?.action?.text}
        </h2>
      </div>
    </>
  );
}

// rgba(2, 6, 12, 0.75)
