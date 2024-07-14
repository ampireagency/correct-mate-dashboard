import Contact from "@/components/ui/contact";
import ProcessSteps from "@/components/ui/process-steps";
import { features } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-8 lg:pt-14 lg:px-8">
        <div className="mx-auto flex max-w-full flex-col-reverse lg:flex-row w-full py-12 sm:py-12 lg:py-24">
          <div className="flex items-center justify-center lg:justify-end lg:w-1/4">
            <Image
              src={"/images/smart-people.png"}
              alt="smart"
              className=""
              width={400}
              height={400}
            />
          </div>
          <div className="lg:w-[75%] w-full">
            <div className="text-center lg:text-left lg:pl-8">
              <h1 className="text-3xl text-center leading-normal lg:leading-[4rem] font-bold tracking-tight text-gray-900 sm:text-5xl">
                Revolutionize exam preparation with{" "}
                <span className="bg-[#11791E] text-center lg:text-left lg:inline-block flex justify-center px-6 py-0 text-white rounded-xl mt-0">
                  AI-Powered Assessments
                </span>
              </h1>
              <h2 className="text-xs font-bold text-center tracking-tight text-gray-900 sm:text-xl mt-4">
                Empower Your Students with Advanced Insights and Performance
                Analytics
              </h2>

              <p className="lg:mt-6 mt-2 text-[10px] text-center lg:text-base leading-normal lg:leading-8 text-gray-600">
                Empower your students with cutting-edge technology that provides
                advanced insights and performance analytics. Our AI-driven
                platform enhances learning by offering personalized feedback,
                detailed progress reports, and targeted practice. Transform the
                way your students prepare for exams and help them achieve their
                academic goals with precision and confidence.
              </p>
              <div className="mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-4 lg:gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Request a Demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/4  hidden lg:block">
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
            <div className="mx-auto flex justify-center items-center max-w-2xl ">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg flex justify-center items-center flex-col">
                  <h2 className="text-base font-semibold leading-7 text-green-500">
                    Core Features
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    About the Product
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 text-ce">
                    Our AI-powered exam assessment tool is designed to help
                    institutes enhance student performance through detailed
                    analytics and personalized feedback.
                  </p>

                  <dl className="mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9 ">
                        <dt className="inline font-semibold text-gray-900 ">
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
          <h1 className="text-3xl font-bold text-center mb-8">How it Work</h1>
          <ProcessSteps />
        </div>

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
          <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Request us for free Demo
            </h2>
            <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Sign up for exclusive access to events, resources, and updates on
              our AI-powered exam preparation assessment tool.
            </h3>
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