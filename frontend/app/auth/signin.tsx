import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white p-4 rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
