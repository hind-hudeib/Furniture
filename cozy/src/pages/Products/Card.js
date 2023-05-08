import products from "../../products.json";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles files/style products/card.css";
import { DataCardContext } from "./Context";

function Card(props) {
  const navigate = useNavigate("/");
  const [data, setData] = useState(products.products);
  const [filteredData, setFilteredData] = useState(products.products);

  const checked = props.checked;
  useEffect(() => {
    if (checked[0] !== undefined) {
      const filteredData = data.filter((element) =>
        checked.includes(element.category)
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [checked]);


  const { dataCard,updateValue } = useContext(DataCardContext)
  function handlecard(index) {
    updateValue(filteredData[index])
    navigate("/prodect");
  }

  return (
    <>
      <div className="conCard">
        {filteredData.map((element, index) => {
          return (
            <>
              <div
                className="cardd"
                onClick={() => {
                  handlecard(index);
                }}
              >
                <img src={element.img} />
                <h3>{element.name}</h3>
                <p>{element.price} JD</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
