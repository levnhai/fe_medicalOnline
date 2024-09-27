import Button from '~/components/Button';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <div className={cx('footer_container')}>
        <div className={cx('footer_info')}>
          <a href="/">
            <div className={cx('footer_logo')}></div>
          </a>
          <ul>
            <li className={cx('footer_infoItem')}>
              <b>Địa chỉ: </b> 97 Trần Quang Diệu, PHường 14, Quận 3, Tp Hồ Chí Minh
            </li>
            <li className={cx('footer_infoItem')}>
              <b>Website: </b>
              https://pkh.vn
            </li>
            <li className={cx('footer_infoItem')}>
              <b>Email: </b>
              cskh@medical.vn
            </li>

            <li className={cx('footer_infoItem')}>
              <b>Điện thoại: </b>
              (028) 710 78098
            </li>
          </ul>
        </div>
        <div className={cx('footer_menu')}>
          <div className={cx('footer_menuWapper')}>
            <h3 className={cx('footer_title')}>Dịch vụ y tế</h3>
            <ul className={cx('footer_listMenu')}>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Đặt khám tại cơ sở</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Đặt khám theo bác sỉ</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Tư vấn khám bệnh từ xa</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Đặt lịch xét nghiệm</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">y tế tại nhà</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Thanh toán tại nhà</Button>
              </li>
            </ul>
          </div>
          <div className={cx('footer_menuWapper')}>
            <h3 className={cx('footer_title')}>Cơ sở y tế</h3>
            <ul className={cx('footer_listMenu')}>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Bệnh viện công</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Bệnh viện tư</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Phòng khám</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Phòng mạch</Button>
              </li>
            </ul>
          </div>
          <div className={cx('footer_menuWapper')}>
            <h3 className={cx('footer_title')}>Hướng dẫn</h3>
            <ul className={cx('footer_listMenu')}>
              <li className={cx('footer_itemMenu')}>
                <Button to="/huong-dan/cai-dat-ung-dung">Cài đặt ứng dụng</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="/huong-dan/dat-lich-kham">Đặt khám</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="/huong-dan/quy-trinh-hoan-phi">Quy trình hoàn phí</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="/huong-dan/cau-hoi-thuong-gap">Câu hỏi thường gặp</Button>
              </li>
            </ul>
          </div>
          <div className={cx('footer_menuWapper')}>
            <h3 className={cx('footer_title')}>Tin tức</h3>
            <ul className={cx('footer_listMenu')}>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Tin dịch vụ</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Tin y tế</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Y học thường thức</Button>
              </li>
            </ul>
          </div>
          <div className={cx('footer_menuWapper')}>
            <h3 className={cx('footer_title')}>Về chúng tôi</h3>
            <ul className={cx('footer_listMenu')}>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Giới thiệu</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Điều khoản và dịch vụ</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Chính sách bảo mật</Button>
              </li>
              <li className={cx('footer_itemMenu')}>
                <Button to="#">Quy định sử dụng</Button>
              </li>
            </ul>
          </div>
          <div className={cx('footer_menuWapper')}>
            <div className={cx('footer_oder')}>
              <a href="https://apps.apple.com/us/app/id1481561748">
                <img
                  src="https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdadangky.a0a8489c.png&w=256&q=75"
                  alt=""
                  width="97px"
                  height="30px"
                />
              </a>
              <a href="http://online.gov.vn/Home/WebDetails/44209?AspxAutoDetectCookieSupport=1">
                <img
                  src="https://medpro.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbocongthuong.53714ee6.png&w=128&q=75"
                  alt=""
                  width="97px"
                  height="30px"
                />
              </a>
              <a href="https://apps.apple.com/us/app/id1481561748">
                <img
                  src="https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Ficon_ios.svg%3Ft%3DFri%2520Aug%252004%25202023%252013%3A03%3A00%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75"
                  alt=""
                  width="97px"
                  height="30px"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=vn.com.medpro">
                <img
                  src="https://medpro.vn/_next/image?url=https%3A%2F%2Fbo-api.medpro.com.vn%2Fstatic%2Fimages%2Fmedpro%2Fweb%2Ficon_google_play.svg%3Ft%3DFri%2520Aug%252004%25202023%252013%3A03%3A00%2520GMT%2B0700%2520(Indochina%2520Time)&w=96&q=75"
                  alt=""
                  width="97px"
                  height="30px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('footer_coppyRight')}>
        <span className={cx('coppyRight_tag')}>@2020 - Bản Quyền Thuộc Công Ty Cổ Phàn Ứng Dụng PKH</span>
        <img
          src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-06.png?ID=c40b02e0-e3fb-4099-8bfa-16900ae9bd87"
          alt=""
          width="150px"
          height="30px"
        />
      </div>
    </div>
  );
}

export default React.memo(Footer);
