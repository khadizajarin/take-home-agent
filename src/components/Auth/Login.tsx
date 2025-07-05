import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Login to ArkLab</h2>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Login</Button>

          <div className="text-center text-sm text-gray-500">or</div>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
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
            Continue with Google
          </Button>
        </CardContent>

        <CardFooter className="flex justify-between text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Back to Home
          </Link>
          <Link href="#" className="hover:underline">
            Forgot Password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
