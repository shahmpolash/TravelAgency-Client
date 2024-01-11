import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const HomeSectionThree = () => {
  const [products, setProducts] = useState([]);
  const [sections, setsections] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    fetch("https://travelagency-a887203e1d88.herokuapp.com/products")
      .then((res) => res.json())
      .then((info) => setProducts(info));
  }, []);

  useEffect(() => {
    fetch(`https://travelagency-a887203e1d88.herokuapp.com/sections-three/`)
      .then((res) => res.json())
      .then((info) => setsections(info));
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {sections.map(
        (section) =>
          section.setSection === "Category" && (
            <div className="products container mx-auto gap-4 ">
              {products.map(
                (product) =>
                  product.Category === section.Category && (
                    <div className="card bg-base-100 shadow-xl">
                      <figure>
                        <img
                          src={product.ProductImg}
                          alt={product.ProductName}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{product.ProductName}</h2>
                        <div className="card-actions justify-end">
                          <Link
                            to={`/product-details/${product._id}`}
                            className="btn btn-primary"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )
      )}
{sections.map(
        (section) =>
          section.setSection === "recentProducts" && (
            <>
              <div className="products container mx-auto gap-4 ">
                {currentItems.map((product) => (
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={product.ProductImg}
                        alt={product.ProductName}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.ProductName}</h2>
                      <div className="card-actions justify-end">
                        <Link
                          to={`/product-details/${product._id}`}
                          className="btn btn-primary"
                        >
                          Details More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination text-center my-10">
                {products.length > itemsPerPage &&
                  Array(Math.ceil(products.length / itemsPerPage))
                    .fill()
                    .map((_, i) => (
                      <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`btn mx-2 ${
                          i + 1 === currentPage ? "btn-primary" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
              </div>
            </>
          )
      )}
      
    </>
  );
};

export default HomeSectionThree;
