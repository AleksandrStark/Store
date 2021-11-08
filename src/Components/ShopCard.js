import './ShopCard.css'

function ShopCard (props) {
    return (
        <div className="card">
        <div className="description">
          <h3>{props.name}</h3>
          <h6>{props.color}</h6>
          <img className="img" src={props.img} alt ="item_img"/>
        </div>
        <div>
          <p>${props.price}</p>
          <button className="btn">ADD TO CART</button>
        </div>


        </div>
      );
    }


export default ShopCard
