import React, {useState} from "react";

const CreatePost = () => {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');

  const handleInputChange = (chng) => {
    const {id , value} = chng.target;
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
                  <input className="hero_input" type="text" id="name" placeholder="Name" onChange = {(chng) => handleInputChange(chng)}/>
              </div>
              <div className="alias">
                  <label className="hero_label" for="alias">Alias </label>
                  <input className="hero_input" type="text" name="" id="alias" placeholder="Alias" onChange = {(chng) => handleInputChange(chng)}/>
              </div>
          </div>
          <div className="button"><button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button></div>
    </div>
  );
}

export default CreatePost;
