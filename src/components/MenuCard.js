import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ values, selected }) {
  const [isOpen, setIsOpen] = useState(true);
  if ("categories" in values) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{values?.title}</p>
        <div>
          {values?.categories?.map((items) => (
            <MenuCard key={items?.title} values={items}></MenuCard>
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div>
        
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{values?.title}</p>
            <button
              className="text-5xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "⌄"}
            </button>
          </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
      </div>
    );
  }

  if (selected === 'veg') {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{values?.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "˯"}
          </button>
        </div>
        <div>
          {values?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            .map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }
  if (selected === "nonveg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{values?.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "˯"}
          </button>
        </div>
        <div>
          {values?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            .map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4">{values?.title}</p>
        <button
          className="text-5xl font-bold mr-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "^" : "˯"}
        </button>
      </div>
      <div>
        {values?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          ></RestInfo>
        ))}
      </div>
      <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </div>
  );
}
