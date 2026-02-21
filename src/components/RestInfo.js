export default function RestInfo({ restData }) {
  return (
    <>
      <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
          <p className="text-xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>
          <p>
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>
          <span className="text-green-400">
            {restData?.ratings?.aggregatedRating?.rating}
          </span>
          <span>
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative">
          <img
            className="w-full rounded-3xl h-36 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData?.imageId
            }
          ></img>
          <button className="absolute bottom-1 left-20 text-green-600 shadow border border-white rounded-xl px-4 py-2 bg-white">
            ADD
          </button>
        </div>
      </div>
      <hr className="mb-6 mt-2"></hr>
    </>
  );
}
