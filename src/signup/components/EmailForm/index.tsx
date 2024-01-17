"use client";

import { TextField, Button, Form } from "@/common";
import useForm from "@/common/hooks/useForm";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setData } from "@/lib/slices/user";

export default function EmailForm() {
  const { values, handleInputChange } = useForm({
    email: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.email) return;

    dispatch(setData(values));

    router.push("/signup/regform");
  };

  return (
    <Form
      className="flex flex-col md:flex-row gap-3 w-full lg:w-[40%] items-center"
      onSubmit={handleSubmit}
    >
      <div className="lg:grow-[10] w-full">
        <TextField
          placeholder="Email"
          theme="transparent"
          size="large"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="grow">
        <Button
          text="start"
          textVariant="2xl"
          variant="primary"
          rightIcon="/icons/arrow-right.svg"
          size="large"
        />
      </div>
    </Form>
  );
}
