
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                JD
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{"{{candidate_name}}"}</h1>
                <p className="text-blue-100 text-lg mb-4">AI Skills Analysis Report</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm">AI Readiness Score: </span>
                    <span className="font-bold text-xl">{"{{score}}"}/100</span>
                  </div>
                  <div className="text-blue-100 text-sm">
                    Generated on {"{{report_date}}"}
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
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {"{{skill_level}}"}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{"{{score_description}}"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">AI Readiness Score</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
                  </div>
                  <span className="absolute right-0 top-5 text-sm text-gray-600">{"{{score}}"}/100</span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Assessment */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skill Assessment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Technical Skills
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Python</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">85</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">78</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">SQL</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">72</span>
                  </div>
                </div>
              </div>

              {/* AI/ML Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  AI/ML Skills
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Neural Networks</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">68</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Machine Learning</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">80</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Data Analysis</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">82</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skill Gaps */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skill Gaps</h2>
            
            <div className="space-y-6">
              {/* Critical Gaps */}
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Critical Areas
                </h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-red-800">Deep Learning Frameworks</h4>
                  <p className="text-red-700 mt-1">Limited experience with TensorFlow and PyTorch for complex neural network architectures.</p>
                  <span className="inline-block mt-2 bg-red-200 text-red-800 px-2 py-1 rounded text-xs">High Impact</span>
                </div>
              </div>

              {/* Development Areas */}
              <div>
                <h3 className="text-lg font-semibold text-orange-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Development Areas
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-orange-800">Cloud Deployment</h4>
                    <p className="text-orange-700 mt-1 text-sm">Need to learn AWS/Azure for ML model deployment.</p>
                    <span className="inline-block mt-2 bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">Medium Priority</span>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-orange-800">MLOps</h4>
                    <p className="text-orange-700 mt-1 text-sm">Understanding of ML pipeline automation and monitoring.</p>
                    <span className="inline-block mt-2 bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">Medium Priority</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommendations</h2>
            
            <div className="space-y-6">
              {/* Short Term */}
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Short Term (1-3 months)
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Complete Deep Learning Specialization</h4>
                  <p className="text-green-700 mt-1">Focus on neural networks and TensorFlow fundamentals.</p>
                  <p className="text-green-600 text-sm mt-2"><strong>Resources:</strong> Coursera, Fast.ai</p>
                </div>
              </div>

              {/* Medium Term */}
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Medium Term (3-6 months)
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Build Cloud ML Projects</h4>
                  <p className="text-blue-700 mt-1">Deploy machine learning models on AWS or Google Cloud Platform.</p>
                  <p className="text-blue-600 text-sm mt-2"><strong>Resources:</strong> AWS ML Certification, Google Cloud ML Engineer</p>
                </div>
              </div>

              {/* Long Term */}
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Long Term (6+ months)
                </h3>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Specialize in Computer Vision or NLP</h4>
                  <p className="text-purple-700 mt-1">Choose a specialized area and become an expert in that domain.</p>
                  <p className="text-purple-600 text-sm mt-2"><strong>Resources:</strong> Stanford CS231n, Stanford CS224n</p>
                </div>
              </div>
            </div>
          </section>

          {/* Career Paths */}
          <section className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Path Suggestions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">Machine Learning Engineer</h3>
                <p className="text-blue-700 text-sm mb-4">Design and implement ML systems for production environments.</p>
                <div className="text-xs text-blue-600">
                  <strong>Next Steps:</strong> Master MLOps, cloud platforms, and model optimization.
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-800 mb-3">Data Scientist</h3>
                <p className="text-green-700 text-sm mb-4">Extract insights from data using statistical analysis and ML.</p>
                <div className="text-xs text-green-600">
                  <strong>Next Steps:</strong> Strengthen statistics, business acumen, and communication skills.
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-3">AI Research Scientist</h3>
                <p className="text-purple-700 text-sm mb-4">Conduct research to advance the field of artificial intelligence.</p>
                <div className="text-xs text-purple-600">
                  <strong>Next Steps:</strong> Pursue advanced degree, publish papers, join research labs.
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-50 p-6 text-center">
            <p className="text-gray-500 text-sm">
              AI Skills Analysis Report • Generated on {"{{report_date}}"} • Powered by AI Career Analytics
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
