import Profile from "@/components/Profile";
export const metadata = {
  title: "Pixgen --Profile",
};
const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <Profile />
    </div>
  );
};

export default ProfilePage;
