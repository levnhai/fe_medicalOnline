import React from 'react';

const NavNews = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div className="flex items-center mb-8">
      <h1
        className="text-3xl font-bold flex-1 cursor-pointer"
        onClick={() => handleCategoryChange('')}
      >
        TIN TỨC Y KHOA
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleCategoryChange('dich-vu')}
          className={`text-lg font-semibold ${selectedCategory === 'dich-vu' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          Tin Dịch Vụ
        </button>
        <button
          onClick={() => handleCategoryChange('tin-y-te')}
          className={`text-lg font-semibold ${selectedCategory === 'tin-y-te' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          Tin Y Tế
        </button>
        <button
          onClick={() => handleCategoryChange('thuong-thuc-y-te')}
          className={`text-lg font-semibold ${selectedCategory === 'thuong-thuc-y-te' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          Y Học Thường Thức
        </button>
      </div>
    </div>
  );
};

export default NavNews;
