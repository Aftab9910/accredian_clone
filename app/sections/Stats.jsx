"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900">
        Our <span className="text-blue-600">Track Record</span>
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        The Numbers Behind <span className="text-blue-600">Our Success</span>
      </p>

      {/* Stats Row */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-3">
        {/* Card 1 */}
        <div className="px-6 border-r border-gray-300">
          <div className="bg-blue-100 px-6 py-4 rounded-full inline-block">
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={10000} duration={2} separator="," />+
            </h3>
          </div>

          <p className="mt-6 text-gray-900 leading-relaxed">
            Professionals <br />
            Trained For <br />
            Exceptional Career <br />
            Success
          </p>
        </div>

        {/* Card 2 */}
        <div className="px-6 border-r border-gray-300">
          <div className="bg-blue-100 px-6 py-4 rounded-full inline-block">
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={200} duration={2} />+
            </h3>
          </div>

          <p className="mt-6 text-gray-900 leading-relaxed">
            Sessions Delivered <br />
            With Unmatched <br />
            Learning Excellence
          </p>
        </div>

        {/* Card 3 */}
        <div className="px-6">
          <div className="bg-blue-100 px-6 py-4 rounded-full inline-block">
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={5000} duration={2} separator="," />+
            </h3>
          </div>

          <p className="mt-6 text-gray-900 leading-relaxed">
            Active Learners <br />
            Engaged In <br />
            Dynamic Courses
          </p>
        </div>
      </div>
    </section>
  );
}
