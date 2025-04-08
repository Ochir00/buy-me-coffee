"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
type Props = {
  handleClick: () => void;
  handlechange?: (event: any) => void;
  data: object; 
};
export const SignUpUsername = ({ handleClick, handlechange, data }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleClick();
  }

  return (
    <div className="w-[1000px] bg-white flex items-center justify-center ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-[24px] w-[359px] h-20px">
                  Create Your Account
                </FormLabel>
                <FormDescription>
                  Choose a username for your page
                </FormDescription>
                <FormControl>
                  <Input placeholder="Username" {...field} name="username" onChange={handlechange}/>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-[100%]">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};
