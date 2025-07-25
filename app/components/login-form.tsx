import { cn } from "~/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router";

import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
type LoginFormInputs = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  isSignup = false,
  ...props
}: React.ComponentProps<"div"> & { isSignup?: boolean }) {
  const { signIn } = useAuthActions();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const result = await signIn("password", {
        ...data,
        flow: isSignup ? "signUp" : "signIn",
      });
      toast.success("Login successful", {
        description: "You are now logged in.",
      });
    } catch (error) {
      const err = error as Error;
      if (err?.stack?.includes("InvalidAccountId")) {
        toast("Account not found", {
          description:
            "Please check your email and password or Signup for a new account.",
        });
      } else if (err?.stack?.includes("InvalidSecret")) {
        // Show "Incorrect password" message
        toast("Incorrect password", {
          description: "Please check your password and try again.",
        });
      } else if (err?.stack?.includes("TooManyFailedAttempts")) {
        // Show "Too many failed attempts" message
        toast("Too many failed attempts", {
          description: "Please try again later.",
        });
      } else if (err?.stack?.includes("Invalid password")) {
        // Show "Invalid password" message
        toast("Invalid password", {
          description: "Please check your password and try again.",
        });
      }
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {isSignup
              ? "Signup to access your new account"
              : "Login to your account"}{" "}
          </CardTitle>
          <CardDescription>
            {isSignup
              ? "Enter your email below to create a new account"
              : "Enter your email below to login to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isSignup ? "Create Account" : "Login"}
                </Button>
              </div>

              {isSignup ? (
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
