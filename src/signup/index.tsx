import { AuthContainer } from "@/common";
import { EmailForm } from "./components";

export default function SignUpPage() {
  return (
    <AuthContainer>
      <div className="flex flex-col gap-5 h-[90vh]  items-center justify-center m-5 lg:m-0">
        <h1 className="text-5xl font-bold">
          Unlimited movies, TV shows, and more
        </h1>
        <h3 className="text-3xl font-semibold">
          Watch anywhere. Cancel anytime.
        </h3>
        <p className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <EmailForm />
      </div>
    </AuthContainer>
  );
}
