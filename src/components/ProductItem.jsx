export default function ProductItem(data){

        const {prod }=data
        const {id,thumbnail,title,price}=prod
        console.log(prod);
     
    return(
        <div className="flex bg-blue-500 ml-2 mr-2 mt-1  items-center rounded-2xl cursor-pointer">
            <img className="w-16 h-16 rounded-2xl" src={thumbnail} alt={title} />
            
            <pre className="text-wrap text-center">{title}</pre>
            <pre className="text-[12px] ml-auto mr-4 text-amber-300 font-bold font-mono">{price}</pre>
            
        </div>
    )
}