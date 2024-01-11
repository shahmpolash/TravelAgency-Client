import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Table, Pagination } from 'react-bootstrap';

const Admin = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const [users, setUsers] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState(1);
    const [currentPageSubscribers, setCurrentPageSubscribers] = useState(1);
    const [ordersPerPage, subscribersPerPage] = [5, 5]; // Adjust as needed

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/users`)
            .then((res) => res.json())
            .then((info) => setUsers(info));
    }, []);

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info));
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('https://travelagency-a887203e1d88.herokuapp.com/orders');
                const data = await response.json();
                setOrders(data.reverse()); // Reverse the order list
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    // Pagination for Total Orders
    const indexOfLastOrder = currentPageOrders * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination for Total Subscribers
    const indexOfLastSubscriber = currentPageSubscribers * subscribersPerPage;
    const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
    const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);

    const paginateOrders = (pageNumber) => setCurrentPageOrders(pageNumber);
    const paginateSubscribers = (pageNumber) => setCurrentPageSubscribers(pageNumber);

    return (
        <div>
            <section id="services" className="services-area pt-120 pb-90 fix">
                {users.filter(u => u.userEmail === user?.email).length === 1 && (
                    <div className="container">
                        <div className="row"></div>
                        <div className="row">
                            <div>
                                <h3>Welcome to Admin Panel</h3>
                                <div className='total-sales'>
                                    <h4>Total Sales: ${totalSalesAmount}</h4>
                                </div>
                                <AdminMenu></AdminMenu>

                                <h3>Total Orders</h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No.</th>
                                            <th scope="col">Order Date</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order, index) => (
                                            <tr key={order._id}>
                                                <th scope="row">{index + 1 + indexOfFirstOrder}</th>
                                                <td>{order.orderDate}</td>
                                                <td>{order.customerName}</td>
                                                <td>{order.customerEmail}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.paymentStatus}</td>
                                                <td>
                                                    <Link to={`/admin/status/${order._id}`}>Edit Status</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <Pagination.Prev
                                        onClick={() => paginateOrders((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPageOrders === 1}
                                    />
                                    {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map((_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            active={index + 1 === currentPageOrders}
                                            onClick={() => paginateOrders(index + 1)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next
                                        onClick={() =>
                                            setCurrentPageOrders((next) => Math.min(next + 1, Math.ceil(orders.length / ordersPerPage)))
                                        }
                                        disabled={currentPageOrders === Math.ceil(orders.length / ordersPerPage)}
                                    />
                                </Pagination>

                                <h3 className='mt-5'>Total Subscribers</h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">SL No.</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentSubscribers.map((subscribe, index) => (
                                            <tr key={subscribe._id}>
                                                <th scope="row">{index + 1 + indexOfFirstSubscriber}</th>
                                                <td>{subscribe.email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <Pagination.Prev
                                        onClick={() => paginateSubscribers((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPageSubscribers === 1}
                                    />
                                    {Array.from({ length: Math.ceil(subscribers.length / subscribersPerPage) }).map((_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            active={index + 1 === currentPageSubscribers}
                                            onClick={() => paginateSubscribers(index + 1)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next
                                        onClick={() =>
                                            setCurrentPageSubscribers((next) =>
                                                Math.min(next + 1, Math.ceil(subscribers.length / subscribersPerPage))
                                            )
                                        }
                                        disabled={currentPageSubscribers === Math.ceil(subscribers.length / subscribersPerPage)}
                                    />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                )}
                {users.filter((u) => user.userEmail === u?.email).length === 0 && (
                    <div className="container d-flex justify-content-center">
                        <h4>You don't have any permission</h4>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Admin;
