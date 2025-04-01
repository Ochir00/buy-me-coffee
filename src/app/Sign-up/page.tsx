"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpUsername } from "@/components/signUpStep1";
import { SignUpEmail } from "@/components/signUpStep2t";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-between">
      <div className="min-w-[50%] bg-amber-400 flex items-center justify-center ">
        <Image
          src="/signup.png"
          width={1000}
          height={1000}
          alt="Image"
          className="w-[455px] h-[370px] "
        />
      </div>
      <SignUpUsername />
      <SignUpEmail />
    </div>
  );
};
export default page;
