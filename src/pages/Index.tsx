
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                SJ
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">Sarah Johnson</h1>
                <p className="text-blue-100 text-lg mb-1">Marketing Manager → Digital Transformation Lead</p>
                <p className="text-blue-200 text-sm mb-4">AI Skills Analysis Report</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm">Overall Readiness Score: </span>
                    <span className="font-bold text-xl">68/100</span>
                  </div>
                  <div className="text-blue-100 text-sm">
                    Generated on June 4, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Intermediate - Ready for Growth
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Strong foundation in communication and business skills with excellent growth potential. 
                  Focus on developing data analysis and digital tools proficiency to successfully transition 
                  into digital transformation leadership roles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Overall Readiness Score</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-gradient-to-r from-orange-500 to-blue-600 h-4 rounded-full transition-all duration-300" style={{width: '68%'}}></div>
                  </div>
                  <span className="absolute right-0 top-5 text-sm text-gray-600">68/100</span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Assessment */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skill Assessment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Digital Tools */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Digital Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Google Analytics</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">70</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Social Media Platforms</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">85</span>
                  </div>
                </div>
              </div>

              {/* Business Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Business Skills
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Stakeholder Management</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">78</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Strategic Planning</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">72</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Competency Breakdown */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Competency Breakdown</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div>
                  <span className="font-semibold text-gray-800">Communication</span>
                  <p className="text-sm text-gray-600 mt-1">Strong written and verbal communication skills</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">88</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div>
                  <span className="font-semibold text-gray-800">Analytical Thinking</span>
                  <p className="text-sm text-gray-600 mt-1">Strong problem-solving and logical reasoning</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">82</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div>
                  <span className="font-semibold text-gray-800">Digital Literacy</span>
                  <p className="text-sm text-gray-600 mt-1">Proficient with digital tools and platforms</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">75</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div>
                  <span className="font-semibold text-gray-800">Business Acumen</span>
                  <p className="text-sm text-gray-600 mt-1">Understanding of business strategy and operations</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">70</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <div>
                  <span className="font-semibold text-gray-800">Project Management</span>
                  <p className="text-sm text-gray-600 mt-1">Planning and executing projects effectively</p>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">65</span>
              </div>
            </div>
          </section>

          {/* Development Areas */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Development Areas</h2>
            
            <div className="space-y-6">
              {/* Critical Gaps */}
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  High Priority Areas
                </h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-red-800">Data Analysis</h4>
                  <p className="text-red-700 mt-1">Currently at Basic level, needs to reach Intermediate level.</p>
                  <p className="text-red-600 text-sm mt-2">Critical for data-driven decision making in digital transformation roles.</p>
                  <span className="inline-block mt-2 bg-red-200 text-red-800 px-2 py-1 rounded text-xs">High Impact</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Recommendations</h2>
            
            <div className="space-y-6">
              {/* Learning Paths */}
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Recommended Courses
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Data Literacy Fundamentals</h4>
                  <p className="text-green-700 mt-1">Develop foundational data analysis skills for marketing insights.</p>
                  <p className="text-green-600 text-sm mt-2"><strong>Provider:</strong> Coursera • <strong>Duration:</strong> 4 weeks • <strong>Priority:</strong> High</p>
                </div>
              </div>

              {/* Practical Exercises */}
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Practical Applications
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Lead a data-driven marketing campaign</h4>
                    <p className="text-blue-700 mt-1 text-sm">Apply analytical skills in real-world marketing scenarios.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Create a dashboard for key performance metrics</h4>
                    <p className="text-blue-700 mt-1 text-sm">Build hands-on experience with data visualization tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Alignment & Success Metrics */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Market Alignment & Success Metrics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">In-Demand Skills</h3>
                <div className="space-y-2">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">Digital Marketing Analytics</div>
                  <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">Customer Journey Mapping</div>
                  <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">Content Strategy</div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-4 mt-6">Salary Benchmarks</h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Current Role</span>
                    <span className="font-semibold">$75,000 - $90,000</span>
                  </div>
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-600">Target Role</span>
                    <span className="font-semibold text-green-700">$95,000 - $120,000</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Success Milestones</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-sm">Complete 2 digital transformation courses</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-sm">Lead 1 data-driven project</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-sm">Achieve certification in marketing analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Career Path Suggestions */}
          <section className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Path Suggestions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">Digital Transformation Lead</h3>
                <p className="text-blue-700 text-sm mb-4">Drive organizational change through digital initiatives and data-driven strategies.</p>
                <div className="text-xs text-blue-600">
                  <strong>Next Steps:</strong> Master data analytics, digital project management, and change leadership.
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-800 mb-3">Marketing Analytics Manager</h3>
                <p className="text-green-700 text-sm mb-4">Lead data-driven marketing strategies and performance optimization.</p>
                <div className="text-xs text-green-600">
                  <strong>Next Steps:</strong> Develop advanced analytics skills and marketing automation expertise.
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-3">Customer Experience Manager</h3>
                <p className="text-purple-700 text-sm mb-4">Design and optimize customer journeys using data insights and digital tools.</p>
                <div className="text-xs text-purple-600">
                  <strong>Next Steps:</strong> Learn customer journey mapping, UX principles, and experience analytics.
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-50 p-6 text-center">
            <p className="text-gray-500 text-sm">
              AI Skills Analysis Report • Generated on June 4, 2025 • Powered by AI Career Analytics
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
