import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import { Headline6 } from '@material/react-typography';
import LikeDislike from '../LikeDislike';
import UpdateComment from './UpdateComment';
import {
  userColor, getDate, getMonth, getYear, convertTime,
} from '../../../../../../commonFunctions';
import AuthContext from '../../../../../../Contexts/AuthContext';

const Comment = ({
  newComment, updateAndReset, index, onCancelUpdate, deleteComment,
}) => {
  const {
    userId: userObject, createdAt: time, content: commentValue,
  } = newComment;
  const { authState } = useContext(AuthContext);
  const { name: user, ratings: userRatings, _id: userId } = userObject;
  const [isUpdate, setUpdate] = useState(false);
  return (
    <div className="pa2 ba b--transparent br3 mb3">
      <div className="flex mt2">
        <img className="fr ba b--mid-gray" alt="user-icon" style={{ borderRadius: '50%' }} height="40em" width="auto" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
        <div className="flex flex-column">
          <Link
            className="no-underline dim ml3"
            to={`/profile/${userId}`}
          >
            <Headline6 style={{
              color: userColor(userRatings, userId), margin: '2px 2px 0px 0px', lineHeight: '1rem', fontSize: '17px',
            }}
            >
              {user}
            </Headline6>
          </Link>
          <span className="mt1 ml3" style={{ fontSize: '15px' }}>{`${getDate(time)} ${getMonth(time)} ${getYear(time)}, ${convertTime(time)} `}</span>
        </div>
      </div>
      <div>
        {
          (isUpdate) ? (
            <UpdateComment
              initialComment={newComment}
              onUpdateFunction={updateAndReset}
              index={index}
              setUpdate={setUpdate}
              onCancel={onCancelUpdate}
            />
          ) : (
            <>
              <Headline6 style={{ margin: '0.5em 3.1em', fontSize: '18px' }}>{commentValue}</Headline6>
              <div className="flex justify-between">
                <LikeDislike upvotes={newComment.upvote} downvotes={newComment.downvote} />
                {
                  authState.user && authState.user.userId === userId
                    ? (
                      <div className="flex justify-around pt1">
                        <Button
                          className="mr3"
                          style={{ float: 'right', padding: '0px' }}
                          onClick={() => {
                            deleteComment(newComment);
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          style={{ padding: '0px' }}
                          className=""
                          onClick={() => setUpdate(true)}
                        >
                          edit
                        </Button>
                      </div>
                    ) : null
                  }
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};


Comment.propTypes = {
  newComment: PropTypes.object.isRequired,
  updateAndReset: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onCancelUpdate: PropTypes.func.isRequired,
};

export default Comment;
