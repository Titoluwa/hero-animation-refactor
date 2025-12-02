"use client"

import type React from "react"

import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import { LoadingProvider } from "@/app/context/loading-context"
import LoadingScreen from "@/components/common/loading-screen"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <LoadingProvider>
      <LoadingScreen />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </LoadingProvider>
  )
}
