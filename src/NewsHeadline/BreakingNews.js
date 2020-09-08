import React from 'react';

import FeedList from '../components/FeedList';


function BreakingNews() {
  return (
    
    <div className="App">
        <h2 className="feed-head" >Breaking News</h2>
        <FeedList Source='indiatv/' newsUrl='breaking' feedsTitle='Breaking News'/>
        <FeedList Source='jansatta/' newsUrl='breaking' feedsTitle='Entertainment News'/>
        <FeedList Source='abplive/' newsUrl='breaking' feedsTitle='Nation News'/>
          
    </div>
  );
}

export default BreakingNews;
