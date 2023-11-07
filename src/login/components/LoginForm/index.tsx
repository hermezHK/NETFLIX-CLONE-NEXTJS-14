"use client";

import { Form, TextField, Button } from "@/common";
import useForm from "@/common/hooks/useForm";

export default function LoginForm() {
  const { values, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <Form className="flex flex-col mt-5 gap-5">
      <TextField
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleInputChange}
        isError
        error="Enter a valid email or phone number"
      />
      <TextField
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
        isError
        error="The password must be between 4 to 16 characters"
      />
      <Button text="Sign in" variant="primary" type="submit" />
    </Form>
  );
}
