import React, { useState } from "react";
import styled from "styled-components";

const FriendCard = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 85%;
  width: 90%;
  top: 10px;
  left: 0;
  border-radius: 10px;
  border: 1px #ddd solid;
  margin: 5%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #fff;
  transform: ${({ moved }) =>
    `translateX(${-moved}px) rotate(${-moved / 20}deg)`};
  transition: ${({ finished }) => (finished ? "transform 300ms" : "none")};
`;

const TextContainer = styled.div`
  height: 30%;
  width: 100%;
`;

function Friend({ id, name, image, age, email, deleteFriend, likeFriend }) {
  const [start, setStart] = useState(0);
  const [moved, setMoved] = useState(0);
  const [finished, setFinished] = useState(0);

  const onStart = e => {
    setFinished(false);

    if (!start) {
      return setStart(e.touches[0].pageX);
    }
    return setStart(start + e.touches[0].pageX);
  };

  const onMove = e => {
    if (e.touches) {
      const { pageX } = e.touches[0];

      return setMoved(start - pageX || 0);
    }
  };

  const onEnd = e => {
    if (moved < -100) {
      likeFriend(id);
      setStart(0);
      setFinished(true);
      return setMoved(0);
    }

    if (moved > 100) {
      deleteFriend(id);
      setStart(0);
      setFinished(true);
      return setMoved(0);
    }

    setStart(0);
    setFinished(true);
    return setMoved(0);
  };

  return (
    <FriendCard
      moved={moved}
      finished={finished}
      onTouchStart={onStart}
      onTouchMove={onMove}
      onTouchEnd={onEnd}
    >
      <img src={image} alt=""/>
      <TextContainer>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{email}</p>
      </TextContainer>
    </FriendCard>
  );
}

export default Friend;
