import React from "react";
import ProductList from "./ProductList";
import BannerImg from "./BannerImg";

const Content = () => {
    return (
        <>
            <BannerImg />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <img
                            src="https://ninethemes.net/durotan20/html/assets/images/full-width/post-1.jpg"
                            alt=""
                            style={{ width: "100%" }}
                        />
                        <div className="content-text mt-5">
                            <h3 className="title">Cách chọn bộ đồ</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam dignissim tortor vitae
                                mattis tempor
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="https://ninethemes.net/durotan20/html/assets/images/full-width/post-2.jpg"
                            alt=""
                            style={{ width: "100%" }}
                        />
                        <div className="content-text mt-5">
                            <h3 className="title">Cách phối đồ</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam dignissim tortor vitae
                                mattis tempor
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="https://ninethemes.net/durotan20/html/assets/images/full-width/post-3.jpg"
                            alt=""
                            style={{ width: "100%" }}
                        />
                        <div className="content-text mt-5">
                            <h3 className="title">Cách trở nên đẹp đẽ</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam dignissim tortor vitae
                                mattis tempor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
