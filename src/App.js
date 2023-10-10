import { Homepage } from "./Navigation";
import { RegistrationForm } from "./ResgitrationForm";
import Simple from "./Sample";
import { Operator } from "./TernaryOperator";
import { Hook1, Hook11 } from "./UsingUseState";


import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
          <RegistrationForm />
          <Routes>
            <Route path="ternary1" exact element={<Operator/>} />
            <Route path="usestate1" exact element={<Hook1/>} />
          </Routes>
      </BrowserRouter>
      
      {/* <Operator/> */}
      {/* <h1>Welcome</h1>
      <h1>React JS</h1>
      <Hook1/>
      <Hook11/> */}
    </>
  );
}

export default App;
