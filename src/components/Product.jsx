import { useLocation } from "react-router"

function Product() {
  
  const {state} = useLocation()
  console.log(state?.product)
  
  
  return (
    
    <div className="flex flex-col sm:flex-row justify-between mt-14">
      <div className="w-2/5">
        <img src={state?.product?.image} className="w-full"/>
      </div>
      <div className="w-2/5 p-5">
        <p className="text-2xl mb-10">{state?.product?.title}</p>
        <p className="mb-10">{state?.product?.description}</p>
        <p className="text-3xl mb-10">{state?.product?.price}</p>
        <p className="text-2xl mb-10">{state?.product?.category}</p>
      </div>
      
    </div>
  )
}

export default Product