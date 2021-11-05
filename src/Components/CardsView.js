import products from './products'
import ShopCard from "./ShopCard";

function CardsView (props){

    return (
        <div >
            {products.map(cardItem =>(
            <ShopCard 
                key={cardItem.id}
                name={cardItem.name}
                color={cardItem.color}
                img={cardItem.img}
                price={cardItem.price}
            />
    
        ))}
        </div>
        
    )
  

}

export default CardsView