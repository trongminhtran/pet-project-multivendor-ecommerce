import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-blue-500 font-barlow">Welcome to the course !</h1>
      <Button variant="destructive">Click here</Button>
    </div>
  );
}
