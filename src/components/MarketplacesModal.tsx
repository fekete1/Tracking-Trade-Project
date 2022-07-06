import { Button, Form, Modal } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'

interface MarketplacesModalProps {
    marketplaces: string[]
    modalIsOpen: boolean
    handleMarketplacesModal: () => void
}

export function MarketplacesModal({ modalIsOpen, handleMarketplacesModal, marketplaces }: MarketplacesModalProps) {
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
                <ul className="list-group">
                    {marketplaces.map(marketplace => {
                        return <p>{marketplace}</p>
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
