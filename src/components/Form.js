import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [formData, setFormData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }


  function handleOnSubmit(event){
    event.preventDefault();
    let nameData = {firstName: firstName, lastName: lastName}
    setFormData([...formData, nameData])
  }

  const listOfSubmissions = formData.map((data, index)=>{
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    ); 
    
    
})

  return (
    <div>
    <form onSubmit={(e)=>handleOnSubmit(e)}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} name="firstName"/>
      <input type="text" onChange={handleLastNameChange} value={lastName} name="lastName"/>
      <button type="submit">Submit</button>
    </form>
     <h3>Submissions</h3>
     {listOfSubmissions}
     </div>
  );
}

export default Form;
