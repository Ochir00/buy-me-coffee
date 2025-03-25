"use client";
import Image from "next/image";
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

const formSchema = z.object({
  Email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const SignUpEmail = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-[1000px] bg-white flex items-center justify-center ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-[24px] w-[359px] h-20px">
                  Create Your Account
                </FormLabel>
                <FormDescription>
                  Connect email and set a password
                </FormDescription>
                <FormLabel className="font-medium text-[14px] w-[359px] h-20px">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                
                <FormLabel className="font-medium text-[14px] w-[359px] h-20px">
                  Password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
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
