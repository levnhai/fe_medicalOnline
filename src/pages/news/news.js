import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNew } from '~/redux/news/newSlice';
import { FaNewspaper, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import NavNews from './navNews'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './news.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={cx('customArrow', 'nextArrow', className)}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={cx('customArrow', 'prevArrow', className)}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const NewsItem = ({ item }) => (
  <div className={cx('newsItem', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'flex', 'flex-col', 'h-full')}>
    <a href="#" className="block h-full">
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
      
      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className={cx('newsSlider')}>
          <Slider {...settings}>
            {news.slice(0, 6).map((item) => (
              <div key={item._id} className="px-2">
                <NewsItem item={item} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

const News = () => {
  const dispatch = useDispatch();
  const selectorNewsData = useSelector((state) => state.news.newData);
  const [latestNews, setLatestNews] = useState([]);
  const [categorizedNews, setCategorizedNews] = useState({});
  const [selectedCategory, setSelectedCategory] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllNew());
  }, [dispatch]);

  useEffect(() => {
    if (selectorNewsData) {
      const sortedNews = [...selectorNewsData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setLatestNews(sortedNews.slice(0, 6));
      const categorized = sortedNews.slice(6).reduce((acc, item) => {
        const categorySlug = item.category?.slug || 'uncategorized';
        if (!acc[categorySlug]) {
          acc[categorySlug] = [];
        }
        acc[categorySlug].push(item);
        return acc;
      }, {});
      setCategorizedNews(categorized);
    }
  }, [selectorNewsData]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/news/${category}`);
  };

  const renderLatestNews = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {latestNews.length > 0 && (
        <div className={cx('latestNewsMain', 'md:col-span-2', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'hover:shadow-xl', 'transition-shadow', 'duration-300')}>
          <a href="#" className="block">
            <img src={latestNews[0].imageUrl} alt={latestNews[0].title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <div className="flex items-center space-x-1">
                <FaNewspaper />
                <p className="text-gray-600 text-s italic">{latestNews[0].category?.name}</p>
              </div>
              <h2 className="text-4xl font-bold mb-2">{latestNews[0].title}</h2>
              <p className={cx('text-gray-600', 'mb-2', 'lineClamp3')}>{latestNews[0].content}</p>
              <p className="text-gray-600 mb-2">{new Date(latestNews[0].createdAt).toLocaleDateString()}</p>
            </div>
          </a>
        </div>
      )}
      <div className="md:col-span-1 space-y-4">
        {latestNews.slice(1).map((item) => (
          <div key={item._id} className={cx('latestNewsSide', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'flex', 'hover:shadow-xl', 'hover:scale-105', 'transition-transform', 'transition-shadow', 'duration-300')}>
            <a href="#" className="block flex">
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
        <CategoryNews title="Tin Dịch Vụ" news={categorizedNews['dich-vu'] || []} />
        <CategoryNews title="Tin Y Tế" news={categorizedNews['tin-y-te'] || []} />
        <CategoryNews title="Y Học Thường Thức" news={categorizedNews['thuong-thuc-y-te'] || []} />
      </div>
    </div>
  );
};

export default News;