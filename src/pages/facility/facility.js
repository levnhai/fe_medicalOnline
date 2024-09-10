import classNames from 'classnames/bind';
import style from './facility.module.scss';
import { FaSearch } from "react-icons/fa";


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
    </div>
  );
}

export default Facility;
