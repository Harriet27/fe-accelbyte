import React, { useCallback, useState } from 'react';
import { Header } from '../../components';
import { Input } from 'antd';
import debounce from 'lodash.debounce';
import './home.css';

const { Search } = Input;

const Home = () => {
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

  return (
    <div className='home-root'>
      <Header />
      <Search
        placeholder="input search text"
        allowClear
        onChange={debounceOnChange}
        onSearch={onSearch}
        enterButton
        style={{ width: 300 }}
      />
      <div>
        Searched Keyword: {searchVal}
      </div>
    </div>
  );
};

export default Home;
