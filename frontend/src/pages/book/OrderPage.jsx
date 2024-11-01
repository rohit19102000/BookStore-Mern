import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/Features/orders/ordersApi'
import { useAuth } from '../../Context/AuthContext';

const OrderPage = () => {
    const { currentUser} = useAuth()


    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error geting orders data</div>
    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
            {
                orders.length === 0 ? (<div>No orders found!</div>) : (<div>
                    {
                        orders.map((order, index) => (
                            <div
                            key={order._id}
                            className="border rounded-lg shadow-md p-6 bg-white transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <p className='p-1 bg-secondary text-white w-10 rounded mb-2'># {index + 1}</p>
                            <h2 className="font-bold text-lg mb-1">Order ID: {order._id}</h2>
                            <p className="text-gray-700">Name: {order.name}</p>
                            <p className="text-gray-700">Email: {order.email}</p>
                            <p className="text-gray-700">Phone: {order.phone}</p>
                            <p className="text-gray-700 font-semibold">Total Price: ${order.totalPrice}</p>
                            
                            <h3 className="font-semibold mt-4">Address:</h3>
                            <p className="text-gray-700">
                                {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                            </p>

                            <h3 className="font-semibold mt-4">Products Id:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {order.productIds.map((productId) => (
                                    <li key={productId}>{productId}</li>
                                ))}
                            </ul>
                        </div>
                        ))
                    }
                </div>)
            }
        </div>
    )
}

export default OrderPage