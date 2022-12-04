import Navbar from "./components/Navbar";
import {
  Route,
  Routes,
  ScrollRestoration,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Moves from "./components/pages/Moves";
import Abilities from "./components/pages/Abilities";
import Pokemon from "./components/pages/Pokemon";
import Types from "./components/pages/Types";
import Move from "./components/pages/Move";
import ScrollToTop from "./utils/ScrollToTop";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <div className="pt-[50px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:pokemon" element={<Pokemon />} />
              <Route path="/move/" element={<Moves />} />
              <Route path="/move/:move" element={<Move />} />
              <Route path="/ability/:ability" element={<Abilities />} />
              <Route path="/type/:type" element={<Types />} />{" "}
            </Routes>{" "}
          </div>{" "}
        </BrowserRouter>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
