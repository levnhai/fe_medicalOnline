import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaNewspaper } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavNews from './navNews';
import styles from './news.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NewsItem = ({ item }) => (
  <div className={cx('newsItem', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'flex', 'flex-col', 'h-full')}>
    <a href={`/news/${item.slug}`} className="block h-full">
      <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 mb-2">
          <FaNewspaper className="text-gray-500" />
          <p className="text-gray-600 text-xs italic">{item.category?.name}</p>
        </div>
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className={cx('text-gray-600', 'text-sm', 'mb-4', 'flex-grow', 'lineClamp3')}>{item.content}</p>
        <p className="text-gray-500 text-sm font-medium">{new Date(item.createdAt).toLocaleDateString()}</p>
        <p className="text-blue-500 text-sm font-medium hover:underline mt-auto">Xem chi tiết</p>
      </div>
    </a>
  </div>
);

const CategoryNews = ({ title, news }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={cx('categoryNews', 'mb-12')}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={cx('categoryTitle')}>{title}</h2>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 text-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Thu gọn' : 'Xem tất cả'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(showAll ? news : news.slice(0, 6)).map((item) => (
          <NewsItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

const MedicalKnowledge = () => {
  const [medicalKnowledge, setMedicalKnowledge] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('thuong-thuc-y-te');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicalKnowledge = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/news/category/${selectedCategory}`);
        setMedicalKnowledge(response.data);
      } catch (error) {
        console.error('Error fetching medical knowledge:', error);
      }
    };

    fetchMedicalKnowledge();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/news/${category}`);
  };

  const renderLatestNews = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {medicalKnowledge.length > 0 && (
        <div className={cx('latestNewsMain', 'md:col-span-2', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'hover:shadow-xl', 'transition-shadow', 'duration-300')}>
          <a href={`/news/${medicalKnowledge[0].slug}`} className="block">
            <img src={medicalKnowledge[0].imageUrl} alt={medicalKnowledge[0].title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <div className="flex items-center space-x-1">
                <FaNewspaper />
                <p className="text-gray-600 text-s italic">{medicalKnowledge[0].category?.name}</p>
              </div>
              <h2 className="text-4xl font-bold mb-2">{medicalKnowledge[0].title}</h2>
              <p className={cx('text-gray-600', 'mb-2', 'lineClamp3')}>{medicalKnowledge[0].content}</p>
              <p className="text-gray-600 mb-2">{new Date(medicalKnowledge[0].createdAt).toLocaleDateString()}</p>
            </div>
          </a>
        </div>
      )}
      <div className="md:col-span-1 space-y-4">
        {medicalKnowledge.slice(1, 6).map((item) => (
          <div key={item._id} className={cx('latestNewsSide', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'flex', 'hover:shadow-xl', 'hover:scale-105', 'transition-transform', 'transition-shadow', 'duration-300')}>
            <a href={`/news/${item.slug}`} className="block flex">
              <img src={item.imageUrl} alt={item.title} className="w-1/3 h-24 object-cover" />
              <div className="p-2 w-2/3">
                <div className="flex items-center space-x-1">
                  <FaNewspaper />
                  <p className="text-gray-600 text-xs italic">{item.category?.name}</p>
                </div>
                <h3 className={cx('font-semibold', 'text-sm', 'mb-1', 'lineClamp2')}>{item.title}</h3>
                <p className="text-gray-500 text-xs">{new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={cx('newsContainer', 'bg-gray-100', 'min-h-screen', 'py-10')}>
      <div className="max-w-7xl mx-auto px-4">
        <NavNews selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
        {renderLatestNews()}
        <CategoryNews title="Y Học Thường Thức" news={medicalKnowledge.slice(6)} />
      </div>
    </div>
  );
};

export default MedicalKnowledge;