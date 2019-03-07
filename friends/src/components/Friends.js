import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getFriends, deleteFriend, likeFriend } from "../actions";
import Friend from "./FriendCard";

const CardWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 60px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
  overflow: hidden;
`;

function Friends({ friends, liked, loading, getFriends, deleteFriend, likeFriend }) {
  useEffect(() => {
    getFriends();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(liked)

  return (
    <CardWrapper>
      {friends.map(friend => (
        liked.includes(friend.id) ?
        null :
        <Friend
          key={friend.id}
          {...friend}
          deleteFriend={deleteFriend}
          likeFriend={likeFriend}
        />
      ))}
    </CardWrapper>
  );
}

const mapStateToProps = ({ friends, liked, loading }) => {
  return { liked, friends };
};

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend, likeFriend }
)(Friends);
