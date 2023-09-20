'use client'
import { Button } from "@material-tailwind/react";
 
export default function Buttons() {
  return (
    <div className="flex w-max gap-4">
      <Button variant="gradient" className="bg-emerald-500 text-inherit p-2 rounded-md">O mnie</Button>
      <Button variant="gradient" className="bg-emerald-500 p-2 rounded-lg">Projekty</Button>
    </div>
  );
}