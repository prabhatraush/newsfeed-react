import React from 'react';

import FeedList from '../components/FeedList';


function Abplive() {
  return (
    <div className="App">
      <FeedList Source='abplive/' newsUrl='breaking' feedsTitle='Breaking News'/>
      <FeedList Source='abplive/' newsUrl='nation' feedsTitle='Nation News'/>
      <FeedList Source='abplive/' newsUrl='entertainment' feedsTitle='Entertainment News'/>
      <FeedList Source='abplive/' newsUrl='sports' feedsTitle='Sport News'/>
      <FeedList Source='abplive/' newsUrl='International' feedsTitle='World News'/>    
    </div>
  );
}

export default Abplive;
