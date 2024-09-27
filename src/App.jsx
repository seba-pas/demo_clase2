import { useState, useEffect } from "react";
import instance from "./api/setupAxios";
import { Card } from "react-bootstrap";

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

  return (
    <div className="bg-dark h-100 w-100 justify-content-center align-items-center d-flex flex-column">
      {data &&
        data?.map((element) => {
          return (
            <div key={element.id} className='my-3'>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.image} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default App;
