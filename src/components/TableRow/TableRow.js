import './TableRow.css'
import TableCell from "../TableCell/TableCell";
import {useState} from "react";
import Button from "../Button/Button";
import AmendModal from "../AmendModal/AmendModal";

export default function TableRow({trade, deleteCallback, amendCallback}) {
    const [modifyRowVisible,setModifyRowVisible] = useState(false)
    const [amendModalVisible, setAmendModalVisible] = useState(false)

    const deleteHandler = () => {
        deleteCallback(trade.tradeId)
    }
    return (
        <>
            <tr onClick={()=>{setModifyRowVisible(!modifyRowVisible)}}>
                <td><TableCell value={trade.tradeId}/></td>
                <td><TableCell value={trade.securityCode}/></td>
                <td><TableCell value={trade.tradePrice.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits:2 })}/></td>
                <td><TableCell value={trade.tradeVolume.toLocaleString('en-US', {style: 'decimal'})}/></td>
                <td><TableCell value={trade.tradeOwner}/></td>
            </tr>
            <tr className={modifyRowVisible ? 'modify-table-row' : 'modify-table-row closed'}>
                <div className={'amend-button'}>
                    <Button text={'AMEND'} onClick={()=> setAmendModalVisible(true)}/>
                </div>
                <div className={'delete-button'}>
                    <Button text={'DELETE'} onClick={deleteHandler}/>
                </div>
            </tr>
            <AmendModal show={amendModalVisible} onHide={()=>{setAmendModalVisible(false)}} trade={trade} amendCallback={amendCallback}/>
        </>
    )
}