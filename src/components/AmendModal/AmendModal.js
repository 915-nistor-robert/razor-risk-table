import './AmendModal.css'
import {Modal} from "react-bootstrap";
import {useState} from "react";
import Button from "../Button/Button";

export default function AmendModal({show, onHide, trade, amendCallback}) {
    const [updatedTrade, setUpdatedTrade] = useState(trade)
    const [errorMessage, setErrorMessage] = useState('')

    const checkCorrectInput = () => {
        if (updatedTrade.securityCode === '' || updatedTrade.tradePrice === '' || updatedTrade.tradeVolume === '' || updatedTrade.tradeOwner === '') {
            setErrorMessage('Please fill in all required fields.')
            return false
        }
        if (isNaN(updatedTrade.tradePrice) || isNaN(updatedTrade.tradeVolume)) {
            setErrorMessage('Trade Volume and Trade Price need to be a number.')
            return false
        }
        setErrorMessage('')
        return true
    }

    const amendTrade = () => {
        if (checkCorrectInput()) {
            amendCallback(updatedTrade);
            onHide()
        }
    }

    const onExitClicked = () => {
        onHide()
    }

    return (
        <>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName='amend-modal'
                show={show}
                backdrop={true}>
                <Modal.Body>
                    <div className={'content-amend-modal'}>
                        <div className={'amend-modal-header'}>
                            <div onClick={onExitClicked} className={'exit-modal-button'}>X</div>
                            <p className={'amend-modal-title'}>AMEND TRADE</p>
                        </div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Security Code:*</p>
                            <input className={'entry-input'} type={"text"} value={updatedTrade.securityCode}
                                   onChange={(event) => setUpdatedTrade({
                                       ...updatedTrade,
                                       securityCode: event.target.value
                                   })}/></div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Trade Price:*</p>
                            <input className={'entry-input'} type={"number"} value={updatedTrade.tradePrice}
                                   onChange={(event) => setUpdatedTrade({
                                       ...updatedTrade,
                                       tradePrice: parseFloat(event.target.value)
                                   })}/></div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Trade Volume:*</p>
                            <input className={'entry-input'} type={"number"} value={updatedTrade.tradeVolume}
                                   onChange={(event) => setUpdatedTrade({
                                       ...updatedTrade,
                                       tradeVolume: parseInt(event.target.value)
                                   })}/></div>
                        <div className={'entry-input-container'}>
                            <p className={'entry-input-header'}>Trade Owner:*</p>
                            <input className={'entry-input'} type={"text"} value={updatedTrade.tradeOwner}
                                   onChange={(event) => setUpdatedTrade({
                                       ...updatedTrade,
                                       tradeOwner: event.target.value
                                   })}/></div>
                        {errorMessage === '' ? <></> : <p className={'error-message'}>{errorMessage}</p>}
                        <div className={'amend-button-container'}>
                            <Button text={'AMEND'} onClick={amendTrade}/>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}