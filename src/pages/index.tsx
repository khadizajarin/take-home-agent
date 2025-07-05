import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Head from "next/head";
import { signIn } from "next-auth/react";
import Image from "next/image";


export default function LoginPage() {
  return (
    <>
      <Head>
        <title>ArkLab AI Agents Catalog</title>
        <meta
          name="Login"
          content="Login to browse the latest AI agents on ArkLab — filter by status, category, and pricing model."
        />
      </Head>

     <div className="flex min-h-screen bg-gradient-to-r from-gray-400 via-white to-gray-100">
        {/* Left side - Login Form */}
        <div className="flex flex-col items-center justify-center w-full  md:w-1/2 p-8 relative z-10 ">
          <Card className="w-full max-w-sm shadow-xl">
            <CardHeader>
              <h2 className="text-2xl font-bold text-center">Login to ArkLab</h2>
            </CardHeader>

            <CardContent className="space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Login</Button>

              <div className="text-center text-sm text-gray-500">or</div>

              <Button
                className="w-full flex items-center justify-center space-x-2"
                onClick={() => signIn("google", { callbackUrl: "/agents" })}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.5 12.2c0-.7-.1-1.4-.2-2H12v3.8h6.5c-.3 1.6-1.4 2.9-2.8 3.7v3h4.5c2.6-2.4 4.1-6 4.1-8.5z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 24c3.2 0 5.9-1 7.9-2.7l-3.7-3c-1 .7-2.3 1.2-4.2 1.2-3.2 0-5.8-2.1-6.8-4.9H1.3v3.1C3.3 21.4 7.3 24 12 24z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.2 14.6c-.3-1-.5-2-.5-3s.2-2 .5-3V5.5H1.3C.5 7.1 0 9 0 12s.5 4.9 1.3 6.5l3.9-3.9z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4.7c1.8 0 3.4.6 4.7 1.7l3.5-3.5C18.1 1 15.2 0 12 0 7.3 0 3.3 2.6 1.3 5.5l3.9 3.9c1-2.8 3.6-4.7 6.8-4.7z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Sign in with Google</span>
              </Button>
            </CardContent>

            <CardFooter className="flex justify-between text-sm text-gray-500">
              <Link href="/agents" className="hover:underline">
                View Agents
              </Link>
              <Link href="#" className="hover:underline">
                Forgot Password?
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Diagonal Divider */}
        <div className="hidden md:block w-0.5 relative z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-100 transform rotate-6 origin-center w-px"></div>
        </div>

        {/* Right side (blank / future image/branding section) */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-white">
          <Image
            src="https://www.allaboutai.com/wp-content/uploads/2024/11/How-AI-Agents-Work-in-Manufacturing.gif"
            alt="AI Illustration"
            width={1400}
            height={1500}
            className="object-contain p-8"
           />
          </div>

      </div>
    </>
  );
}
