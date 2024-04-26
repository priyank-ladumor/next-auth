"use client"

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const MemberClient = () => {
  const { data: session } : any = useSession()
  return (
    <>
      {session ?
        <h1>Welcome , {session.user.email} client side user</h1> :
        // <>
        //   <Button onClick={() => signIn("google")} >sign in with google</Button>
        //   <Button onClick={() => signIn("github")} >sign in with github</Button>
        // </>
        redirect("/sign-in")
      }
    </>
  )
}

export default MemberClient
