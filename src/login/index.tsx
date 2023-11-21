import Image from "next/image";
import { LoginForm } from "./components";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-black md:bg-[url(/images/bg-login.jpg)] h-screen">
      <div className="fixed inset-0 bg-black/60" />
      <div className="relative">
        <Image
          src="/images/logo.png"
          alt="logo de Netflix"
          width={200}
          height={200}
        />
        <div className="text-white w-full md:w-1/2 lg:w-1/4 mx-auto bg-black/60 mt-5 rounded px-5 md:px-5 py-5 lg:py-20">
          <h2 className="text-2xl">Sign in</h2>
          <LoginForm />
          <div className="mt-8 text-sm">
            <span className="text-netflix-color-gray">First time on netflix?</span>
            <span>
              <Link href={"/"}> Subscribe now.</Link>
            </span>
          </div>
          <p className="text-netflix-placeholder text-xs mt-3">Security Google reCAPTCHA</p>
        </div>
      </div>
    </div>
  );
}
