import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
  let { id } = useParams();
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
      setData(filteredData);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="w-[80%] mx-auto">
      {
        data?.map((values)=><MenuCard key={values?.card?.card?.title} values={values?.card?.card}></MenuCard>)
      }
      
    </div>
  );
}
