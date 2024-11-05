"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthService } from "@/integration/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRequest } from "ahooks";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { runAsync } = useRequest(AuthService.signUp, {
    manual: true,
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const [loading, startTransition] = useTransition();

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: UserFormValue) => {
    startTransition(async () => {
      try {
        const result = await runAsync({
          email: data.email,
          password: data.password,
        });

        if (result?.body) {
          toast.success("Sign up successful");
          router.push("/auth/login");
        }

        // toast.success("Signed in successfully");
        // router.push("/dashboard");
      } catch (error) {
        toast.error("Something went wrong");
      }
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
            render={({ field: { value = "", ...fieldProps } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={value}
                    {...fieldProps}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field: { value = "", ...fieldProps } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={value}
                    {...fieldProps}
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
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div> */}
    </>
  );
};
