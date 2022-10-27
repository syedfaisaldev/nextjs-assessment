import Section from "../../components/Planet/Section";
import SectionList from "../../components/Planet/SectionList";
import { IPeople } from "../../interfaces/Peoples";

interface IPeopleDetails {
  people: IPeople
}

const PeopleDetails = ({ people }: IPeopleDetails) => {

  return <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">People Information</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">People details</p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <Section tittle="Name" value={people.name} />
        <Section tittle="Eye Color" value={people.eye_color} />
        <Section tittle="Gender" value={people.gender} />
        <Section tittle="Skin Color" value={people.skin_color} />
        <Section tittle="Hair Color" value={people.hair_color} />
        <Section tittle="Birth Year" value={people.birth_year} />
        <Section tittle="Mass" value={people.mass} />
        <Section tittle="Height" value={people.height} />
        <SectionList data={people.films} tittle="Films" />
        <SectionList data={people.vehicles} tittle="Vehicles" />
      </dl>
    </div>
  </div>

}
export default PeopleDetails

export const getServerSideProps = async ({ params }: any) => {
  const id = params.id
  // fetching data from api.
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  let people = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      people
    }
  }
}