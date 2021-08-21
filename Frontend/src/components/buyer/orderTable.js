import TableRow from 'components/buyer/OrderTableRow';

const orderTable = ({list})=>{
   
    return (
        <>
        {console.table(list)}
            
            
            {
                list.map((u)=>{
                   return  <TableRow key={u.id} {...u} />
                })
            }
            
        </>
    );
}

export default orderTable;