import Image from "next/image";
import Link from "next/link";
export default function SignUpPage() {
  return (
    <main className="flex flex-col md:flex-row-reverse md:h-screen">
      <section className="flex items-start w-full px-8 mx-auto md:px-0 md:items-center md:w-1/3">
        <div className="flex flex-row items-center w-full max-w-sm py-8 mx-auto md:mx-0 my-auto min-w-min relative md:-left-2.5 pt-8 md:py-8 transform origin-left bg-white text-black space-x-2">
          <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
          <Image
            src={"/Synth.svg"}
            alt="Synth"
            width={50}
            height={50}
            className="py-2"
          />
        </div>
      </section>
      <section className="justify-center px-8 md:px-0 md:flex md:w-2/3 md:border-r">
        <div
          className="w-full max-w-sm py-8 mx-auto my-auto min-w-min md:py-16
         md:w-7/12"
        >
          <h1 className="font-semibold text-lg">Sign up</h1>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href={"/sign-in"} className="text-blue-600 font-medium">
              Sign in.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
