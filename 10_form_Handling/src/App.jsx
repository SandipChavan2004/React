import React from "react";

const App = () => {

  function submitHandler(e){
    e.preventDefault();
    console.log("Form Submitted!");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
