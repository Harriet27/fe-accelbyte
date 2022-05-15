import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
import { Input } from 'antd';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTopStories } from '../../redux/actions/hackernewsAction';
import { useHistory } from 'react-router-dom';
import './home.css';

const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [searchVal, setSearchVal] = useState("");

  const onChangeSearch = (event) => {
    setSearchVal(event.target.value);
    localStorage.setItem("searchVal", event.target.value);
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
          Story ID: <a href={`/story-detail?id=${item}`}>{item}</a>
        </div>
      );
    });
  };

  useEffect(() => {
    if (localStorage.getItem("searchVal") !== "") {
      history.push(`/story-list?search=${localStorage.getItem("searchVal")}`);
    } else {
      history.push("/story-list");
    };
  }, []);

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
          defaultValue={localStorage.getItem("searchVal") || searchVal}
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
