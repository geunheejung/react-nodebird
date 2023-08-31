import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "노드버드오피셜" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "노드버드오피셜" },
  ];

  return (
    <AppLayout>
      <Head>
        <title>프로필</title>
      </Head>
      <div>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </div>
    </AppLayout>
  );
};

export default Profile;
