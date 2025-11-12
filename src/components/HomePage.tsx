import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-nu-purple via-nu-purple-dark to-purple-900 pt-16 pb-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="pt-20 pb-16 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Back to Teams
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto">
              Our hybrid work model
            </p>
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 fill-current text-gray-50"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Reminder Block */}
          <div className="bg-white border-l-4 border-nu-purple rounded-lg shadow-sm p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-nu-purple"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Lembrete
            </h3>
            <p className="text-gray-700">
              Este portal foi desenvolvido para facilitar o acesso às informações sobre o
              modelo híbrido de trabalho e a colaboração entre equipes. Use os cartões abaixo
              para navegar pelas diferentes seções.
            </p>
          </div>

          {/* Get Started Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h2>
            <p className="text-gray-600 mb-8">
              Explore as seções principais para começar
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: About Back to Teams */}
              <div className="bg-gradient-to-br from-nu-purple to-nu-purple-dark rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-4">
                    About Back to Teams
                  </h3>
                  <p className="text-purple-100 mb-6 flex-grow">
                    Saiba mais sobre nosso modelo de trabalho híbrido
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#overview"
                      className="flex items-center text-white hover:text-purple-200 transition-colors group"
                    >
                      <span className="mr-2">Overview</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#guidelines"
                      className="flex items-center text-white hover:text-purple-200 transition-colors group"
                    >
                      <span className="mr-2">Guidelines</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#faq"
                      className="flex items-center text-white hover:text-purple-200 transition-colors group"
                    >
                      <span className="mr-2">FAQ</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: TA Report */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-gray-100">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-nu-purple rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">TA Report</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Visualize relatórios de presença e análises de equipe
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#ta-reports"
                      className="flex items-center text-nu-purple hover:text-nu-purple-dark transition-colors group"
                    >
                      <span className="mr-2 font-medium">View Reports</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#analytics"
                      className="flex items-center text-nu-purple hover:text-nu-purple-dark transition-colors group"
                    >
                      <span className="mr-2 font-medium">Analytics</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Positions Collocation */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-gray-100">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-nu-purple rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Positions Collocation
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Coordene a presença das equipes no escritório
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#positions-collocation"
                      className="flex items-center text-nu-purple hover:text-nu-purple-dark transition-colors group"
                    >
                      <span className="mr-2 font-medium">Schedule</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#team-view"
                      className="flex items-center text-nu-purple hover:text-nu-purple-dark transition-colors group"
                    >
                      <span className="mr-2 font-medium">Team View</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Resources */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer border-2 border-gray-100">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-nu-purple rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Resources</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Documentação e recursos adicionais
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#documentation"
                      className="flex items-center text-nu-purple hover:text-nu-purple-dark transition-colors group"
                    >
                      <span className="mr-2 font-medium">Documentation</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#support"
                      className="flex items-center text-nu-purple hover:text-nu-purple-dark transition-colors group"
                    >
                      <span className="mr-2 font-medium">Support</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

