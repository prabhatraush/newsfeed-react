import React from 'react';

import FeedList from '../components/FeedList';
import BannerList from '../components/BannerList';

function Home() {
  return (
    
    <div className="App">
        <BannerList Source='abplive/' newsUrl='nation' feedsTitle='Nation News'/>
        <h2 className="feed-head" >Breaking News</h2>
        <FeedList Source='indiatv/' newsUrl='breaking' feedsTitle='Breaking News'/>
        <FeedList Source='jansatta/' newsUrl='breaking' feedsTitle='Breaking News'/>
        <FeedList Source='abplive/' newsUrl='breaking' feedsTitle='Breaking News'/>
    </div>
  );
}

export default Home;
