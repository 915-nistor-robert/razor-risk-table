import './TableHeader.css'
import TableCell from "../TableCell/TableCell";

export default function TableHeader({headers}){
return (
    <>
            {headers.map((value,index) => (
                <th key={index}>
                    <TableCell value={value}/>
                </th>
            ))}
    </>
)
}