export default function Technologies() {
  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
        <p className="text-lg text-gray-700 mb-12">We are a full-stack development team with expertise in both backend and frontend technologies, enabling us to build seamless, high-performance solutions from end to end.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend</h3>
            <p className="text-gray-700 mb-4">
              We have professional experience in Java and Kotlin.
            </p>
            <p className="text-gray-700">
              However, we are also confident in working with similar languages such as Python and C#, allowing us to adapt to diverse project requirements.
            </p>
          </div>

          {/* Frontend */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend</h3>
            <p className="text-gray-700 mb-4">
              Our team has professional experience in Javascript, Typescript, Node.js and React.
            </p>
            <p className="text-gray-700">
              We are also adaptable and feel confident in working with other frameworks such as Vue.js, Angular, and more, ensuring we can meet the unique needs of any project.
            </p>
          </div>

          {/* Infrastructure */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure</h3>
            <p className="text-gray-700">
              The team has hands-on experience with AWS and AWS CDK, enabling us to build scalable and efficient cloud solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
