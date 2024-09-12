import classNames from 'classnames/bind';
import style from './facility.module.scss';
import { FaSearch } from "react-icons/fa";
import logo from '../../content/pic1.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";


const cx = classNames.bind(style);

function Facility() {
  return(
    <div className={cx('container')}>
      <div className={cx('title')}>
      <div className={cx('navtitle')}>Trang chủ / </div>
        <div className={cx('texttitle')}>
          <a className={cx('text1')}>Bệnh viện công</a>
          <a className={cx('text2')}>Đặt khám dễ dàng, không lo chờ đợi tại các bệnh viện công hàng đầu Việt </a>
          <form className={cx('search')}>
          <a><FaSearch /></a>
          <input type="text" placeholder="Tìm kiếm..." />
        </form>
        </div>
      </div>
      <div className={cx('menu_feature')}>
        <ul>
          <li>Bệnh viện công(10)</li>
          <li>Bệnh viện tư(10)</li>
          <li>Phòng khám(10)</li>
          <li>Phòng mạch(5)</li>
          <li>Xét nghiệp(10)</li>
          <li>Y tế tại nhà(7)</li>
          <li>Tiêm chủng(4)</li>
        </ul>
      </div>
      <div className={cx('content')}>
        <div className={cx("cards-container")}>
          <div className={cx("card-content")}>
            <div className={cx("hospital-logo")}>
              <img src={logo} />
            </div>
            <div className={cx("hospital-details")}>
              <h3>Bệnh viện đa khoa Singapore (Singapore General Hospital)</h3>
              <p><IoLocationOutline /> Bukit Merah, Central Region, Singapore</p>
              <div className={cx("rating")}>
                <span>4.7</span>
                <div className={cx("stars")}>
                  <span>★ ★ ★ ★ ☆</span>
                </div>
              </div>
              <div className={cx("action-buttons")}>
                <button className={cx("detail-button")}>Xem chi tiết</button>
                <button className={cx("book-button")}>Đặt khám ngay</button>
              </div>
            </div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("hospital-logo")}>
              <img src={logo} />
            </div>
            <div className={cx("hospital-details")}>
              <h3>Bệnh viện đa khoa Singapore (Singapore General Hospital)</h3>
              <p><IoLocationOutline /> Bukit Merah, Central Region, Singapore</p>
              <div className={cx("rating")}>
                <span>4.7</span>
                <div className={cx("stars")}>
                  <span>★ ★ ★ ★ ☆</span>
                </div>
              </div>
              <div className={cx("action-buttons")}>
                <button className={cx("detail-button")}>Xem chi tiết</button>
                <button className={cx("book-button")}>Đặt khám ngay</button>
              </div>
            </div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("hospital-logo")}>
              <img src={logo} />
            </div>
            <div className={cx("hospital-details")}>
              <h3>Bệnh viện đa khoa Singapore (Singapore General Hospital)</h3>
              <p><IoLocationOutline /> Bukit Merah, Central Region, Singapore</p>
              <div className={cx("rating")}>
                <span>4.7</span>
                <div className={cx("stars")}>
                  <span>★ ★ ★ ★ ☆</span>
                </div>
              </div>
              <div className={cx("action-buttons")}>
                <button className={cx("detail-button")}>Xem chi tiết</button>
                <button className={cx("book-button")}>Đặt khám ngay</button>
              </div>
            </div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("hospital-logo")}>
              <img src={logo} />
            </div>
            <div className={cx("hospital-details")}>
              <h3>Bệnh viện đa khoa Singapore (Singapore General Hospital)</h3>
              <p><IoLocationOutline /> Bukit Merah, Central Region, Singapore</p>
              <div className={cx("rating")}>
                <span>4.7</span>
                <div className={cx("stars")}>
                  <span>★ ★ ★ ★ ☆</span>
                </div>
              </div>
              <div className={cx("action-buttons")}>
                <button className={cx("detail-button")}>Xem chi tiết</button>
                <button className={cx("book-button")}>Đặt khám ngay</button>
              </div>
            </div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("hospital-logo")}>
              <img src={logo} />
            </div>
            <div className={cx("hospital-details")}>
              <h3>Bệnh viện đa khoa Singapore (Singapore General Hospital)</h3>
              <p><IoLocationOutline /> Bukit Merah, Central Region, Singapore</p>
              <div className={cx("rating")}>
                <span>4.7</span>
                <div className={cx("stars")}>
                  <span>★ ★ ★ ★ ☆</span>
                </div>
              </div>
              <div className={cx("action-buttons")}>
                <button className={cx("detail-button")}>Xem chi tiết</button>
                <button className={cx("book-button")}>Đặt khám ngay</button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("hospital-details-container")}>
          <div className={cx("hospital-detail")}>
            <img src={logo} className={cx("hospital-details-logo")} />
            <h4 className={cx("hospital-detail-title")}>Phòng Khám Đa Khoa Pháp Anh</h4>
            <p className={cx("hospital-detail-time")}><strong><CiClock2 /></strong> Thứ 2 - Thứ 7: 07:00 - 16:00 | Chủ Nhật: 07:00 - 12:00</p>
            <hr/>
            <p className={cx("hospital-detail-text")}>Phòng khám Đa khoa Pháp Anh là một trong những cơ sở y tế chuyên khám tổng quát và xét nghiệm uy tín tại TP. Hồ Chí Minh và các tỉnh lân cận. Để hỗ trợ người dân tiếp cận dễ dàng hơn với các dịch vụ chất lượng tại đây, phòng khám đã gia nhập Medpro - ứng dụng đặt lịch khám uy tín hàng đầu tại Việt Nam.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
