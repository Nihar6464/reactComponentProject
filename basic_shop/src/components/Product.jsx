function Product({title,price,imageUrl,counterfun,counter})
{
    return(
        <div className="flex flex-col gap-2 p-3 rounded-2xl shadow-2xl shadow-amber-200 justify-evenly items-center">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>price : {price}</p>
            <button onClick= {() => counterfun(counter+1)} className="bg-black text-white text-1xl text-center p-2 rounded-2xl">Add to Cart</button>
        </div>
    )

}

export default Product