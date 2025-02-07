"use client";

import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '@/app/actions/actions';
import { Product } from '../../../types/products';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const Cartpage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Item has been removed", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) handleQuantityChange(id, product.stock + 1);
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.stock > 1) handleQuantityChange(id, product.stock - 1);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.stock, 0);
    };

    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to Checkout",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "Your Order has been successfully processed", "success");
                setCartItems([]);
            }
        });
    };

    return (
        <div className="container mx-auto p-4 mt-10">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cartItems.map((item) => (
                    <div key={item._id} className="p-4 border rounded-lg shadow-lg bg-white flex flex-col items-center">
                        {item.image &&(
                         <Image
                         src={item.image ? urlFor(item.image).url() : '/placeholder.jpg'}
                         alt="image"
                         width={500}
                         height={500}
                         className="w-14 h-16 object-cover rounded"
                       />
                       
                        )}
                        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                        <p className="text-gray-600">${item.price}</p>
                        <div className="flex items-center mt-2 space-x-2">
                            <button onClick={() => handleDecrement(item._id)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                            <span className="px-4">{item.stock}</span>
                            <button onClick={() => handleIncrement(item._id)} className="px-3 py-1 bg-gray-300 rounded">+</button>
                        </div>
                        <div className="w-full flex justify-end mt-3">
                        <button onClick={() => handleRemove(item._id)} className="mt-2 bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded">
                            Remove
                        </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-right">
                <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
                <button onClick={handleProceed} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto py-2 px-4 rounded">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cartpage;
