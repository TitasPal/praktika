import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const  Product = ({product}) => {
    return (
       <div className="card bg-base-100 w-60 shadow-sm border border-gray-500 mt-10">
        <Link to={`/delete/${product._id}`} className="btn btn-sm btn-error absolute top-2 left-2">Delete</Link>
  <figure>
    <img
      src={product.image}
      alt={product.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <h1>${product.price.toFixed(2)}</h1>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}   
export default Product