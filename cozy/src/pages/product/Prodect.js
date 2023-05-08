import React, { useEffect, useState } from "react";
import "./Prodect.css";
import { useContext } from "react";
import { DataCardContext } from "../Products/Context";
import { CartContext } from "../contexts/CartContext";

const oneobj1 = {
  id: 1,
  category: "chairs",
  img: "https://rubiktheme.com/demo/rb_davici_demo/24-small_default/design-living-room-sofa.jpg",
  name: "Design Living Room Sofa",
  description: "A comfortable and stylish sofa for your living room",
  price: 23.9,
  colors: ["Blue", "Gray", "Beige"],
  dimensions: {
    width: 84,
    height: 35,
    depth: 38,
  },
  materials: ["Fabric", "Foam", "Wood"],
  reviews: [
    {
      username: "JaneDoe",
      rating: 4,
      comment: "This sofa is so comfortable! I love it.",
    },
    {
      username: "JohnSmith",
      rating: 5,
      comment: "I couldn't be happier with this purchase.",
    },
  ],
  avgRating: 4.5,
};
const Prodect = () => {
  const { dataCard, updateValue } = useContext(DataCardContext);

  const [oneobj, setOneobj] = useState(oneobj1);
  useEffect( 
    ()=>{if (dataCard) {
    setOneobj(dataCard);
  }},[dataCard])


  const { addToCart } = useContext(CartContext)
  // const [addToCart, addToCart] = useState(dataCard);
  function handleAddCart(e) {
    addToCart()
    e.preventDefault();
    console.log(oneobj);
    // let numItem = e.target.numItem.value;
    // setdataCart();
  }

  return (
    <div>
      <section className="prodect0">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 col-md-6 ">
              {/* <h2>hallo</h2> */}

              <p>
                Welcome to the cozy store, where you can shop for your home
                furniture such as tables, chairs, carpets and complete furniture
                to create the best atmosphere for you and your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="prodect">
        <div className="contener">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ height: "674px", width: "694px" }}
                src={oneobj.img}
                title="img"
              />
            </div>
            <div className="col-md-6">
              <h2 style={{ fontWeight: "bold" }}>{oneobj.name}</h2>
              <h3 style={{ marginTop: "19px" }}>
                {oneobj.price}
                <span style={{ marginLeft: "8px" }}> JD</span>
              </h3>

              <table className="table1">
                <tbody>
                  <tr>
                    <td>Category : </td>
                    <td id="td2">{oneobj.category}</td>
                  </tr>
                  {/* <tr>
        <td>Reference :  </td>
        <td id="td2">demo_6</td>
       
      </tr> */}
                  <tr>
                    <td>Average Rating :</td>
                    <td id="td2">{oneobj.avgRating}</td>
                  </tr>
                </tbody>
              </table>

              <h4 style={{ fontWeight: "bold", color: "#8d8d98" }}>
                {oneobj.description}
              </h4>

              <div id="Dimenosin">
                <h4>Dimenosin:</h4>{" "}
              </div>
              <div id="button-8">
                <button class="button-8" role="button">
                  height: {oneobj.dimensions.height}cm / Width:{" "}
                  {oneobj.dimensions.width}cm / depth: {oneobj.dimensions.depth}
                  cm
                </button>

                <hr class="new2" />
              </div>
              <form onSubmit={handleAddCart}className="product">
                {/* <input
                  style={{ fontWeight: "bold", textAlign: "444px" }}
                  type="number"
                  name="numItem"
                  value={dataCart.numItem}
                  placeholder="0"
                  min="0"
                  max="50"
                /> */}
                <button class="button-80" role="button" type="submit">
                  ADD TO CART
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Prodect;
