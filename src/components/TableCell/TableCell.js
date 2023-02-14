import './TableCell.css'

export default function TableCell({value}){
    return (
        <>
            <div className={'table-cell-container'}>
                {value}
            </div>
        </>
    )
}