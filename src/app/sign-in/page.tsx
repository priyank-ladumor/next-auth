"use client"

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const SignIn = (): any => {
    const { data: session } = useSession()
    return (
        <div>
            {session
                ? redirect('/') :
                <div>
                    <Button onClick={() => signIn("google")} >sign in with google</Button>
                    <Button onClick={() => signIn("github")} >sign in with github</Button>
                </div>
            }
        </div>
    )
}

export default SignIn
