import { useEffect, useState } from "react";
import RestCard from "./RestCard";
export default function Restaurant() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "http://cors-anywhere.herokuapp.com/";
      const swiggyApi =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
      const response = await fetch(proxyServer + swiggyApi);
      const data = await response.json();

      setRestData(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
    }
    fetchData();
  }, []);
    //   console.log(restData);
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                restData.map((restInfo) => <RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }
        </div>
    )
}
