import ProductsTableCard from 'components/seller/ProductsTableCard';

const ProductsTable = ({list})=>{
   
    return (
        <>
            
            
            {
                list.map((u)=>{
                   return  <ProductsTableCard key={u.id} {...u} />
                })
            }
            
        </>
    );
}

export default ProductsTable;