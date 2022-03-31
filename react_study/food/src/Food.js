import React from "react";
import foodlist from './foodlist.json';
import PropTypes from "prop-types";

function Food() {
  let FoodNameDisplay = ({name,img,rating}) => {
    return (<div>
      <h1>i love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src = {img} alt = {name}/>
    </div>);
  }
  FoodNameDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number
  };
  const readerFood = dish =>{
    console.log(dish.id);
    return <FoodNameDisplay  name={dish.name} key={dish.id} img={dish.img} rating={dish.rating} />;
  }

  return (<div>
    {foodlist.map(dish => readerFood(dish))}
  </div>);
}




export default Food;