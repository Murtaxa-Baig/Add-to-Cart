import React from 'react'

export default function CancelCart({
    cartProduct,
    setCartProduct
}) {
    const removeFromCart = () => {

    }
    return (
        <>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => onCancel()}>Cancel</button>
        </>
    )
}
