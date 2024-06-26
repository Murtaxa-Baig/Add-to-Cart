import React from 'react'

export default function ProductCard({
    title,
    description,
    image,
    price,
    category,
    id,
    rating,
    addToCart,
    item,
    setCart,
    cartProduct,
    setCartProduct
}) {

    const isItemInCart = cartProduct.some(cartItem => cartItem.id === id);

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

    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg card m-1 py-2 flex flex-col justify-between">
                <div>
                    <img class="w-[30%] mx-auto" src={image} alt="Product Image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{title}</div>
                        <p class="text-gray-700 text-base">{description}</p>
                        <div class="flex items-center mt-4">
                            <span class="text-gray-600 text-sm">({rating?.rate}, {rating?.count} reviews)</span>
                        </div>
                    </div>
                </div>
                <div class="px-6 pt-4 pb-8 flex justify-between items-center">
                    <p class="text-gray-700 text-base font-bold">${price}</p>
                    {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => addToCart(item)}>Add to Cart</button> */}
                    {
                        // Conditionally render Add to Cart or Cancel button
                        isItemInCart ? (
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                                onClick={() => removeFromCart(id)}
                            >
                                Remove from Cancel
                            </button>
                        ) : (
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        )
                    }
                </div>
            </div>

        </>
    )
}
