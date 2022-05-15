import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components';
import { Input, message, notification } from 'antd';
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

  const onChangeSearchInput = (event) => {
    const value = event.target.value;
    setSearchVal(value);
    localStorage.setItem("searchVal", value);
  };

  const debounceOnChange = useCallback(
    debounce(onChangeSearchInput, 3000)
  , []);

  useEffect(() => {
    dispatch(getAllTopStories());
  }, []);

  const topStoriesList = useSelector(state => state.hackernews.topStoriesList);

  if (topStoriesList.length !== 0) {
    localStorage.setItem("topStoriesList", JSON.stringify(topStoriesList));
  }

  const copyToClipBoard = (item) => {
    navigator.clipboard.writeText(item);
    message.info(`Copied ID: ${item}`, 1);
  };

  const renderTopStoriesList = () => {
    return topStoriesList.map((item, idx) => {
      return (
        <div key={idx} className="home-story-item">
          Story ID: <a href={`/story-detail?id=${item}`} id="storyId">
            {item}
          </a> &nbsp;
          <span
            className='copy-to-clipboard'
            onClick={() => copyToClipBoard(item)}
          >
            📋
          </span>
        </div>
      );
    });
  };

  const onSearch = () => {
    const topStoriesLS = localStorage.getItem("topStoriesList");
    const parsedTopStoriesLS = JSON.parse(topStoriesLS);
    const numberedSearchVal = Number(searchVal);
    const checkInclude = parsedTopStoriesLS.includes(numberedSearchVal);
    if (checkInclude) {
      window.location.href = `/story-detail?id=${searchVal}`;
    } else {
      notification.error({
        message: 'Error',
        description: 'The story ID you entered is not found.',
        duration: 2,
      });
    }
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
        <div className='home-searchBox-tips'>
          Debounce delay of 3 seconds <br/>
          Searched ID: <b>{localStorage.getItem("searchVal")}</b>
        </div>
      </div>
      <div className='home-renderId'>
        {renderTopStoriesList()}
      </div>
    </div>
  );
};

export default Home;
