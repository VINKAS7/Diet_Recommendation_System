import { useNavigate } from 'react-router-dom';


import {
      Table,
      TableBody,
      TableCaption,
      TableHead,
      TableHeader,
      TableRow,
    } from "@/components/ui/table"

export default function HomeFunction(){

    <Table>
  <TableCaption>Enter Your Details of Diet</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Categories</TableHead>
      
      <TableHead className="text-right">Food Details</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <button className='font-medium'>Enter food name</button>
      <button className='text-right'>Enter Food name</button>
      <button className='text-right'>Enter Food Name</button>
    </TableRow>
  </TableBody>
</Table>
}

    