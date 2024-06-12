import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


// Componente Login con validación
const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});
  
    const validateEmail = (email: string) => {
      if (!email) {
        return 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        return 'Email address is invalid';
      }
      return '';
    };
  
    const validatePassword = (password: string) => {
      if (!password) {
        return 'Password is required';
      } else if (password.length < 6) {
        return 'Password must be at least 6 characters';
      } else if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter';
      } else if (!/[a-z]/.test(password)) {
        return 'Password must contain at least one lowercase letter';
      } else if (!/[0-9]/.test(password)) {
        return 'Password must contain at least one number';
      }
      return '';
    };
  
    const validateConfirmPassword = (password: string, confirmPassword: string) => {
      if (confirmPassword !== password) {
        return 'Passwords do not match';
      }
      return '';
    };
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(newEmail),
      }));
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(newPassword),
      }));
    };
  
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newConfirmPassword = e.target.value;
      setConfirmPassword(newConfirmPassword);
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: validateConfirmPassword(password, newConfirmPassword),
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const emailError = validateEmail(email);
      const passwordError = validatePassword(password);
      const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
  
      if (emailError || passwordError || confirmPasswordError) {
        setErrors({
          email: emailError,
          password: passwordError,
          confirmPassword: confirmPasswordError,
        });
        return;
      }
  
      console.log('Form submitted:', { email, password, confirmPassword });
    };
  
    return (
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[900px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to create a new account
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={handleEmailChange}
                //   error={errors.email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                //   error={errors.password}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                //   error={errors.confirmPassword}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline">
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-muted">
          <img
            src="/images/homeguard.jpg"
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    );
  };
  
  export default Signup;