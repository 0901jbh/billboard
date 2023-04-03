import axios from "axios";
import React from "react";
import { Button } from "antd";
import style from "./ProfilButton.module.css";
import { useState, useEffect } from "react";
import httpClient from "../../utils/axios";
import { follow } from "../../store/profile";
import { followdelete } from "../../store/profile";
import { useDispatch } from "react-redux";
import { useRouteLoaderData } from "react-router";
import { useSelector } from "react-redux";
import { userProfile } from "../../store/profile";
const ProfilButton = () => {
  const dispatch = useDispatch();
  const [friend, setFriend] = useState(false);
  const { loginUser } = useSelector((state) => state.user);
  const toUserId = useRouteLoaderData("profile");
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    dispatch(userProfile(toUserId)).then((res) => {
      // console.log(res.payload);
      setFriendData(res.payload.userInfo);
    });
  }, []);
  // console.log("sakfjl", friendData);
  // 팔로우
  const friended = () => {
    const data = { fromUserId: loginUser.userId, toUserId: toUserId };
    dispatch(follow(data))
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setFriend(true);
  };

  // 언팔로우
  const frienddelete = () => {
    const data = { fromUserId: loginUser.userId, toUserId: toUserId };
    dispatch(followdelete(data))
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setFriend(false);
  };
  // console.log(friendData);
  return (
    <div>
      <Button
        onClick={!friend ? friended : frienddelete}
        type="primary"
        className={style.btn}
      >
        {friend === true ? "언팔로우" : "팔로우"}
      </Button>
      <h1>{friendData.isFollowing}</h1>
      {/* <Button onClick={frienddelete}> 친구 삭제</Button> */}
    </div>
  );
};

export default ProfilButton;
