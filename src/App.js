import React, { useState } from 'react';
import CardsView from './Components/CardsView';
import IconSwitch from './Components/IconSwitch';
import ListView from './Components/ListView';



function App() {

  let [icon, setIcon]=useState("view_list")

  function onSwitch () {

    console.log("pressed");
    setIcon((prevItem)=>{

      if (prevItem ==="view_list"){
        icon="view_module"
      } else if(prevItem ==="view_module"){
        icon="view_list"
      }
      return icon
    })

  }

  return (
    <div>
      <div>
        <IconSwitch
          onSwitch={onSwitch}
          icon={icon}
        />
      </div>
      <div>

      {(icon==="view_module")? <ListView /> : <CardsView />}

      </div>
    </div>

  );
}

export default App
