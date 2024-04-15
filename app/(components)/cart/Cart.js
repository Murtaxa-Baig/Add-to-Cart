import React from 'react'
import CancelCart from '../cancelCart/CancelCart'

export default function Cart({
    cartProduct,
    setCartProduct
}) {
    return (
        <>
            <div className="absolute top-0 right-0 m-5 bg-white p-5 rounded-lg shadow-lg h-[80vh] overflow-y-scroll custom-scrollbar">
                <button className="absolute top-4 right-4" onClick={() => setOpenCart(false)}>✘</button>
                <h2>Cart</h2>
                <div>
                    {cartProduct.map((item, index) => (
                        <div key={index} className='bg-gray-100 p-3 rounded-[8px] mb-1'>
                            <div className='flex'>
                                <img
                                    width={50}
                                    height={50}
                                    src={item?.image}
                                    className='mr-[8px]'
                                />
                                <p className='font-bold	'>{item.title}</p>
                            </div>
                            <div className='pl-[58px] flex justify-between items-center mt-2'>
                                <p>Price: ${item.price}</p>
                                {/* <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => onCancel()}>Cancel</button> */}
                                <CancelCart
                                    cartProduct={cartProduct}
                                    setCartProduct={setCartProduct}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
