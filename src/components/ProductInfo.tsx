import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { ToolTipInfo } from './ToolTipInfo'

export function ProductInfo() {
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // Some logic
    }

    return (
        <Box width="100%" borderRadius="4px" id="product-info-main-container">
            <Box className="product-first-section">
                <Box>
                    <p className="product-name white-text"> S22 (200g) </p>
                    <p className="product-brand white-text"> Samsung</p>
                </Box>

                <Box className="price-and-image">
                    <span className="product-price-section white-text">
                        <p className="product-price-label">RRP: </p>
                        <p className="product-price">R$ 6.000</p>
                    </span>
                    <Box className="product-image">
                        <img
                            src="https://samsungbr.vtexassets.com/arquivos/ids/331051-800-auto"
                            alt="imagem do produto"
                        />
                    </Box>
                </Box>
            </Box>

            <Flex className="product-second-section">
                <Flex className="rating-section" gap="2px" alignItems="center">
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
                    <span className="product-offers-tooltip">
                        <ToolTipInfo tooltipText="Alguma informação das informações do produto" />
                    </span>
                </Flex>
                <Box className="last-scraping gray-text">
                    <span className="last-scraping-label">last-scraping: </span>
                    <span>2022-30-06 9:03 AM</span>
                </Box>
            </Flex>
        </Box>
    )
}
