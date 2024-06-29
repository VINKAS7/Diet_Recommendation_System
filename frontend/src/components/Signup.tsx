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

export default function Signup() {
  const navigate = useNavigate();

  
  const goToHome = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen Signup">
      <Card className='w-[350px]'>
        <CardHeader className="text-center">
          <CardTitle>Register</CardTitle>
          <CardDescription>Fill out the details below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid w-full gap-4'>
            <div className='flex flex-col items-start space-y-2 '>
              <Label htmlFor="username">Username</Label>
              <Input id="username" />
            </div>
            <div className='flex flex-col items-start space-y-2'>
              <Label htmlFor="email">Email</Label>
              <Input id="email"/>
            </div>
            <div className='flex flex-col items-start space-y-2'>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className='w-full'onClick={goToHome}>Sign up</Button>
        </CardFooter>
        <CardFooter>
          <label className='w-full  cursor-pointer hover:text-green-700 text-center	' onClick={goToLogin}>Already have an account? Login</label>
        </CardFooter>
      </Card>
    </div>
  );
}
