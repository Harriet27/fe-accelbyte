import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components';
import { getTopStoryDetail } from '../../redux/actions/hackernewsAction';
import './items.css';

const Items = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const story_id = location.search.split("=")[1];

  useEffect(() => {
    dispatch(getTopStoryDetail(story_id));
  }, []);

  const topStoryDetail = useSelector(state => state.hackernews.topStoryDetail);

  return (
    <div className="items-root">
      <Header />
      <div className="items-search-result">
        <b>Story ID :</b> <a>{story_id}</a>
      </div>
      <div className="items-detail">
        <div>
          <b>Title :</b> {topStoryDetail.title}
        </div>
        <div>
          <b>Summary :</b> {
            topStoryDetail.text === "" || topStoryDetail.text === undefined 
            ? "No Summary provided"
            : topStoryDetail.text
          }
        </div>
        <div>
          <b>Author :</b> {topStoryDetail.by}
        </div>
        <div>
          <b>Score :</b> {topStoryDetail.score}
        </div>
        <div>
          <b>Type :</b> {topStoryDetail.type}
        </div>
        <div>
          <b>URL Link :</b> {
            topStoryDetail.url === "" || topStoryDetail.url === undefined 
            ? "No URL Link provided"
            : (
              <a href={topStoryDetail.url} target="_blank">
                {topStoryDetail.url}
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Items;
