import { IPeople } from "../interfaces/Peoples";
import { IPlanet } from "../interfaces/Planet";

export const getIdFromUrl = (url: string) => {
  return url.split('api')[2]
}

export const favoriteItems = (url: string, matchedData: IPlanet[] | IPeople[]) => {
  const matchedFav = matchedData.some((item) => item.url === url);
  return matchedFav
}