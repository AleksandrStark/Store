import './ShopItem.css'

function ShopItem(props){
    return (
        <table>
        <tr>
        <th>
            <img className="image" src={props.img} alt ="item_img"/>   
        </th>
        <th>
            <h3>{props.name}</h3>
        </th>
        <th>
            <h6>{props.color}</h6>
        </th>
        
        <th>
            <p>${props.price}</p>
        </th>
     
        <th>
            <button className="btn" >ADD TO CART</button>  
        </th>
         
        </tr>
        </table>
        
      );
}

export default ShopItem