import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components';
import './items.css';

const Items = () => {
  const location = useLocation();

  const story_id = location.search.split("=")[1];

  return (
    <div class="items-root">
      <Header />
      <div class="items-search-result">
        Story ID: {story_id}
      </div>
    </div>
  );
};

export default Items;
