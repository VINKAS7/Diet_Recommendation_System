import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import '../App.css';

export default function Login() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen Signup">
      <Card className='w-[350px]'>
        <CardHeader className="text-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid w-full gap-4'>
            <div className='flex flex-col items-start space-y-2 '>
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
            </div>
            <div className='flex flex-col items-start space-y-2'>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Login</Button>
        </CardFooter>
        <CardFooter>

        <label className='w-full  cursor-pointer hover:text-green-700 text-center	' onClick={goToSignup}>Don't have an account? Signup</label>
        </CardFooter>

      </Card>
    </div>
  );
}
