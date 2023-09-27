import { useState, useEffect } from "react";

const localCache = {};
const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      try {
        const data = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = await data.json();
        const breeds = json.breeds || [];

        localCache[animal] = breeds;
        setBreedList(breeds);
        setStatus("loaded");
      } catch (error) {
        setStatus("unloaded");
      }
    }
  }, [animal]);
  return [breedList, status];
};

export default useBreedList;
