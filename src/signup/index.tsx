import { AuthContainer, Button, TextField } from "@/common";

export default function SignupPage() {
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
        <div className="flex flex-col md:flex-row gap-3 w-full lg:w-[40%] items-center">
          <div className="lg:grow-[10] w-full">
            <TextField placeholder="Email" theme="transparent" size="large" />
          </div>
          <div className="grow">
            <Button
              text="start"
              textVariant="xl"
              variant="primary"
              rightIcon="/icons/arrow-right.svg"
              size="large"
            />
          </div>
        </div>
      </div>
    </AuthContainer>
  );
}
