import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return(
        <div className='footer row'>
            <div className='footer-menu column'>
                <span className='footer-title'>Danh mục</span>
                <Link to='/' className='men'>
                    <span className='footer-chill'>Nam</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Nữ</span>
                </Link>
            </div>
            <div className='footer-support column'>
                <span className='footer-title'>Hỗ trợ khách hàng</span>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>FAQs and Help</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Chính sách đổi trả</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Chính sách giao hàng</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Kiểm tra tình trạng đơn hàng</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Chính sách bảo hành</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Chính sách thanh toán</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Điều khoản dịch vụ</span>
                </Link>
                <Link to='/' className='woman'>
                    <span className='footer-chill'>Chính sách bảo mật</span>
                </Link>
            </div>
            <div className='footer-address column'>
                <span className='footer-title'>Địa chỉ liên hệ</span>
                <span className='footer-chill'>Cơ sở 1: 389/4/42 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</span>
                <span className='footer-chill'>Cơ sở 2: 389/4/42 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</span>
            </div>
        </div>
    )
}

export default Footer