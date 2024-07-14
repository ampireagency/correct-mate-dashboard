const steps = [
    {
      number: 1,
      title: "Scan Student Work",
      description:
        "It pays off: saves time overall, prevents cheating, and frees your office of old exams.",
      image: "/images/scan.jpg",
    },
    {
      number: 2,
      title: "Grade Submissions",
      description:
        "Give detailed feedback while maintaining consistency with a flexible rubric.",
      image: "/images/Grade.svg",
    },
    {
      number: 3,
      title: "Send & Export Grades",
      description:
        "Send grades to students with a click or export them to your own gradebook.",
      image: "/images/Sent.svg",
    },
    {
      number: 4,
      title: "Get Detailed Analytics",
      description:
        "Get per-question and per-rubric statistics to understand how your students are doing.",
      image: "/images/analytics.svg",
    },
  ];
  
  const ProcessSteps = () => {
    return (
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <svg
            className="processSteps--desktopThroughLine"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line x1="0" x2="100" y1="1" y2="1"></line>
          </svg>
          {steps.map((step) => (
            <>
              <div
                key={step.number}
                className="text-center relative p-4 rounded-lg"
              >
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-[200px] bg-white h-[200px] rounded-full border-2 border-green-500"
                      width={500}
                      height={300}
                    />
                    <div className="absolute bottom-0 left-16 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProcessSteps;