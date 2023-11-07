import Image from "next/image";
import { LoginForm } from "./components";

export default function LoginPage() {
  return (
    <>
      <div className="bg-black md:bg-[url(/images/bg-login.jpg)] h-screen">
        <div className="fixed inset-0 bg-black/60" />
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="logo de Netflix"
            width={200}
            height={200}
          />
          <div className="text-white w-full md:w-1/2 lg:w-1/4 mx-auto bg-black/60 mt-5 rounded px-5 py-5">
            <h2 className="text-2xl">Sign in</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
