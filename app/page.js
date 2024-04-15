'use client'
import { useEffect, useState } from "react";
import ProductCard from "./(components)/productCard/ProductCard";
import Navbar from "./(components)/navbar/Navbar";

export default function Home() {
  const [products, setProdects] = useState([])
  const [cartProduct, setCartProduct] = useState([])



  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json();
      setProdects(data)
    }
    getAllProducts()
  }, [])
  const addToCart = (item) => {
    setCartProduct([...cartProduct, item])
    
  }
  


  return (
    <>
      <div className="sticky top-0">
        <Navbar 
        cartProduct={cartProduct}
        setCartProduct={setCartProduct}
        />
      </div>
      <div class="flex flex-wrap justify-center">
        {
          products?.map((item, index) => {
            return (
              <>
                <ProductCard
                  title={item?.title}
                  description={item?.description}
                  image={item?.image}
                  price={item?.price}
                  category={item?.category}
                  id={item?.id}
                  rating={item?.rating}
                  item={item}
                  addToCart={addToCart}
                />
              </>
            )
          })
        }
      </div>
    </>
  );
}
