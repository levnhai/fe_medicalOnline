import classNames from 'classnames/bind';
import style from './doctor.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const cx = classNames.bind(style);

function Doctor() {
  // Lấy role từ Redux store
  const role = useSelector((state) => state.accounts.user?.role);
  const [message, setMessage] = useState('');

  // Xử lý khi bấm nút 1
  const handleButton1Click = () => {
    setMessage('Bạn đã bấm nút 1');
  };

  // Xử lý khi bấm nút 2
  const handleButton2Click = () => {
    if (role === 'department_head') {
      setMessage('Bạn đã bấm nút 2');
    } else {
      setMessage('Bạn không có quyền bấm nút 2');
    }
  };

  return (
    <div>
      <h2 className={cx('doctor')}>
        Chức vụ: {role === 'department_head' ? 'Trưởng Khoa' : 'Bác Sĩ'}
      </h2>
      <button onClick={handleButton1Click}>Nút 1(Quyền bác sĩ và tưởng khoa)</button>
      <br/>
      <button onClick={handleButton2Click}>Nút 2(Chỉ trưởng khoa)</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Doctor;
