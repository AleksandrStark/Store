import products from './products'
import ShopCard from "./ShopCard";
import PropTypes from 'prop-types'

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

CardsView.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number
}
}

export default CardsView
