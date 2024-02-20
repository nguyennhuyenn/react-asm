import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const ProductEx = ({ products }) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-12 prd1-right">
                        <div className="row prd1-right-box hidden-xs hidden-sm">
                            <img src="https://ninethemes.net/durotan20/html/assets/images/shoppable/main-banner.jpg" />
                        </div>
                        <div className="row prd1-right-items">
                            {products.map((product, index) => {
                                const formattedPrice = new Intl.NumberFormat(
                                    "vi-VN",
                                    { style: "currency", currency: "VND" }
                                ).format(product.price);

                                return (
                                    <React.Fragment key={index}>
                                        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                            <div className="big-item">
                                                <div className="img-item">
                                                    <Link
                                                        to={`/products/${product.id}`}
                                                    >
                                                        <img
                                                            className="inormal"
                                                            src={
                                                                product.image[0]
                                                            }
                                                        />
                                                        <img
                                                            className="ihover"
                                                            src={
                                                                product.image[1]
                                                            }
                                                        />
                                                    </Link>
                                                </div>

                                                <div className="caption text-center">
                                                    <h3 className="name">
                                                        <Link
                                                            to={`/products/${product.id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                    <h3 className="color">
                                                        {product.description}
                                                    </h3>
                                                    <h3 className="price">
                                                        {formattedPrice}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}

                            {/* <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Bluewash</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Navy Blue</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Urbas Corluray Mix - High Top
                                        </h3>
                                        <h3 className="color">Corluray Mix</h3>
                                        <h3 className="price">650.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Bluewash</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Navy Blue</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_AV00167_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Urbas Corluray Mix - High Top
                                        </h3>
                                        <h3 className="color">Corluray Mix</h3>
                                        <h3 className="price">650.000 VND</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item my-4">
                                <div className="big-item">
                                    <div className="img-item">
                                        <a href="#">
                                            <img
                                                className="inormal"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_1-500x500.jpeg"
                                                alt
                                            />
                                            <img
                                                className="ihover"
                                                src="https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="button">
                                        <div className="btn btn-prd1-buynow hidden-xs hidden-sm">
                                            MUA NGAY
                                        </div>
                                    </div>
                                    <div className="caption text-center">
                                        <h3 className="type">New Arrival</h3>
                                        <h3 className="divider" />
                                        <h3 className="name">
                                            Track 6 2.Blues - Low Top
                                        </h3>
                                        <h3 className="color">Bluewash</h3>
                                        <h3 className="price">1.190.000 VND</h3>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductEx;
