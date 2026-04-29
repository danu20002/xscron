import React, { useMemo, useState } from "react";
import { 
  Clock, 
  CalendarDays, 
  Calendar,
  Copy, 
  CheckCircle2, 
  Info, 
  Settings2,
  Terminal,
  RotateCcw,
  BookOpen,
  ArrowLeft,
  Zap,
  AlertCircle,
  CheckCircle,
  Code2,
  Layers,
  Target,
  GitBranch,
  Activity
} from "lucide-react";

// Comprehensive Documentation Component (Clean SaaS Style)
function Docs({ onBack }) {
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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5 rounded-md hover:bg-gray-100 -ml-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Generator
          </button>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900 hidden sm:block">Documentation</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        
        {/* Intro */}
        <div className="mb-12 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            SAP XS Cron Scheduling Guide
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Master the art of scheduling automated jobs in SAP Business Technology Platform. 
            This comprehensive guide covers everything from basic syntax to advanced scheduling patterns.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <section.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Field Details */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
            <Calendar className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">Cron Field Reference</h2>
          </div>
          <div className="space-y-4">
            {fieldDetails.map((field) => (
              <div key={field.position} className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-500 border border-gray-200">
                  {field.position}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-gray-900">{field.name}</h3>
                    <span className="text-xs font-mono font-medium text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {field.range}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{field.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {field.examples.map((example, idx) => (
                      <span key={idx} className="text-xs font-mono bg-gray-50 border border-gray-200 px-2.5 py-1 rounded text-gray-700">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operators */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
            <Code2 className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">Special Characters & Operators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {operators.map((op, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-mono text-gray-900 bg-gray-100 px-3 py-1 rounded border border-gray-200">
                    {op.symbol}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900">{op.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 h-10">{op.description}</p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <span className="text-xs text-gray-500 font-medium block mb-1">Example</span>
                  <code className="text-sm font-mono text-gray-800">{op.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real World Use Cases */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
            <Zap className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">Real-World Use Cases</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <useCase.icon className="w-5 h-5 text-gray-500" />
                  <h3 className="text-base font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-5 h-10">{useCase.description}</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-sm font-mono text-blue-300 block mb-2">{useCase.pattern}</code>
                  <p className="text-xs text-gray-400 border-t border-gray-700 pt-2">
                    {useCase.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
            <AlertCircle className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">Best Practices & Tips</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bestPractices.map((practice, idx) => (
              <div key={idx} className={`rounded-xl p-5 sm:p-6 border flex gap-4 ${
                practice.type === "success" ? "bg-green-50/50 border-green-200" : "bg-amber-50/50 border-amber-200"
              }`}>
                <div className="flex-shrink-0 mt-0.5">
                  {practice.type === "success" 
                    ? <CheckCircle className="w-5 h-5 text-green-600" /> 
                    : <AlertCircle className="w-5 h-5 text-amber-600" />}
                </div>
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${
                    practice.type === "success" ? "text-green-900" : "text-amber-900"
                  }`}>
                    {practice.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    practice.type === "success" ? "text-green-800/80" : "text-amber-800/80"
                  }`}>
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

// Main App Component (Generator)
export default function App() {
  const [showDocs, setShowDocs] = useState(false);
  const [frequencyType, setFrequencyType] = useState("minute");
  const [repeatEvery, setRepeatEvery] = useState(10);
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(30);
  const [second, setSecond] = useState(20);
  const [weekDays, setWeekDays] = useState(["tue"]);
  const [dayOfMonth, setDayOfMonth] = useState(1);
  const [month, setMonth] = useState(1);
  const [isSpecificYear, setIsSpecificYear] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [copied, setCopied] = useState(false);

  const days = [
    { label: "Sun", value: "sun" }, { label: "Mon", value: "mon" },
    { label: "Tue", value: "tue" }, { label: "Wed", value: "wed" },
    { label: "Thu", value: "thu" }, { label: "Fri", value: "fri" },
    { label: "Sat", value: "sat" }
  ];

  const months = [
    { value: 1, label: "January" }, { value: 2, label: "February" }, 
    { value: 3, label: "March" }, { value: 4, label: "April" },
    { value: 5, label: "May" }, { value: 6, label: "June" },
    { value: 7, label: "July" }, { value: 8, label: "August" },
    { value: 9, label: "September" }, { value: 10, label: "October" },
    { value: 11, label: "November" }, { value: 12, label: "December" }
  ];

  const frequencyOptions = [
    { id: "minute", label: "Minutes", icon: Clock },
    { id: "hourly", label: "Hourly", icon: Clock },
    { id: "daily", label: "Daily", icon: CalendarDays },
    { id: "weekly", label: "Weekly", icon: CalendarDays },
    { id: "monthly", label: "Monthly", icon: Calendar },
    { id: "yearly", label: "Yearly", icon: Calendar }
  ];

  const handleReset = () => {
    setFrequencyType("minute");
    setRepeatEvery(10);
    setHour(10);
    setMinute(30);
    setSecond(20);
    setWeekDays(["tue"]);
    setDayOfMonth(1);
    setMonth(1);
    setIsSpecificYear(false);
    setYear(new Date().getFullYear());
  };

  const toggleDay = (day) => {
    if (weekDays.includes(day)) {
      if (weekDays.length > 1) {
        setWeekDays(weekDays.filter((d) => d !== day));
      }
    } else {
      setWeekDays([...weekDays, day]);
    }
  };

  const sanitizeNumber = (value, min, max, fallback) => {
    const parsed = Number(value);
    if (Number.isNaN(parsed)) return fallback;
    return Math.min(Math.max(parsed, min), max);
  };

  const cron = useMemo(() => {
    const safeRepeatEvery = sanitizeNumber(repeatEvery, 1, 999, 1);
    const safeHour = sanitizeNumber(hour, 0, 23, 0);
    const safeMinute = sanitizeNumber(minute, 0, 59, 0);
    const safeSecond = sanitizeNumber(second, 0, 59, 20);
    const safeDayOfMonth = sanitizeNumber(dayOfMonth, 1, 31, 1);
    const safeMonth = sanitizeNumber(month, 1, 12, 1);
    const safeYear = isSpecificYear ? sanitizeNumber(year, 1970, 2099, new Date().getFullYear()) : '*';

    switch (frequencyType) {
      case "minute":
        return `${safeYear} * * * * */${safeRepeatEvery} ${safeSecond}`;
      case "hourly":
        return `${safeYear} * * * */${safeRepeatEvery} 0 ${safeSecond}`;
      case "daily":
        return `${safeYear} * * * ${safeHour} ${safeMinute} ${safeSecond}`;
      case "weekly": {
        const selectedDays = weekDays.length > 0 ? weekDays.join(",") : "tue";
        return `${safeYear} * * ${selectedDays} ${safeHour} ${safeMinute} ${safeSecond}`;
      }
      case "monthly":
        return `${safeYear} * ${safeDayOfMonth} * ${safeHour} ${safeMinute} ${safeSecond}`;
      case "yearly":
        return `${safeYear} ${safeMonth} ${safeDayOfMonth} * ${safeHour} ${safeMinute} ${safeSecond}`;
      default:
        return "Invalid Selection";
    }
  }, [frequencyType, repeatEvery, hour, minute, second, weekDays, dayOfMonth, month, isSpecificYear, year]);

  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = cron;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  };

  const cronPartsNames = ["Year", "Month", "Day", "Day of Wk", "Hour", "Minute", "Second"];

  if (showDocs) {
    return <Docs onBack={() => setShowDocs(false)} />;
  }

  // Clean, functional syntax highlighting and standard tooltips
  const renderCronPart = (part, index) => {
    const isAsterisk = part === '*';
    const isNumber = !isNaN(part) && part !== '';
    
    let colorClass = "text-gray-300";
    if (isAsterisk) colorClass = "text-pink-400";
    else if (isNumber) colorClass = "text-blue-400";
    else if (part.includes('/')) colorClass = "text-emerald-400";
    else colorClass = "text-amber-400";

    const isTop = index % 2 === 0;

    return (
      <div key={index} className="relative group inline-block mx-1.5 sm:mx-2 cursor-pointer">
        <span className={`${colorClass} transition-colors duration-200 group-hover:text-white inline-block`}>
          {part}
        </span>
        {/* Simple, standard web tooltip */}
        <div className={`absolute ${isTop ? 'bottom-full mb-2 translate-y-1' : 'top-full mt-2 -translate-y-1'} left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium py-1.5 px-2.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 group-hover:translate-y-0 tracking-normal font-sans border border-gray-700`}>
          {cronPartsNames[index]}
          <div className={`absolute ${isTop ? '-bottom-1' : '-top-1'} left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-gray-700 ${isTop ? 'border-b border-r' : 'border-t border-l'} rotate-45`}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* App Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-lg flex items-center justify-center">
              <Settings2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 leading-tight">
                SAP Cron Generator
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleReset}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-md hover:bg-gray-100"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={() => setShowDocs(true)}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-md hover:bg-blue-50"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Docs</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Controls */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-5">
                Schedule Configuration
              </h2>

              {/* Frequency Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {frequencyOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFrequencyType(opt.id)}
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg border transition-colors ${
                        frequencyType === opt.id
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <opt.icon className={`w-5 h-5 mb-1.5 ${frequencyType === opt.id ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="text-xs font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Inputs */}
              <div className="space-y-5">
                {(frequencyType === "minute" || frequencyType === "hourly") && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Repeat Every {frequencyType === "minute" ? "Minutes" : "Hours"}
                    </label>
                    <input
                      type="number"
                      value={repeatEvery}
                      min="1"
                      max="999"
                      onChange={(e) => setRepeatEvery(e.target.value)}
                      className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}

                {(frequencyType === "monthly" || frequencyType === "yearly") && (
                  <div className="grid grid-cols-2 gap-4">
                    {frequencyType === "yearly" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Month</label>
                        <select
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                          {months.map(m => (
                            <option key={m.value} value={m.value}>{m.label}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    <div className={frequencyType === "monthly" ? "col-span-2" : ""}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Day of Month</label>
                      <input
                        type="number"
                        min="1"
                        max="31"
                        value={dayOfMonth}
                        onChange={(e) => setDayOfMonth(e.target.value)}
                        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}

                {["daily", "weekly", "monthly", "yearly"].includes(frequencyType) && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Hour (0-23)</label>
                      <input
                        type="number"
                        min="0"
                        max="23"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Minute (0-59)</label>
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={minute}
                        onChange={(e) => setMinute(e.target.value)}
                        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}

                {frequencyType === "weekly" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Days
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {days.map((day) => (
                        <button
                          key={day.value}
                          onClick={() => toggleDay(day.value)}
                          className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${
                            weekDays.includes(day.value)
                              ? "bg-gray-800 text-white border-gray-800"
                              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <label className="text-sm font-medium text-gray-900">Specific Year Limit</label>
                      <p className="text-xs text-gray-500 mt-0.5">Restrict to a single year</p>
                    </div>
                    {/* Standard CSS Toggle Switch */}
                    <button
                      type="button"
                      onClick={() => setIsSpecificYear(!isSpecificYear)}
                      className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSpecificYear ? 'bg-blue-600' : 'bg-gray-200'}`}
                    >
                      <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isSpecificYear ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                  
                  {isSpecificYear && (
                    <div className="mb-2">
                      <input
                        type="number"
                        min="1970"
                        max="2099"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-900">Second Offset</label>
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Default: 20</span>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                    className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Staggering jobs by 20 seconds prevents system overload at the exact minute mark.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Output & Reference */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Result Component */}
            <div className="bg-[#0D1117] rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#161B22] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <Terminal className="w-4 h-4" />
                  <span>Resulting Cron Expression</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border border-gray-700"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              
              <div className="p-8 sm:p-12 flex flex-col items-center justify-center min-h-[160px]">
                <div className="text-2xl sm:text-3xl md:text-4xl font-mono text-center flex flex-wrap justify-center items-center gap-y-4 gap-x-2">
                  {cron.split(' ').map((part, i) => renderCronPart(part, i))}
                </div>
              </div>
            </div>

            {/* Reference Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Format Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200 bg-gray-50/50">
                  <h3 className="font-semibold text-sm text-gray-900">Format Reference</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead className="text-xs text-gray-500 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2.5 font-medium">Pos</th>
                        <th className="px-4 py-2.5 font-medium">Field</th>
                        <th className="px-4 py-2.5 font-medium">Allowed Values</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      {[
                        { p: 1, n: "Year", v: "1970-2099, *" },
                        { p: 2, n: "Month", v: "1-12, *" },
                        { p: 3, n: "Day", v: "1-31, *" },
                        { p: 4, n: "Day of Wk", v: "sun-sat, *" },
                        { p: 5, n: "Hour", v: "0-23, *" },
                        { p: 6, n: "Minute", v: "0-59, *" },
                        { p: 7, n: "Second", v: "0-59, *" },
                      ].map((row) => (
                        <tr key={row.p}>
                          <td className="px-4 py-2 font-mono text-xs text-gray-400">{row.p}</td>
                          <td className="px-4 py-2">{row.n}</td>
                          <td className="px-4 py-2 font-mono text-xs text-gray-500">{row.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200 bg-gray-50/50">
                  <h3 className="font-semibold text-sm text-gray-900">Examples</h3>
                </div>
                <div className="p-4 space-y-4">
                  {[
                    { desc: "Every 10 mins at 20s", val: "* * * * * */10 20" },
                    { desc: "Every 2 hours at 0m 20s", val: "* * * * */2 0 20" },
                    { desc: "Tuesdays at 10:30:20", val: "* * * tue 10 30 20" },
                    { desc: "1st of month at 08:30:20", val: "* * 1 * 8 30 20" },
                  ].map((ex, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-gray-500">{ex.desc}</span>
                      <code className="text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1 text-gray-800 select-all">
                        {ex.val}
                      </code>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}