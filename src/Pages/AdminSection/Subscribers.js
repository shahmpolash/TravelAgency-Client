import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [subscribersPerPage] = useState(10); // Adjust as needed

    useEffect(() => {
        fetch(`https://travelagency-a887203e1d88.herokuapp.com/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info));
    }, []);

    // Get current subscribers
    const indexOfLastSubscriber = currentPage * subscribersPerPage;
    const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
    const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section id="services" class="services-area pt-120 pb-90 fix">
            <div class="container">
                <div class="row"></div>
                <div class="row">
                    <h3>Total Subscribers</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th scope="col">SL No</th>
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
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        />
                        {Array.from({ length: Math.ceil(subscribers.length / subscribersPerPage) }).map((_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => setCurrentPage((next) => Math.min(next + 1, Math.ceil(subscribers.length / subscribersPerPage)))}
                            disabled={currentPage === Math.ceil(subscribers.length / subscribersPerPage)}
                        />
                    </Pagination>
                </div>
            </div>
        </section>
    );
};

export default Subscribers;
