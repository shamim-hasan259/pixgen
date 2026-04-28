"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data } = useSession();
  const user = data?.user;
  const handleLogOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        {user ? (
          <div className="flex gap-4">
            <ul className="flex items-center gap-4  text-sm">
              <Image
                height={50}
                width={50}
                src={user.image}
                alt={user.name}
                className="rounded-full"
              />
              <button onClick={handleLogOut}>Logout</button>
            </ul>
          </div>
        ) : (
          <Link href="/signin">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
