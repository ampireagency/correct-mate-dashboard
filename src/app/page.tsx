import Contact from "@/components/ui/contact";
import ProcessSteps from "@/components/ui/process-steps";
import { features } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-8 lg:px-8 lg:pt-14">
        <div className="mx-auto flex w-full max-w-full flex-col-reverse py-12 sm:py-12 lg:flex-row lg:py-24">
          <div className="flex items-center justify-center lg:w-1/4 lg:justify-end">
            <Image
              src={"/images/smart-people.png"}
              alt="smart"
              className=""
              width={400}
              height={400}
            />
          </div>
          <div className="w-full lg:w-[75%]">
            <div className="text-center lg:pl-8 lg:text-left">
              <h1 className="text-center text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-5xl lg:leading-[4rem]">
                Revolutionize exam preparation with{" "}
                <span className="mt-0 flex justify-center rounded-xl bg-[#11791E] px-6 py-0 text-center text-white lg:inline-block lg:text-left">
                  AI-Powered Assessments
                </span>
              </h1>
              <h2 className="mt-4 text-center text-xs font-bold tracking-tight text-gray-900 sm:text-xl">
                Empower Your Students with Advanced Insights and Performance
                Analytics
              </h2>

              <p className="mt-2 text-center text-[10px] leading-normal text-gray-600 lg:mt-6 lg:text-base lg:leading-8">
                Empower your students with cutting-edge technology that provides
                advanced insights and performance analytics. Our AI-driven
                platform enhances learning by offering personalized feedback,
                detailed progress reports, and targeted practice. Transform the
                way your students prepare for exams and help them achieve their
                academic goals with precision and confidence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-center lg:gap-x-6">
                <Link
                  href="/signup"
                  className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </Link>
                <a
                  href="#contact"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Request a Demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center lg:flex lg:w-1/4">
            <Image
              className=""
              src={"/images/online-test.png"}
              alt="smart"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-center">
              <div className="lg:pr-8 lg:pt-4">
                <div className="flex flex-col items-center justify-center lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-green-500">
                    Core Features
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    About the Product
                  </p>
                  <p className="text-ce mt-6 text-lg leading-8 text-gray-600">
                    Our AI-powered exam assessment tool is designed to help
                    institutes enhance student performance through detailed
                    analytics and personalized feedback.
                  </p>

                  <dl className="mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-5 w-5 text-green-500"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <IconBlocks /> */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-bold">How it Work</h1>
          <ProcessSteps />
        </div>

        <div className="mx-auto mt-20 max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request us for free Demo
            </h2>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="#contact"
              >
                Book a Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
}
