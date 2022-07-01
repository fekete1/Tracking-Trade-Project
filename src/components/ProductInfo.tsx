import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function ProductInfo() {
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // Some logic
    }

    return (
        <div id="product-info-main-container">
            <div className="product-first-section">
                <div>
                    <p className="product-name white-text"> S22 (200g) </p>
                    <p className="product-brand white-text"> Samsung</p>
                </div>

                <div className="price-and-image">
                    <span className="product-price-section white-text">
                        <p className="product-price-label">RRP: </p>
                        <p className="product-price">R$ 6.000</p>
                    </span>
                    <div className="product-image">
                        <img src="https://samsungbr.vtexassets.com/arquivos/ids/331051-800-auto" alt="imagem do produto" />
                    </div>
                </div>
            </div>

            <div className="product-second-section">
                <div className="rating-section">
                    <span className="rating-label gray-text">Rating: </span>
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        // readonly={true}
                        size={16}
                        transition
                        fillColor="orange"
                        emptyColor="gray"
                        className="rating" // Will remove the inline style if applied
                    />
                </div>
                <div className="last-scraping gray-text">
                    <span className="last-scraping-label">last-scraping: </span>
                    <span>2022-30-06 9:03 AM</span>
                </div>
            </div>
        </div>
    )
}
