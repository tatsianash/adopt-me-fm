import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./contexts/AdoptedPetContext";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
