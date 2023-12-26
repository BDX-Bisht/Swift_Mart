import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from '../Helper/FormatPrice'

const Product = (item) => {

    const { id, name, image, price, category } = item

    return (
        <div>
            <Link to={`/singleproduct/${id}`} onClick={() => { window.scrollTo(0, 0) }}>
                <div className="card">
                    <figure>
                        <img src={image} alt={name} />
                        <figcaption className="caption">{category}</figcaption>
                    </figure>
                    <div className="card-data">
                        <div className="card-data-flex">
                            <h3>{name}</h3>
                            <p className="card-data--price">
                                {<FormatPrice price={price} />}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product