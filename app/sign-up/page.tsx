import Image from "next/image";
import Link from "next/link";
export default function SignUpPage() {
  return (
    <main className="flex flex-col px-8 h-screen">
      <section className="flex py-8 w-full mx-auto">
        <div className="flex items-center space-x-4">
          <Image src={"/logo.svg"} alt="Logo" width={55} height={55} />
          <Image src={"/Synth.svg"} alt="Synth" width={70} height={70} />
        </div>
      </section>
      <section>
        <h1 className="font-bold">Sign Up</h1>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-blue-600">
            Sign in.
          </Link>
        </p>
      </section>
    </main>
  );
}
