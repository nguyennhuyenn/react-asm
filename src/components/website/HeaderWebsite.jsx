import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import BannerImg from "./BannerImg";
import Banner from "./Banner";

const HeaderWebsite = () => {
    return (
        <div>
            <header className="d-flex flex-wrap py-3 border-bottom justify-content-center align-items-center">
                <div className="">
                    <Link
                        to={"/"}
                        className="d-inline-flex link-body-emphasis text-decoration-none"
                    >
                        <h2
                            style={{
                                textTransform: "uppercase",
                                marginBottom: "0",
                            }}
                        >
                            DUROTAN
                        </h2>
                    </Link>
                </div>
                <ul className="nav col-md-6 mb-2 justify-content-center mb-md-0 nav-header">
                    <li className="dropdown">
                        <Link to={"/products"} className="px-2 text-dark">
                            SẢN PHẨM
                        </Link>
                    </li>
                    <li className="dropdown">
                        <Link to={"/sign-in"} className="px-2 text-dark">
                            ĐĂNG NHẬP
                        </Link>
                    </li>
                    <li className="dropdown">
                        <Link to={"/sign-up"} className="px-2 text-dark">
                            ĐĂNG KÝ
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default HeaderWebsite;
