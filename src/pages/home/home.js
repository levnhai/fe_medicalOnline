import classNames from 'classnames/bind';
import style from './home.module.scss';

const cx = classNames.bind(style);

function Home() {
  return <h2 className={cx('home')}>Đây là trang home</h2>;
}

export default Home;
