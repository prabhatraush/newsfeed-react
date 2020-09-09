import React from 'react';

import FeedList from '../components/FeedList';
import BannerList from '../components/BannerList';

function Home() {
  return (
    
    <div className="App">
      <div>
        <BannerList Source='abplive/' newsUrl='nation' feedsTitle='Nation News'/>
      </div>
      <div className="feed-section">
        <div className="latest-feed">
          <h2 className="feed-head" >Latest News</h2>
          <FeedList Source='indiatv/' newsUrl='breaking' feedsTitle='Latest News'/>
          <FeedList Source='jansatta/' newsUrl='breaking' feedsTitle='Latest News'/>
          <FeedList Source='abplive/' newsUrl='breaking' feedsTitle='Latest News'/>
        </div>
        <div>

        </div>
      </div>


    </div>
  );
}

export default Home;
