import StatementsTableRow from 'components/seller/StatementsTableRow';

const StatementsTable = ({list})=>{
   
    return (
        <>
        {console.table(list)}
            
            
            {
                list.map((u)=>{
                   return  <StatementsTableRow key={u.id} {...u} />
                })
            }
            
        </>
    );
}

export default StatementsTable;