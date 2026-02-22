import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const api = proxyServer + swiggyAPI;
      const response = await fetch(api);
      const data = await response.json();
      const tempData =
        data?.data?.cards.at(-1)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredData = tempData.filter(
        (items) => "title" in items?.card?.card,
      );
      setData(filteredData);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <div className="w-[80%] mx-auto mt-20 mb-20">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center bg-gray-200 text-2xl rounded-4xl  py-2">
            Search for dishes
          </p>
        </Link>
      </div>

      <div className="w-[80%] mx-auto mt-20 mb-20">
        <button
          className={`text-2xl py-2 px-4 mr-4  border rounded-2xl ${selected === "veg" ? "bg-green-600" : "bg-gray-300"}`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={`text-2xl py-2 px-4  border rounded-2xl ${selected === "nonveg" ? "bg-red-600" : "bg-gray-300"}`}
          onClick={() => {
            setSelected(selected === "nonveg" ? null : "nonveg");
          }}
        >
          Non Veg
        </button>
      </div>
      <div className="w-[80%] mx-auto">
        {data?.map((values) => (
          <MenuCard
            key={values?.card?.card?.title}
            values={values?.card?.card}
            selected={selected}
          ></MenuCard>
        ))}
      </div>
    </div>
  );
}
