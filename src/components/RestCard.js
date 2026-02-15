import { Link } from "react-router";
export default function RestCard({ restInfo }) {
  return (
    <Link to={'/city/delhi/'+restInfo?.info?.id}>
      <div className="w-70 transition transform duration-200 hover:scale-95">
        <img
          className="w-70 rounded-xl h-45 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
        ></img>
        <div className="w-[95%] mx-auto mt-3">
          <div className="font-bold text-xl">{restInfo?.info?.name}</div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-6 h-6"
            >
              {/* Green Circle */}
              <circle cx="50" cy="50" r="50" className="fill-green-500" />

              {/* White Star */}
              <polygon
                points="50,15 61,38 85,38 66,54 73,78 50,64 27,78 34,54 15,38 39,38"
                className="fill-white"
              />
            </svg>
            <span className="text-lg">{restInfo?.info?.avgRating}</span>
            <span className="text-lg">{restInfo?.info?.sla?.slaString}</span>
          </div>
          <div className="text-gray-600 text-xl mt-1 truncate">
            {restInfo?.info?.cuisines.join(" ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
