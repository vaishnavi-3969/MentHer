import { SignUp } from "@clerk/nextjs";

export async function generateStaticParams() {
  return [1];
}

export default function Page({ params }) {
  if (params.includes(1)) {
    return <></>
  }
  return <SignUp />;
}