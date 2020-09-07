import React from 'react';

import FeedList from '../components/FeedList';


function Indiatv() {
  return (
    
    <div className="App">
        <h2>India TV</h2>
      <FeedList Source='indiatv/' newsUrl='breaking' feedsTitle='Breaking News'/>
      <FeedList Source='indiatv/' newsUrl='nation' feedsTitle='Nation News'/>
      <FeedList Source='indiatv/' newsUrl='entertainment' feedsTitle='Entertainment News'/>
      <FeedList Source='indiatv/' newsUrl='sports' feedsTitle='Sport News'/>
      <FeedList Source='indiatv/' newsUrl='International' feedsTitle='World News'/>    
    </div>
  );
}

export default Indiatv;
