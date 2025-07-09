import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white shadow-sm text-black">
      <div className="text-xl font-bold">
        <Link href="/"> ArKLab</Link>
      </div>

      <div className="flex items-center space-x-4 text-black">
        <Link href="/agents">
          <Button variant="ghost">Agents</Button>
        </Link>

        {session ? (
          <>
            <span className="text-sm text-black">Hello, {session.user?.name}</span>
            <Button onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
            </Button>

          </>
        ) : (
          <Link href="/">
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
