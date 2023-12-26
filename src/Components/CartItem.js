import React from 'react'
import FormatPrice from '../Helper/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'

const CartItem = ({ id, name, image, color, price, amount, item_id }) => {

    const { removeItem, setIncrease, setDecrease } = useCartContext();

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <Link to={`/singleproduct/${item_id}`}>
                            <img src={image} alt={id} />
                        </Link>
                    </figure>
                </div>
                <div>
                    <Link to={`/singleproduct/${item_id}`}>
                        <p>{name}</p>
                        <div className="color-div">
                            <p>Color :</p>
                            <div className="color-style" style={{ backgroundColor: color, color: color }} ></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="cart-hide">
                <p><FormatPrice price={price} /></p>
            </div>

            <div>
                <CartAmountToggle amount={amount}
                    setDecrease={() => setDecrease(id)}
                    setIncrease={() => setIncrease(id)} />
            </div>

            <div className="cart-hide">
                <p><FormatPrice price={amount * price} /></p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
            </div>

        </div>
    )
}



export default CartItem