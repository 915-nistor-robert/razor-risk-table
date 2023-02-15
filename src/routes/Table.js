import './Table.css'
import TableHeader from "../components/TableHeader/TableHeader";
import {TableHeaders} from "../utils/GeneralUtils";
import TableRow from "../components/TableRow/TableRow";
import {useEffect, useState} from "react";
import AddModal from "../components/AddModal/AddModal";

export default function Table({trades}) {
    const [tableTrades, setTableTrades] = useState(trades)
    const [showAddModal, setShowAddModal] = useState(false)

    useEffect(() => {
        setTableTrades(trades)
    }, [trades])

    const addCallback =  (trade) => {
        setTableTrades([...tableTrades, trade])
    }
    const onPressAdd = () => {
        setShowAddModal(true)
    }

    const amendCallback = (updatedTrade) => {
        const updatedTrades = tableTrades.map((trade) => {
            if(trade.tradeId === updatedTrade.tradeId){
                return updatedTrade
            } else {
                return trade
            }
        })
        setTableTrades(updatedTrades)
    }

    const deleteCallback = (tradeId) => {
        const updatedTrades = tableTrades.filter((trade) => trade.tradeId !== tradeId)
        setTableTrades(updatedTrades)
    }
    return (
        <>
            <div className={'table-main-container'}>
                <h1>Sample Trades</h1>
                <div className={'add-button'} onClick={onPressAdd}>+</div>
                <table>
                    <thead>
                    <tr className={'table-header-container'}>
                        <TableHeader headers={TableHeaders}/>
                    </tr>
                    </thead>
                    <tbody className={'table-row-container'}>
                    {tableTrades.map((trade) => (
                        <TableRow key={trade.tradeId} trade={trade} deleteCallback={deleteCallback} amendCallback={amendCallback}/>
                    ))}
                    </tbody>
                </table>
                {showAddModal ? <><AddModal availableId={tableTrades.length+1} show={showAddModal}  addCallback={addCallback} onHide = {()=>{
                    setShowAddModal(false)
                }}/></>: <></>}
            </div>
        </>
    )
}