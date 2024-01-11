import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import UserDashboardMenu from './UserDashboardMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import HeaderBottom from '../components/FrontPage/HeaderBottom';



const UserDashboard = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);



    return (
        <section id="services" class="services-area pt-120 pb-90 fix" >
            <div class="container">
           
                <div>

                </div>
                <div>
                    <HeaderBottom></HeaderBottom>
                    <h3>Welcome to User Dashboard</h3>
                    <UserDashboardMenu></UserDashboardMenu>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl No.</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Your Name</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders
                                .filter(order => order.customerEmail === user?.email)
                                .map((order, index) => (
                                    <tr key={order._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.orderDate}</td>
                                        <td>{order.customerName}</td>
                                        <td>{order.orderStatus}</td>
                                        <td>
                                            {order.paymentStatus === 'UnPaid' && (
                                                <Link className="main-btn" to={`/pay-now/${order._id}`}>
                                                    Pay Now
                                                </Link>
                                            )}
                                            {order.paymentStatus === 'Paid' && (
                                                <Link className="main-btn" to="#">
                                                    You Have Paid
                                                </Link>
                                            )}
                                            {order.paymentStatus === 'Cancelled' && (
                                                <Link className="main-btn" to="#">
                                                    You Have Cancelled
                                                </Link>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default UserDashboard;