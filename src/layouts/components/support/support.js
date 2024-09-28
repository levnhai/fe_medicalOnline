import classNames from 'classnames/bind';

import style from './support.module.scss';
import { PhoneIcon } from '~/components/Icon';

const cx = classNames.bind(style);

function Support() {
  return (
    <div className={cx('support')}>
      <div className={cx('support_image')}></div>
      <div className={cx('support_method')}>
        <div></div>
        <div className={cx('support_info')}>
          <div className={cx('info_phoneIcon')}>
            <PhoneIcon />
          </div>
          <div>
            <div className={cx('support_infoTitle')}>CÁC HÌNH THỨC HỖ TRỢ</div>
            <div className={cx('support_infoPhone')}>1900-2115</div>
          </div>
        </div>
        <div className={cx('support_qrCard')}>
          <div className={cx('support_qr')}>
            <img
              alt=""
              src="https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F038be8dc-47bd-43a8-a1a4-fb5e5e804b1a-zalo.png&w=1920&q=75"
            />
            zalo
          </div>
          <div className={cx('support_qr')}>
            <img
              alt=""
              src="https://medpro.vn/_next/image?url=https%3A%2F%2Fcdn-pkh.longvan.net%2Fprod-partner%2F038be8dc-47bd-43a8-a1a4-fb5e5e804b1a-zalo.png&w=1920&q=75"
            />
            Facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
