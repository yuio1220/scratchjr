"use client"
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <div className="mt-6">
        <Button onClick={()=>router.push("/tutorial")}>れんしゅう</Button>
        <Button onClick={()=>router.push("/quiz")}>もんだい</Button>
      </div>
    </div>
  );
}
