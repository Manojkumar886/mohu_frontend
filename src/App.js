import { Listingpage } from "./ListingPage";
import { Homepage } from "./Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>   
      <BrowserRouter>
          <Homepage/>
          <Routes>
            <Route path="listall" exact element={<Listingpage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
