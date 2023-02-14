import './AddModal.css'
import {Modal} from "react-bootstrap";
import {useState} from "react";
import Button from "../Button/Button";


export default function AddModal({availableId, show, onHide, addCallback}) {
    const [trade, setTrade] = useState({
        tradeId: availableId,
        securityCode: '',
        tradePrice: 0.0,
        tradeVolume: 0.0,
        tradeOwner: ''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const checkCorrectInput = () => {
        if (trade.securityCode === '' || trade.tradePrice === '' || trade.tradeVolume === '' || trade.tradeOwner === '') {
            setErrorMessage('Please fill in all required fields.')
            return false
        }
        if (isNaN(trade.tradePrice) || isNaN(trade.tradeVolume)) {
            setErrorMessage('Trade Volume and Trade Price need to be a number.')
            return false
        }
        setErrorMessage('')
        return true
    }

    const addTrade = () => {
        if (checkCorrectInput()) {
            addCallback(trade);
            resetTrade()
            onHide()
        }
    }

    const resetTrade = () => {
        setTrade({
            securityCode: '',
            tradePrice: 0.0,
            tradeVolume: 0.0,
            tradeOwner: ''
        })
    }

    const onExitClicked = () => {
        onHide()
        resetTrade()
        setErrorMessage('')
    }

    return (
        <>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName='add-modal'
                show={show}
                backdrop={true}>
                <Modal.Body>
                    <div className={'content-add-modal'}>
                        <div className={'add-modal-header'}>
                            <div onClick={onExitClicked} className={'exit-modal-button'}>X</div>
                            <p className={'add-modal-title'}>ADD TRADE</p>
                        </div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Security Code:*</p>
                            <input className={'entry-input'} type={"text"} value={trade.securityCode}
                                   onChange={(event) => setTrade({...trade, securityCode: event.target.value})}/></div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Trade Price:*</p>
                            <input className={'entry-input'} type={"number"} value={trade.tradePrice}
                                   onChange={(event) => setTrade({
                                       ...trade,
                                       tradePrice: parseFloat(event.target.value)
                                   })}/></div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Trade Volume:*</p>
                            <input className={'entry-input'} type={"number"} value={trade.tradeVolume}
                                   onChange={(event) => setTrade({
                                       ...trade,
                                       tradeVolume: parseInt(event.target.value)
                                   })}/></div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Trade Owner:*</p>
                            <input className={'entry-input'} type={"text"} value={trade.tradeOwner}
                                   onChange={(event) => setTrade({...trade, tradeOwner: event.target.value})}/></div>
                        {errorMessage === '' ? <></> : <p className={'error-message'}>{errorMessage}</p>}
                        <div className={'add-button-container'}>
                            <Button text={'ADD ENTRY'} onClick={addTrade}/>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}