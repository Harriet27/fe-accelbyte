import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
import { Input } from 'antd';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTopStories } from '../../redux/actions/hackernewsAction';
import './home.css';

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
          Story ID: <a href={`/items?story_id=${item}`}>{item}</a>
        </div>
      );
    });
  };

  return (
    <div className='home-root'>
      <Header />
      <div className='home-searchBox'>
        <Search
          placeholder="search story id here"
          type="number"
          onChange={debounceOnChange}
          onSearch={onSearch}
          enterButton
          style={{ width: window.innerWidth < 500 ? null : 350 }}
        />
        {/* <div
          className='home-search-result'
          style={{ display: searchVal !== "" ? "block" : "none" }}
        >
          <div>suggestion</div>
        </div> */}
      </div>
      <div className='home-renderId'>
        {renderTopStoriesList()}
      </div>
    </div>
  );
};

export default Home;
