import {
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react'

import { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { MarketplaceType } from './ChartsMenu'

interface MarketplacesModalProps {
    marketplaces: MarketplaceType[]
    modalIsOpen: boolean
    handleMarketplacesModal: () => void
}

export function MarketplacesModal({ modalIsOpen, handleMarketplacesModal, marketplaces }: MarketplacesModalProps) {
    const [marketplacesRef, setMarketplacesRef] = useState<MarketplaceType[]>(marketplaces)

    return (
        <Modal
            isOpen={modalIsOpen}
            onClose={handleMarketplacesModal}
            isCentered
            aria-labelledby="contained-modal"
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent maxWidth="400px">
                <ModalHeader fontSize="16px">Marketplaces</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box id="marketplaces-modal-container">
                        <Box className="modal-search-container">
                            <InputGroup>
                                <InputLeftElement
                                    className=" search-icon"
                                    pointerEvents="none"
                                    children={<BiSearchAlt />}
                                />
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    className="modal-search"
                                    aria-label="Search"
                                    // onChange={e => onInputChange(e.target.value)}
                                    // ref={inputRef}
                                />
                            </InputGroup>
                        </Box>
                        <ul className="list-group marketplaces-list">
                            {marketplaces.map((marketplace, index) => {
                                return (
                                    <label key={index}>
                                        <div className="marketplace-search-container">
                                            <input
                                                type="checkbox"
                                                checked={marketplace.checked}
                                                className="modal-checkbox"
                                                onChange={event => {
                                                    let checked = event.target.checked
                                                    setMarketplacesRef(
                                                        marketplaces.map(data => {
                                                            if (data.id === marketplace.id) {
                                                                data.checked = checked
                                                            }
                                                            return data
                                                        })
                                                    )
                                                }}
                                            />
                                            <div className="marketplace-image">
                                                <img src={marketplace.pictureUrl} alt="marketplace image" />
                                            </div>
                                            <span className="marketplace-name">{marketplace.name}</span>
                                        </div>
                                    </label>
                                )
                            })}
                        </ul>
                    </Box>
                </ModalBody>

                <ModalFooter display="flex" gap={2}>
                    <Button fontSize="14px" p={2} className="btn btn-shadow" onClick={handleMarketplacesModal}>
                        Cancel
                    </Button>
                    <Button fontSize="14px" p={2} className="btn btn-shadow" onClick={handleMarketplacesModal}>
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

// <Modal
//     id="marketplaces-modal-container"
//     show={modalIsOpen}
//     onHide={handleMarketplacesModal}
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
// >
//     <Modal.Header closeButton>
//         <Modal.Title>Marketplaces</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//         <Box className="modal-search-container">
//             <InputGroup>
//                 <InputLeftElement className=" search-icon" pointerEvents="none" children={<BiSearchAlt />} />
//                 <Input
//                     type="text"
//                     placeholder="Search..."
//                     className="modal-search"
//                     aria-label="Search"
//                     // onChange={e => onInputChange(e.target.value)}
//                     // ref={inputRef}
//                 />
//             </InputGroup>
//         </Box>
//         <ul className="list-group marketplaces-list">
//             {marketplaces.map((marketplace, index) => {
//                 return (
//                     <label key={index}>
//                         <div className="marketplace-search-container">
//                             <input
//                                 type="checkbox"
//                                 checked={marketplace.checked}
//                                 className="modal-checkbox"
//                                 onChange={event => {
//                                     let checked = event.target.checked
//                                     setMarketplacesRef(
//                                         marketplaces.map(data => {
//                                             if (data.id === marketplace.id) {
//                                                 data.checked = checked
//                                             }
//                                             return data
//                                         })
//                                     )
//                                 }}
//                             />
//                             <div className="marketplace-image">
//                                 <img src={marketplace.pictureUrl} alt="marketplace image" />
//                             </div>
//                             <span className="marketplace-name">{marketplace.name}</span>
//                         </div>
//                     </label>
//                 )
//             })}
//         </ul>
//     </Modal.Body>
//     <Modal.Footer>
//         <Button fontSize="14px" p={2} className=" btn-shadow" onClick={handleMarketplacesModal}>
//             Cancel
//         </Button>
//         <Button fontSize="14px" p={2} className=" btn-shadow" onClick={handleMarketplacesModal}>
//             Confirm
//         </Button>
//     </Modal.Footer>
// </Modal>
