"use client";
import Image from "next/image";
import { z } from "zod";
import { SignUpUsername } from "@/components/signUpStep1";
import { SignUpEmail } from "@/components/signUpStep2t";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const page = () => {
  const router = useRouter();

  const [Signstep, setSignstep] = useState(0);
  const Formstate = [SignUpUsername, SignUpEmail][Signstep];

  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  async function postdata(data: object) {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
  
    const result = await res.json(); // parse the JSON
  
    if (result.message === "success" && Array.isArray(result.data)) {
      const userId = result.data[0]?.id;
      console.log("User ID:", userId);
      localStorage.setItem('userID', userId);
      return userId;
    } else {
      console.error("Signup failed:", result);
      return null;
    }
  }

  function handleClick(values: any) {
    console.log("handleCickiin valuse", values);
    setdata((prev) => ({ ...prev, ...values }));
    if (Signstep === 0) {
      setSignstep(1);
    }
    if (Signstep === 1) {
      console.log(data);
      if (data.email !== "" && data.password !== "" && data.username !== "") {
        postdata(data);
        router.push("/");
      }
    }
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
      <Formstate
        handleClick={handleClick}
        // handlechange={handlechange}
        // data={data}
      />
    </div>
  );
};
export default page;
