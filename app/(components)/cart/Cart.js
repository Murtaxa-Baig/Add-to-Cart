import React from 'react'
import CancelCart from '../cancelCart/CancelCart'

export default function Cart({
    cartProduct,
    setCartProduct,
    hideCartProduct,
    setOpenCart
}) {
    const removeFromCart = (id) => {
        const existingProduct = cartProduct.filter((item, ind) => {
            if (item?.id !== id)
                return item
        })
        setCartProduct([...existingProduct])
        if (cartProduct.length < 0) {
            setOpenCart(false)
        }


    }

    const totalAmount = cartProduct.reduce((total, item) => total + item.price, 0);
    return (
        <>
            <div class="absolute top-0 right-0 m-5 bg-white p-5 rounded-lg shadow-lg max-h-[80vh] min-w-[30%] max-w-[30%] overflow-y-auto custom-scrollbar">
                <button className="absolute top-4 right-4" onClick={hideCartProduct}>✘</button>
                <h2 className='font-bold text-lg'>Cart</h2>
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
                                <p className='font-bold	'>{item?.title}</p>
                            </div>
                            <div className='pl-[58px] flex justify-between items-center mt-2'>
                                <p>Price: ${item.price}</p>
                                <button
                                    onClick={() => { removeFromCart(item.id) }}
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Cancel</button>
                                {/* <CancelCart
                                    cartProduct={cartProduct}
                                    setCartProduct={setCartProduct}
                                /> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-between items-center mt-2'>
                    <p>Total: ${totalAmount}</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" >Buy</button>
                </div>
            </div>
        </>
    )
}
