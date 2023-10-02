import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";
import { Animal } from "../types/APIResponses";

const useBreedList = (animal: Animal) => {
  const results = useQuery(["animal", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
};

export default useBreedList;
