'use client'

import { ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"



export default function Error({
  error
}: {
  error: Error
}) {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <Lock className="text-green-500" size={30} />
      <h2 className="text-2xl font-medium text-zinc-200">{error.message}</h2>
      <Link href="/" className="bg-slate-100 py-2 px-3 w-36 text-zinc-800 rounded flex items-center gap-4 justify-start">
        <ArrowLeft size={20} />
        Go Back
      </Link>
    </div>
  )
}