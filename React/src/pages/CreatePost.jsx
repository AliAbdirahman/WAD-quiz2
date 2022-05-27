import React, {useState} from "react";

const CreatePost = () => {
  const [name, setName] = useState(null);
  const [alias, setAlias] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "alias"){
        setAlias(value);
    }
}
const handleSubmit  = () => {
  console.log(name, alias);
  var jsonData = {
    "name": name,
    "alias": alias
  }
  console.log(jsonData)
  const response = fetch('http://localhost:8000/heroes/?format=json', {  
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData) 
    })
  }


  return (
    <div>
      <nav class="post">
            <div className="hero">
                <h2>Create Post</h2>
            </div>
        </nav>
        <div className="post">
              <div className="name">
                  <label className="hero_label" for="name">Name </label>
                  <input className="hero_input" type="text" id="name" placeholder="Name" onChange = {(e) => handleInputChange(e)}/>
              </div>
              <div className="alias">
                  <label className="hero_label" for="alias">Alias </label>
                  <input className="hero_input" type="text" name="" id="alias" placeholder="Alias" onChange = {(e) => handleInputChange(e)}/>
              </div>
          </div>
          <div className="button"><button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button></div>
    </div>
  );
}

export default CreatePost;