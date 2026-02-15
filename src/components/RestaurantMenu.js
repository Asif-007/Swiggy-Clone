import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      setData(data);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
      <h2>{id}</h2>
    </div>
  );
}
