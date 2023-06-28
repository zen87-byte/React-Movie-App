import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../utils/fetchData";
import avatar_path from "../images/avatar_path.jpeg";

const CommentSection = () => {
  const reviews = useContext(DataContext);
  const [dataReviews, setDataReviews] = useState([]);
  const [avatarPath, setAvatarPath] = useState([]);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  useEffect(() => {
    if (Object.keys(reviews).length > 0) {
      setDataReviews(reviews.results);
      const paths = reviews.results.map(
        (item) => item.author_details.avatar_path
      );
      setAvatarPath(paths);
    }
  }, [reviews]);

  const handleAvatarPath = (url) => {
    if (url.startsWith("https://secure.gravatar.com/avatar")) {
      const path = url.substring(url.lastIndexOf("/avatar"));
      return path;
    }
  };

  console.log(avatarPath);
  console.log(dataReviews);
  return (
    <div className="comment-section">
      <h2>Comment</h2>
      <div id="form-comment" className="form-comment">
        <img src={avatar_path} alt="" />
        <form action="">
          <textarea placeholder="Write here..." />
          <button id="post">Post</button>
        </form>
      </div>
      {dataReviews.map((item, index) => (
        <div className="author-comment" key={index}>
          <div className="author-photo">
            {/* <img
              src={`${process.env.REACT_APP_POSTER_PATH}${item.author_details.avatar_path}`}
              alt=""
            /> */}
            <img src={avatar_path} alt="" />
          </div>
          <div className="author-content">
            <div className="detail">
              <h4>{`${item.author}`}</h4>
              <span>8 day ago</span>
            </div>
            <p>{`${item.content}`}</p>
            <div className="reaction">
              <button id="like" onClick={handleLike}>
                <i class="fa fa-heart-o" aria-hidden="true"></i> Like
              </button>
              <button id="reply">
                <i class="fa fa-reply" aria-hidden="true"></i> Reply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
