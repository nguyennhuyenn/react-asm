import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-4 mt-md-5 pt-md-5 border-top container-fluid">
            <div className="row">
                <div className="col-12 col-md text center ms-5 mt-5">
                    <span>Copyright by Ổi</span>
                </div>
                <div className="col-6 col-md footer-menu">
                    <h4 className="mb-3">Sản phẩm</h4>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Giày Nam
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Giày Nữ
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Thời trang & Phụ kiện
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Sale-off
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md footer-menu">
                    <h4 className="mb-3">về công ty</h4>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Tuyển dụng
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Liên hệ nhượng quyền
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md footer-menu">
                    <h4 className="mb-3">Hỗ trợ</h4>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                FAQs
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Bảo mật thông tin
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Chính sách chung
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Tra cứu đơn hàng
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md footer-menu">
                    <h4 className="mb-3">Liên hệ</h4>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Email góp ý
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                Hotline
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link className="text-decoration-none" href="#">
                                0345613090
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
