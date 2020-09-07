import React from 'react';

import FeedList from '../components/FeedList';


function Jansatta() {
  return (
    <div className="App">
      <FeedList Source='jansatta/' newsUrl='breaking' feedsTitle='Breaking News'/>
      <FeedList Source='jansatta/' newsUrl='nation' feedsTitle='Nation News'/>
      <FeedList Source='jansatta/' newsUrl='entertainment' feedsTitle='Entertainment News'/>
      <FeedList Source='jansatta/' newsUrl='sports' feedsTitle='Sport News'/>
      <FeedList Source='jansatta/' newsUrl='International' feedsTitle='World News'/>    
    </div>
  );
}

export default Jansatta;
