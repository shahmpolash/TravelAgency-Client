import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import support from './Images/support.png'
import checkout from './Images/checkout.png'
import dollar from './Images/dollar-sign.png'
import "./UserDashboardMenu.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from "firebase/auth";

const UserDashboardMenu = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
      };
    

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('https://travelagency-a887203e1d88.herokuapp.com/orders');
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid' && order.customerEmail === user?.email);
    const totalSpent = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    return (
        <div>
            <div className='user-cards'>
                <div className='single-card'>
                    <Link to='/my-order'> <div className='icon-img' ><img src={checkout}/></div> <p>My Orders</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='#'> <div className='icon-img' ><img src={dollar}/></div> <p>Total Spent $ {totalSpent} USD</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='/contact-us'> <div className='icon-img' ><img src={support}/></div> <p>Support</p></Link>
                </div>
                <div className='single-card'>
                <Link className="main-btn"  onClick={handleSignout}>Signout</Link>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardMenu;
