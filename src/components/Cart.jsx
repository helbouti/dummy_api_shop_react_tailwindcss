import Product from "./Product";
import ProductItem from "./ProductItem";

export default function Cart({data}){
    
    const {id,total,userId,totalProducts,totalQuantity,discountedTotal,products}=data
    

    return (

        <div className="flex w-full justify-center flex-col max-w-2xl">

            <div className="flex items-center justify-center border border-blue-500  p-4 mb-0 m-2 bg-blue-700 rounded-t-2xl">
                <div className="mr-auto text-3xl text-amber-50 font-mono">INVOICE</div>
                <div className="flex flex-col">
                    <p className="text-amber-50 self-end font-bold" >Your Componey name</p>
                    <p className="text-amber-50 self-end text-[14px]">City and town</p>
                    <p className="text-amber-50 self-end text-[14px]">Street</p>
                    <p className="text-amber-50 self-end text-[14px]">Phone number</p>
                    <p className="text-amber-50 self-end text-[14px]">Email@componey.com</p>
                </div>


            </div>
            <div className="flex flex-col bg-blue-400 m-2 mt-0 rounded-b-2xl pb-4 mb-0">
            {
                
                products.map((prod)=>(<ProductItem key={prod.id}  prod={prod} />))
            }
            </div>
            
        </div>
    )
}