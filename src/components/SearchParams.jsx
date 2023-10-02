import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchQuery } from "../api/petApiService";

import Results from "./Results";
import useBreedList from "../hooks/useBreedList";
import { all } from "../store/searchParamsSlice";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const dispatch = useDispatch();

  const adoptedPet = useSelector((state) => state.adoptedPet?.value);
  const searchParams = useSelector((state) => state?.searchParams?.value);

  const { data } = useSearchQuery(searchParams);
  const pets = data ?? [];

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };

    dispatch(all(obj));
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            name="location"
            type="text"
            id="location"
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select name="breed" disabled={breeds.length === 0} id="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Sumbit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
