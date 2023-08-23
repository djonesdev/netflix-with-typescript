import { useState, useCallback } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router'

import LoginRegisterForm from "@/components/LoginRegisterForm";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState<string>("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant: string) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      router.push('/profiles');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch (error) {
        console.log(error);
    }
  }, [email, name, password, login]);
  

  const submit = (e: React.FormEvent) => (variant === "login" ? login() : register(e))

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Netflix logo" className="h-12" />
        </nav>
        <main className="flex justify-center">
          <section className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/3 lg:max-width-md rounded-md w-full">
            <LoginRegisterForm
              variant={variant}
              setEmail={setEmail}
              setName={setName}
              setPassword={setPassword}
              formValues={{
                name,
                email,
                password,
              }}
              submit={submit}
            />
            <article>
              <p className="text-neutral-500 mt-12">
                First time using Netflix?
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  Create an account
                </span>
              </p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
