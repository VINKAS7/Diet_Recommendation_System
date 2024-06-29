import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import '../App.css';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      console.log('Logged in successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center h-screen bg">
      <Card className='w-[350px]'>
        <CardHeader className="text-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='grid w-full gap-4'>
              <div className='flex flex-col items-start space-y-2 '>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className='flex flex-col items-start space-y-2'>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={formData.password} onChange={handleChange} />
              </div>
            </div>
            <CardFooter>
              <Button className='w-full mt-5' type="submit">Login</Button>
            </CardFooter>
          </form>
        </CardContent>
        <CardFooter>
          <label className='w-full cursor-pointer hover:text-green-700 text-center' onClick={goToSignup}>Don't have an account? Signup</label>
        </CardFooter>
      </Card>
    </div>
  );
}
