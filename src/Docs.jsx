import React from "react";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Calendar, 
  Zap,
  AlertCircle,
  CheckCircle,
  Code2,
  Layers,
  Target,
  GitBranch,
  Activity
} from "lucide-react";

export default function Docs({ onBack }) {
  const sections = [
    {
      id: "intro",
      title: "What is SAP Job Scheduling?",
      icon: BookOpen,
      content: `SAP Job Scheduling Service is a cloud-native solution that enables you to define and manage recurring or scheduled tasks in your SAP Business Technology Platform applications. It provides a robust cron-based scheduling mechanism for automating business processes, data synchronization, batch processing, and maintenance tasks.`
    },
    {
      id: "xscron",
      title: "Understanding XS Cron Format",
      icon: Code2,
      content: `SAP XS Advanced uses an extended cron format with seven fields instead of the traditional five. This provides more granular control over job execution timing, particularly useful for enterprise applications requiring precise scheduling.`
    },
    {
      id: "format",
      title: "The Seven-Field Format",
      icon: Layers,
      content: `Unlike standard Unix cron (which uses 5 fields), SAP XS Cron uses 7 fields in this order: Year, Month, Day of Month, Day of Week, Hour, Minute, and Second. This allows you to specify exact execution times down to the second and even constrain jobs to specific years.`
    }
  ];

  const fieldDetails = [
    {
      position: 1,
      name: "Year",
      range: "1970-2099 or *",
      description: "Specifies a specific year or * for any year. Useful for creating time-limited scheduled jobs.",
      examples: ["2026 (only in year 2026)", "* (every year)"]
    },
    {
      position: 2,
      name: "Month",
      range: "1-12 or *",
      description: "Numeric month value where 1 = January, 12 = December. Use * to run in all months.",
      examples: ["3 (March only)", "* (every month)", "1,6,12 (Jan, Jun, Dec)"]
    },
    {
      position: 3,
      name: "Day of Month",
      range: "1-31 or *",
      description: "Day of the month. Be careful with months having fewer than 31 days.",
      examples: ["1 (first day)", "15 (mid-month)", "* (every day)"]
    },
    {
      position: 4,
      name: "Day of Week",
      range: "sun-sat or *",
      description: "Three-letter day abbreviation. Multiple days can be combined with commas.",
      examples: ["mon (Mondays)", "mon,wed,fri (specific days)", "* (every day)"]
    },
    {
      position: 5,
      name: "Hour",
      range: "0-23 or *",
      description: "24-hour format where 0 = midnight, 23 = 11 PM.",
      examples: ["0 (midnight)", "12 (noon)", "*/2 (every 2 hours)"]
    },
    {
      position: 6,
      name: "Minute",
      range: "0-59 or *",
      description: "Minute of the hour.",
      examples: ["0 (on the hour)", "30 (half past)", "*/15 (every 15 min)"]
    },
    {
      position: 7,
      name: "Second",
      range: "0-59 or *",
      description: "Second of the minute. Setting this to 20 helps prevent system overload.",
      examples: ["0 (top of minute)", "20 (recommended)", "*/30 (every 30 sec)"]
    }
  ];

  const operators = [
    {
      symbol: "*",
      name: "Asterisk (Wildcard)",
      description: "Matches any value for that field. Essential for flexible scheduling.",
      example: "* * * * * * 0 runs every minute at 0 seconds"
    },
    {
      symbol: "*/n",
      name: "Step Values",
      description: "Runs at every nth interval. Commonly used for repeated execution.",
      example: "* * * * */2 0 20 runs every 2 hours at 00:20"
    },
    {
      symbol: ",",
      name: "List Separator",
      description: "Specifies multiple specific values.",
      example: "* * * mon,wed,fri 9 0 20 runs Mon, Wed, Fri at 9:00:20"
    },
    {
      symbol: "-",
      name: "Range",
      description: "Defines a range of values (inclusive).",
      example: "* 1-3 * * 10 0 20 runs in Jan-Mar at 10:00:20 daily"
    }
  ];

  const useCases = [
    {
      title: "Data Synchronization",
      icon: Activity,
      description: "Sync data between systems at regular intervals",
      pattern: "* * * * */1 0 20",
      explanation: "Every hour at 20 seconds past the hour"
    },
    {
      title: "Daily Reports",
      icon: Target,
      description: "Generate end-of-day reports for business intelligence",
      pattern: "* * * * 23 30 20",
      explanation: "Every day at 11:30:20 PM"
    },
    {
      title: "Weekly Maintenance",
      icon: GitBranch,
      description: "Perform system cleanup and optimization tasks",
      pattern: "* * * sun 2 0 20",
      explanation: "Every Sunday at 2:00:20 AM"
    },
    {
      title: "Monthly Archival",
      icon: Layers,
      description: "Archive old records on the first day of each month",
      pattern: "* * 1 * 1 0 20",
      explanation: "First day of every month at 1:00:20 AM"
    }
  ];

  const bestPractices = [
    {
      type: "success",
      title: "Use Second Offset",
      description: "Set seconds to 20 to avoid system overload when many jobs trigger at :00"
    },
    {
      type: "success",
      title: "Be Timezone Aware",
      description: "SAP Job Scheduler uses UTC by default. Plan your schedules accordingly"
    },
    {
      type: "success",
      title: "Test Thoroughly",
      description: "Validate cron expressions before deploying to production environments"
    },
    {
      type: "warning",
      title: "Avoid Too Frequent",
      description: "Sub-minute intervals can overload systems. Consider queue-based alternatives"
    },
    {
      type: "warning",
      title: "Consider Month Lengths",
      description: "Day 31 won't trigger in months with fewer days (Feb, Apr, Jun, Sep, Nov)"
    },
    {
      type: "warning",
      title: "Monitor Failed Jobs",
      description: "Implement logging and alerting for job execution failures"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-20 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-indigo-700 font-semibold transition-all hover:gap-3 bg-slate-100 hover:bg-indigo-50 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-200 shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Generator</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-3 rounded-2xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600">
                Documentation
              </h1>
              <p className="text-xs text-slate-500 font-medium">SAP XS Cron Complete Guide</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative z-10">
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl font-black mb-4">
                SAP XS Cron Scheduling Guide
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed font-medium">
                Master the art of scheduling automated jobs in SAP Business Technology Platform. 
                This comprehensive guide covers everything from basic syntax to advanced scheduling patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => (
            <div key={section.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-slate-200/60 p-6 hover:shadow-xl transition-all duration-300 hover:border-indigo-200">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Field Details */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-slate-200/60 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 px-8 py-6 border-b-2 border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-indigo-600" />
              Cron Field Reference
            </h2>
            <p className="text-sm text-slate-600 mt-2">Detailed explanation of each position in the 7-field format</p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {fieldDetails.map((field) => (
                <div key={field.position} className="border-l-4 border-indigo-600 bg-gradient-to-r from-indigo-50/50 to-transparent pl-6 pr-6 py-5 rounded-r-xl hover:from-indigo-50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/30">
                        {field.position}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{field.name}</h3>
                        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                          {field.range}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 mb-3 leading-relaxed">{field.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {field.examples.map((example, idx) => (
                          <span key={idx} className="text-xs font-mono bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 shadow-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operators */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-slate-200/60 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-6 border-b-2 border-emerald-200">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Code2 className="w-7 h-7 text-emerald-600" />
              Special Characters & Operators
            </h2>
            <p className="text-sm text-slate-600 mt-2">Symbols that give you powerful scheduling flexibility</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operators.map((op, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl p-6 border-2 border-emerald-200/60 hover:border-emerald-300 transition-all hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-black font-mono text-emerald-700 bg-white px-4 py-2 rounded-xl border-2 border-emerald-300 shadow-sm">
                      {op.symbol}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{op.name}</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">{op.description}</p>
                  <div className="bg-white/80 border border-emerald-200 rounded-xl px-4 py-2.5">
                    <p className="text-xs text-slate-500 font-semibold mb-1">Example:</p>
                    <p className="text-sm font-mono text-slate-800 font-medium">{op.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-World Use Cases */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-slate-200/60 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b-2 border-purple-200">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Zap className="w-7 h-7 text-purple-600" />
              Real-World Use Cases
            </h2>
            <p className="text-sm text-slate-600 mt-2">Common scheduling patterns for enterprise applications</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50/50 rounded-2xl p-6 border-2 border-purple-200/60 hover:border-purple-300 transition-all hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <useCase.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{useCase.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                    <p className="text-xs text-purple-700 font-bold uppercase tracking-wide mb-2">Cron Pattern</p>
                    <p className="font-mono text-base font-bold text-slate-900 mb-3 break-all">{useCase.pattern}</p>
                    <p className="text-xs text-slate-600 bg-purple-50 px-3 py-2 rounded-lg font-medium">
                      {useCase.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-slate-200/60 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b-2 border-amber-200">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-600" />
              Best Practices & Tips
            </h2>
            <p className="text-sm text-slate-600 mt-2">Professional recommendations for production environments</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {bestPractices.map((practice, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                    practice.type === "success"
                      ? "bg-gradient-to-br from-green-50 to-emerald-50/50 border-green-300 hover:border-green-400"
                      : "bg-gradient-to-br from-amber-50 to-orange-50/50 border-amber-300 hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      practice.type === "success" ? "bg-green-600" : "bg-amber-600"
                    }`}>
                      {practice.type === "success" ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{practice.title}</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{practice.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/50 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Cron Generator
          </button>
        </div>
      </main>
    </div>
  );
}
