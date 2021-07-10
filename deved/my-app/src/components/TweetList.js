import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
  return (
    <div className='tweet-list'>
      {tweets.map((tweet) => (
        <Tweet name={name} message={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
