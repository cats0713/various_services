import React from "react";

function FoodNameDisplay( {food} ){
  return <div>i love {food}</div>
}

function Food(){
  return(
    <div>
      <h1>FOODLIST</h1>
      <FoodNameDisplay food="라면"/>
      <FoodNameDisplay food="김밥"/>
      <FoodNameDisplay food="오뎅탕"/>
      <FoodNameDisplay food="쫄면"/>
    </div>
  );
}

export default Food;