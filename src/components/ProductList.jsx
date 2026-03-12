import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function ProductList() {
  const [Products, setProducts] = useState([])
  const [Error, setError] = useState(null)
  const [Loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const getProducts = (productobj) => {
    navigate('/product', { state: { product: productobj } })
  }

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        let res = await fetch("https://fakestoreapi.com/products")
        if (res.status === 200) {
          let data = await res.json()
          setProducts(data)
        } else {
          throw new Error("fetch failed")
        }
      } catch (err) {
        setError(err.message)
      }
      setLoading(false)
    }
    getData()
  }, [])

  if (Loading) return <h1>Loading...</h1>
  if (Error) return <h1>{Error}</h1>

  return (
    <div>
      <div className='text-center mt-8 mb-4 max-w-md mx-auto'>
        <input
          type="search"
          value={search}
          placeholder='Find by category...'
          onChange={(e) => setSearch(e.target.value)}
          className='border border-gray-300 rounded-full py-3 px-6 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all text-gray-700'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 text-center pl-10 pr-10'>
        {Products.filter((item) =>
            item.category.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              onClick={() => getProducts(item)}
              key={item.id}
              className='bg-white shadow-md hover:shadow-xl p-6 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group'
            >
              <img src={item.image} alt={item.title} className='p-4 object-contain h-48 w-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300'/>
              <div>
                <h1 className='font-bold text-gray-800 line-clamp-2 mb-2'>{item.title}</h1>
                <p className='text-rose-600 font-bold text-lg'>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList