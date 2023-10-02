import { useGetBreedsQuery } from "../api/petApiService";

const useBreedList = (animal) => {
  // const results = useQuery(["breeds", animal], fetchBreedList);

  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loaded"];
  }

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
};

export default useBreedList;
