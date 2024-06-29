import React from 'react';
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
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
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
            <Button  className='w-full'>Sign up</Button>
          </CardFooter>
        </Card>
      </div>
     
    </>
  );
}
