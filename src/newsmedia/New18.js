import React from 'react';

import FeedList from '../components/FeedList';


function News18() {
  return (
    <div className="App">
      <FeedList Source='news18/' newsUrl='nation' feedsTitle='Nation News'/>
      <FeedList Source='news18/' newsUrl='entertainment' feedsTitle='Entertainment News'/>
      <FeedList Source='news18/' newsUrl='sports' feedsTitle='Sport News'/>
      <FeedList Source='news18/' newsUrl='International' feedsTitle='World News'/>
      <FeedList Source='news18/' newsUrl='careers' feedsTitle='Careers News'/>    
    </div>
  );
}

export default News18;
