import products from './products'
import ShopItem from './ShopItem'

function ListView() {

    return(
        <div>
       
            {products.map(cardItem =>(
                <>
               
                <ShopItem
                key={cardItem.id}
                name={cardItem.name}
                color={cardItem.color}
                img={cardItem.img}
                price={cardItem.price}
            />
            </>
               
                
        ))}
       
        </div>
    )
}

export default ListView




