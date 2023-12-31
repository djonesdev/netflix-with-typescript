import { NextPageContext } from "next/types";
import { signOut, getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h2>Netflix with typescript</h2>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        signOut
      </button>
    </>
  );
}
