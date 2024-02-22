"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import React, { ReactNode } from "react";

function SessionProvider({ children }: Props) {
  const user = useUser();
  if (user.isSignedIn) return children;
  return <SignIn />;
}
export default SessionProvider;

type Props = { children: ReactNode };
