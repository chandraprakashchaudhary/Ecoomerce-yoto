import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice'
import { Link } from 'react-router';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='bg-white text-black py-5 md:py-10 min-h-screen'>
            <div className="max-w-4xl mx-auto">
                <div className="text-4xl font-bold mb-6 text-center">Your Cart</div>
                <div className="cartitems space-y-6">
                    {cartItems.length > 0 ?
                        cartItems.map((item) => (
                            <div key={item.id} className="item flex gap-6 items-center bg-gray-100 rounded-lg p-4 shadow-sm">
                                <div className="image flex-shrink-0">
                                    <img src={item.image} className='w-28 h-28 object-contain rounded-md border' alt={item.title} />
                                </div>
                                <div className="info flex-1">
                                    <div className="title text-2xl font-semibold mb-2">{item.title}</div>
                                    <div className="meta flex gap-6 items-center text-lg">
                                        <div className="price font-medium">Price: <span className="text-green-600">NPR {item.price}</span></div>
                                        <div className="quantity flex items-center gap-2">Qty:
                                            <button
                                                className="bg-gray-300 px-2 rounded text-lg font-bold hover:bg-gray-400 transition"
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                                aria-label="Decrease quantity"
                                            >-</button>
                                            <span className="font-semibold">{item.quantity}</span>
                                            <button
                                                className="bg-gray-300 px-2 rounded text-lg font-bold hover:bg-gray-400 transition"
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                                aria-label="Increase quantity"
                                            >+</button>
                                        </div>
                                        <div className="total">Total: <span className="font-semibold">NPR {(item.price * item.quantity).toFixed(2)}</span></div>
                                    </div>
                                </div>
                                <div className="actions flex flex-col gap-2">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <div className="text-center text-xl text-gray-500 py-10">
                            No Items in the cart
                        </div>
                    }
                </div>
                {cartItems.length > 0 && (
                    <div className='flex justify-between items-center'>
                        <div className="mt-10 flex justify-end">
                            <div className="bg-gray-200 rounded-lg p-6 shadow-md w-full max-w-xs text-right">
                                <div className="text-xl font-semibold mb-2">Total Amount</div>
                                <div className="text-3xl font-bold text-green-700">NPR {totalPrice.toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="">
                            <Link to={'/'}>
                                <button className='px-5 cursor-pointer py-4 bg-green-600 rounded-md text-white'>
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CartPage