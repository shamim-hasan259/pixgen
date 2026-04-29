"use client";
import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { data } = useSession();
  const user = data?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <h3 className="font-bold text-2xl">Pixgen</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-photos">All Photos</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Image
                height={40}
                width={40}
                src={user.image}
                alt={user.name}
                className="rounded-full"
              />
              <Button variant="outline" onClick={handleLogOut}>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/signin">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <CiMenuFries size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/all-photos">All Photos</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/profile">Profile</Link>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                <Image
                  height={35}
                  width={35}
                  src={user.image}
                  alt={user.name}
                  className="rounded-full"
                />
                <span>{user.name}</span>
              </div>
              <Button variant="outline" onClick={handleLogOut}>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/signin">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
