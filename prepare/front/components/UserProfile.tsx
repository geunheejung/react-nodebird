import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";

interface IUserProfileProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const UserProfile = ({ setIsLoggedIn }: IUserProfileProps) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          트위터
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>GH</Avatar>} title="Geunhee" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
