import { readCars, addCars } from "./scripts/fireStore";
import CarsPage from "./pages/CarsPage";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";


export default function App() {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0)

  useEffect (() => {
    fetchData("formula-1-cars")
  }, []);

  async function fetchData(collectionName){
    const data = await readCars(collectionName).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    setData(data);
    setStatus(1);
  }
  function onFail() {
    setStatus(2)
  }

  return (
    <div className="App">
      <h1>
        Hello World!
      </h1>
      <Form />
      {status === 0 && <p>Loading...⏱️</p>}
      {status === 1 && <CarsPage data={data} />}
      {status === 2 && <p>Error...❌</p>}
    </div>
  );
}
