import { LoginForm } from "./components";
import { AuthContainer } from "@/common";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthContainer>
      <div className="text-white w-full md:w-1/2 lg:w-1/4 mx-auto bg-black/60 mt-5 rounded px-5 md:px-5 py-5 lg:py-20">
        <h2 className="text-2xl">Sign in</h2>
        <LoginForm />
        <div className="mt-16 text-sm">
          <span className="text-netflix-color-gray">
            First time on netflix?
          </span>
          <span>
            <Link href={"/signup"}> Subscribe now.</Link>
          </span>
        </div>
        <p className="text-netflix-placeholder text-xs mt-3">
          Security Google reCAPTCHA
        </p>
      </div>
    </AuthContainer>
  );
}
