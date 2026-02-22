import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function SearchFood() {
  const { id } = useParams();
    const [food, setFood] = useState("");
  const [data, setData] = useState(null);
    
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
        console.log(filteredData)
      setData(filteredData);
    }
    if (food?.length > 1) {
      fetchData();
    }
  }, [food]);
  return (
    <div className="w-[80%] mx-auto mt-20">
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
        placeholder="Search here"
        onChange={(e) => setFood(e.target.value)}
      ></input>
    </div>
  );
}
