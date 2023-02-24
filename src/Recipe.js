import React, { useState } from "react";

function Recipe ({name,cuisine,photo,ingredients,preparation,deleteRecipe}){
  return (<tr>
      <td ><p>{name}</p></td>
    <td ><p>{cuisine}</p></td>
    <td ><p><img src={photo} /></p></td>
    <td className="content_td"><p>{ingredients}</p></td>
    <td className="content_td"><p>{preparation}</p></td>
      <td><button name="delete" onClick={deleteRecipe}>Delete</button></td></tr>);
}

export default Recipe