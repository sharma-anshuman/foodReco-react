import React, { useState } from "react";
import "./styles.css";

var db = {
  Indian: [
    {
      name: "Pav-Bhaji",
      description:
        "Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread"
    },
    {
      name: "Dosa",
      description:
        "A dosa is a thin batter-based pancake originating from South India, made from a fermented batter predominantly consisting of lentils and rice"
    },
    {
      name: "Samosa",
      description:
        "The samosas are a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, lentils"
    }
  ],
  Italian: [
    {
      name: "Bruschetta",
      description:
        "An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix"
    },
    {
      name: "Tiramisu",
      description:
        "The delightful tiramisu recipe with sponge fingers soaked in coffee, layered around and smeared with a creamy mascarpone mixture"
    },
    {
      name: "Panettone",
      description:
        "Italian sweet bread, panettone is a perfect Christmas or New year's dessert with the goodness of egg, flour, sugar, raisins"
    }
  ],
  Mexican: [
    {
      name: "Chilaquiles",
      description:
        "dish features lightly fried corn tortillas cut into quarters and topped with green or red salsa"
    },
    {
      name: "Pozole",
      description:
        "Made from hominy corn with plenty of herbs and spices, the dish is traditionally stewed for hours, often overnight"
    },
    {
      name: "Tostadas",
      description:
        "Popular toppings include frijoles (refried beans), cheese, cooked meat, seafood and ceviche."
    }
  ]
};

export default function App() {
  var [valueFood, setValue] = useState("Indian");

  function clickHandler(cusine) {
    setValue(cusine);
    console.log(cusine, "selected!!");
  }

  return (
    <div className="App">
      <h1>🍲 Good Food, Good Life!!</h1>
      <p>Checkout some of the yummiest foods!!</p>
      <p>Select a Region to get started</p>
      {Object.keys(db).map(function (food_style) {
        return (
          <button onClick={() => clickHandler(food_style)}>{food_style}</button>
        );
      })}

      {Object.keys(db[valueFood]).map(function (val) {
        return (
          <div className="dish">
            <h3 className="dish-heading">{db[valueFood][val].name}</h3>
            <hr />
            <p className="dish-description">{db[valueFood][val].description}</p>
          </div>
        );
      })}
    </div>
  );
}
