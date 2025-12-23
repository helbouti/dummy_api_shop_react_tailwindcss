import Product from "./Product";

export default function Cart({data}){
    
    const {id,total,userId,totalProducts,totalQuantity,discountedTotal,products}=data
    

    return (
        <div>
            {
                
                products.map((prod)=>(<Product key={prod.id}  prod={prod} />))
            }
        </div>
    )
}