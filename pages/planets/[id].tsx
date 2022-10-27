import Section from "../../components/Planet/Section";
import SectionList from "../../components/Planet/SectionList";
import { IPlanet } from "../../interfaces/Planet";

interface IPlanetDetails {
  planet: IPlanet
}

const PlanetDetails = ({ planet }: IPlanetDetails) => {

  return <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Planet Information</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Planet details</p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <Section tittle="Name" value={planet.name} />
        <Section tittle="Gravity" value={planet.gravity} />
        <Section tittle="Population" value={planet.population} />
        <Section tittle="Terrain" value={planet.terrain} />
        <Section tittle="Climate" value={planet.climate} />
        <Section tittle="Surface Water" value={planet.surface_water} />
        <SectionList data={planet.films} tittle="Films"/> 
        <SectionList data={planet.residents} tittle="Residence"/> 
      </dl>
    </div>
  </div>

}
export default PlanetDetails

export const getServerSideProps = async ({params}:any) => {  
  const id = params.id
  // fetching data from api.
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);
  let planet = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      planet
    }
  }
}