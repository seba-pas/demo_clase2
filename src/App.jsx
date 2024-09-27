import { useState, useEffect } from "react";
import instance from "./api/setupAxios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const { data } = await instance.get("/character");
      setData(data.results);
    } catch (error) {
      console.error(error, "ha ocurrido un error");
    }
  }
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return <></>;
}

export default App;
