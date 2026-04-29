"use client";

import { useSession } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import UpdateModal from "./UpdateModal";

const Profile = () => {
  const { data } = useSession();
  const user = data?.user;
  return (
    <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
      <Avatar className="h-20 w-20">
        <Avatar.Image
          alt={user?.name}
          src={user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

      <h2 className="text-xl font-bold">{user?.name}</h2>
      <p className="text-muted">{user?.email}</p>

      <UpdateModal />
    </Card>
  );
};

export default Profile;
