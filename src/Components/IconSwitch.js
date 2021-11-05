import './IconSwitch.css'

function IconSwitch(props) {
    return (
        <i className="material-icons" onClick={()=>{props.onSwitch()}} 
        >{props.icon}</i>
       
      )
   
}

export default IconSwitch