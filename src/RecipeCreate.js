import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
const initialFormState={name:"",
                            cuisine:"",
                            photo:"",
                            ingredients:"",
                            preparation:""
                           }

  
const [formData, setFormData] = useState({ ...initialFormState });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const {name,cuisine,photo,ingredients,preparation}=formData;
  
   // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) => {
        setFormData({
      ...formData,
      [target.name]: target.value
    });
  };
  
  const handleFormSubmit = (event) => {
  event.preventDefault();
    createRecipe({name,cuisine,photo,ingredients,preparation})
   setFormData({ ...initialFormState })
  }
  
  // TODO: Add the required input and textarea form elements.
 
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody >
          <tr>
            {/*Name*/}
            {/*style={{"width":"100%"}}*/}
            <td>
            <label htmlFor="name" ></label>
          <input id="name" name="name" placeholder="Name" rows={1}  required={true}  onChange={handleChange} value={formData.name} 
              />
            </td>
             {/*Cuisine*/}
            <td>
            <label htmlFor="cuisine" ></label>
          <input id="cuisine" name="cuisine" placeholder="Cuisine" rows={1} required={true}  onChange={handleChange} value={formData.cuisine} 
              />
            </td>
              {/*Photo*/}
             <td>
            <label htmlFor="photo" ></label>
          <input id="photo" name="photo" type="url" placeholder="URL" rows={1} required={true}  onChange={handleChange} value={formData.photo} 
              />
            </td>
              {/*Ingredients*/}
             <td>
            <label htmlFor="ingredients" ></label>
          <textarea id="ingredients" name="ingredients" placeholder="Ingredients" rows={2} required={true}  onChange={handleChange} value={formData.ingredients} 
              />
            </td>
              {/*Preparation*/}
             <td>
            <label htmlFor="preparation" ></label>
          <textarea id="preparation" name="preparation" placeholder="Preparations" rows={2} required={true}  onChange={handleChange} value={formData.preparation} 
              />
            </td>
            {/*Button*/}
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
