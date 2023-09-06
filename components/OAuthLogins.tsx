import React from "react";
import { SignInOptions } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface OAuthLoginsProps {
  signIn: (signInOption: string, options?: SignInOptions) => void;
}

function OAuthLogins({ signIn }: OAuthLoginsProps) {
  return (
    <div className="flex flex-row items-center gap-4 mt-8 justify-center">
      <button
        aria-label="Google Login Button"
        onClick={() => signIn("google", { callbackUrl: "/profiles" })}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
      >
        <FcGoogle size={32} />
      </button>
      <button
        aria-label="Github Login Button"
        onClick={() => signIn("github", { callbackUrl: "/profiles" })}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
      >
        <FaGithub size={32} />
      </button>
    </div>
  );
}

export default OAuthLogins;
