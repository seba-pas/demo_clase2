import { useState, useEffect } from "react";
import instance from '../api/setupAxios'
import { Card } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data } = await instance.get("/character");
      setData(data?.results);
      setLoading(false);
    } catch (error) {
      console.error(error, "ha ocurrido un error");
    }
  }
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      getData();
    }, 2000);
    
  }, []);

  return (
    <div className="bg-dark h-100 w-100 justify-content-center align-items-center d-flex flex-column">
      {data && !loading ? (
        data?.map((element) => {
          return (
            <div key={element.id} className="my-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.image} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })
      ) : (
        <div className="bg-dark h-100 w-100 justify-content-center align-items-center d-flex flex-column">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
    </div>
  );
}

export default Cards;
