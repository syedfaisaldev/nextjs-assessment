import { createContext, useState } from "react";
import { IPeople } from "../interfaces/Peoples";
import { IPlanet } from "../interfaces/Planet";

 interface IGlobalContext {
  favPeople?: IPeople[];
  addFavPeoples?: (value: IPeople) => void ;
  addFavPlanets?: (value: IPlanet) => void;
  favPlanet?:IPlanet[]
};
  // global States for Favorite People and Planets
export const GlobalContext = createContext<IGlobalContext>({});

export const GlobalProvider = ({ children }: any) => {
  const [favPeople, setFavPeople] = useState<IPeople[]>([]);
  const [favPlanet, setFavPlanet] = useState<IPlanet[]>([]);

  const addFavPeoples = (people: IPeople) => {
    const alreadyExist = favPeople.some((item) => item.url === people.url);
    if (!alreadyExist) {
      setFavPeople([...favPeople, people]);
    } else {
      setFavPeople(favPeople.filter(p => p.url !== people.url));
    }
  }
  const addFavPlanets = (planet: IPlanet) => {
    const alreadyExist = favPlanet.some((item) => item.url === planet.url);
    if (!alreadyExist) {
      setFavPlanet([...favPlanet, planet]);
    } else {
      setFavPlanet(favPlanet.filter(p => p.url !== planet.url));
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        favPeople: favPeople,
        addFavPeoples: addFavPeoples,
        favPlanet:favPlanet,
        addFavPlanets:addFavPlanets

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
