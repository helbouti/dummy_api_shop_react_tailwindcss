export default function Product(data){
     
        const {prod }=data
        const {id,thumbnail,title,price}=prod
        console.log(prod);
        
        
    return (
        <div className="flex flex-col items-start rounded-2xl border border-amber-50 w-[250px] bg-cyan-100 text-amber-950 mb-2" >
            <div className=" rounded-t-2xl mt-4">
            <img src={thumbnail} alt={title} className="rounded-t-2xl"  />
            </div>
            <div className="flex flex-col m-4 w-[70%]">
            <p >@{id} </p>
            <p className="border border-blue-500 shadow-2xs shadow-blue-500 rounded-4xl  p-2 text-center m-4 w-[100%]">{price} dz</p>
            <p className="text-[18px] text-amber-700">{title} </p>
            </div>
        </div>
    )
}