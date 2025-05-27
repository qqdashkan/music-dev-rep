import UserInfo from "../sections/UserInfo";

const UserProfile = () => {
  return (
    <>
      <div className="m-auto w-screen">
        <div className="m-auto flex w-5xl justify-center px-4 pb-6">
          <UserInfo className="h-1/2 w-2/6" />
          <div className="flex w-4/6 flex-col items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
