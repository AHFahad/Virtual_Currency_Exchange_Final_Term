import TableRow from 'components/TableRow';

const Table = ({list})=>{
   
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

export default Table;