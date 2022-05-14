import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
import { Input } from 'antd';
import debounce from 'lodash.debounce';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTopStories } from '../../redux/actions/hackernewsAction';

const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState("");

  const onChangeSearch = (event) => {
    setSearchVal(event.target.value);
  };

  const debounceOnChange = useCallback(
    debounce(onChangeSearch, 3000)
  , []);

  const onSearch = () => {
    alert(`Searched Keyword: ${searchVal}`);
  };

  useEffect(() => {
    dispatch(getAllTopStories());
  }, []);

  const topStoriesList = useSelector(state => state.hackernews.topStoriesList);

  const renderTopStoriesList = () => {
    return topStoriesList.map((item, idx) => {
      return (
        <div key={idx} style={{ marginRight: "1rem" }}>
          ID: <a href="#">{item}</a>
        </div>
      );
    });
  };

  return (
    <div className='home-root'>
      <Header />
      <div className='home-searchBox'>
        <Search
          placeholder="Search Here..."
          onChange={debounceOnChange}
          onSearch={onSearch}
          enterButton
          style={{ width: window.innerWidth < 500 ? null : 350 }}
        />
      </div>
      <div className='home-renderId'>
        {renderTopStoriesList()}
      </div>
    </div>
  );
};

export default Home;
