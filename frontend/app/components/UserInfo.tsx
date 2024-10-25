// app/components/UserInfo.tsx
"use client"
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="text-white">
      {session ? (
        <p>Welcome, {session.user?.name}</p>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
};

export default UserInfo;
