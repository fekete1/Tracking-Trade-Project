import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
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
            id="marketplaces-modal-container"
            show={modalIsOpen}
            onHide={handleMarketplacesModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Marketplaces</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span className="modal-search-icon">
                    <BiSearchAlt />
                </span>
                <Form.Control type="search" placeholder="Search..." className="modal-search" aria-label="Search" />
                <ul className="list-group marketplaces-list">
                    {marketplaces.map((marketplace, index) => {
                        return (
                            <label key={index}>
                                <div className="marketplace-search-container">
                                    <input
                                        type="checkbox"
                                        checked={marketplace.checked}
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
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-shadow" variant="secondary" onClick={handleMarketplacesModal}>
                    Cancel
                </Button>
                <Button className="btn-shadow" variant="primary">
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
