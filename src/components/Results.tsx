import Pet from "./Pet";
import { Pet as PetType } from "../types/APIResponses";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets?.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
