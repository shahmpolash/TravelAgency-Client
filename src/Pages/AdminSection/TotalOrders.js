import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import { Table, Pagination } from 'react-bootstrap';

const TotalOrders = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust as needed

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

    const paidOrders = orders.filter((order) => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    // Get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <section id="services" className="services-area pt-120 pb-90 fix">
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
                                        <th scope="col">Amount</th>
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
                                            <td>${order.packagePrice} USD</td>
                                            <td>{order.orderStatus}</td>
                                            <td>{order.paymentStatus}</td>
                                            <td>
                                                <Link to={`/admin/status/${order._id}`}>Update</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <Pagination>
                                <Pagination.Prev
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                />
                                {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map((_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    onClick={() =>
                                        setCurrentPage((next) => Math.min(next + 1, Math.ceil(orders.length / ordersPerPage)))
                                    }
                                    disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
                                />
                            </Pagination>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TotalOrders;
