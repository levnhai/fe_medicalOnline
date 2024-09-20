import classNames from 'classnames/bind';
import style from './admin.module.scss';

const cx = classNames.bind(style);

function Admin() {
  return <h2 className={cx('admin')}>Đây là trang admin</h2>;
}

export default Admin;