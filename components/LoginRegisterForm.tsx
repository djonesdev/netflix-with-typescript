import Input from "./Input";

interface LoginRegisterFormProps {
  variant: string;
  setEmail: (value: string) => void;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  formValues: {
    name: string;
    email: string;
    password: string;
  };
  submit: (e: React.FormEvent) => void;
}

export default function LoginRegisterForm({
  variant,
  setEmail,
  setName,
  setPassword,
  formValues,
  submit,
}: LoginRegisterFormProps) {
  const { name, email, password } = formValues;
  return (
    <form onSubmit={submit}>
      <legend className="text-white text-4xl mb-8 font-semibold">
        {variant === "login" ? "Sign in" : "Register"}
      </legend>
      <div className="flex flex-col gap-4">
        {variant === "register" && (
          <Input
            id="name"
            type="text"
            label="Username"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email address or phone number"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value={variant === "login" ? "Login" : "Sign up"}
        className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
      />

      {/* <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
              <FcGoogle size={32} />
              </div>
              <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
              <FaGithub size={32} />
              </div>
            </div> */}
    </form>
  );
}
