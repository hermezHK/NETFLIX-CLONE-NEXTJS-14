import { PasswordForm } from "./components";

export default function RegFormPage() {
  return (
    <div className="bg-white h-screen text-black pt-10">
      <div className="w-full md:w-1/2 lg:w-1/4 mx-auto flex flex-col gap-2">
        <p className="uppercase">STEP 1 OF 3</p>
        <h1 className="text-3xl font-bold">Finish setting up your account</h1>
        <p className="text-lg">Netflix is personalized for you.</p>
        <p className="text-lg">Create a password to start watching Netflix.</p>
        <PasswordForm />
      </div>
    </div>
  );
}
