"use client";

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session }: any = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/sign-in' });
  };
  return (
    <div className={cn("h-full w-full")} >
      {session && <Button type="button" onClick={() => handleSignOut()} >Sign Out</Button>}
    </div>
  )
}
