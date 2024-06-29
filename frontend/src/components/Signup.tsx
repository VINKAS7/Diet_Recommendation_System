import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "@/components/ui/button"

export default function Signup() {

    return (
      <>
      <Card className='w-[350px]'>
  <CardHeader>
    <CardTitle>Register</CardTitle>
    <CardDescription>Fill out the details below</CardDescription>
  </CardHeader>
  <CardContent>
    <div className='grid gap-1 items-start space-y-2'>
    <Label htmlFor="email">Username</Label>
    <Input />
    </div>
  
    <div className='grid gap-1 items-start space-y-2 mt-2' >
    <Label htmlFor="email">Email</Label>
    <Input />
    </div>

    <div className='grid gap-1 items-start space-y-2 mt-2' >
    <Label htmlFor="email">Password</Label>
    <Input />
    </div>
  </CardContent>
  <CardFooter>
  <Button variant="outline">Button</Button>

  </CardFooter>
</Card>
      </>
    )
  }
  
  