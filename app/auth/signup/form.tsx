"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthService } from "@/integration/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRequest } from "ahooks";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string({ message: "Enter a strong password" }),
});

type UserFormValue = z.infer<typeof formSchema>;

const defaultValues = {
  email: "demo@gmail.com",
};

export const SignUpForm = () => {
  const { runAsync } = useRequest(AuthService.signUp, {
    manual: true,
  });

  const [loading, startTransition] = useTransition();

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    startTransition(async () => {
      const result = await runAsync({
        email: data.email,
        password: data.password,
      });
      if (!result.data) {
        toast.error("Could not sign up");
        return;
      }

      const loginResult = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (loginResult?.error) {
        toast.error("Email or password is incorrect");
        return;
      }
      toast.success("Registered successfully!");
      redirect("/dashboard/overall");
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={loading}
            loading={loading}
            className="ml-auto w-full"
            type="submit"
          >
            Signup
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </>
  );
};
