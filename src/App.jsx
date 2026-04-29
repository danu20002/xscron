import { useMemo, useState } from "react";
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
  Timer,
  CalendarClock,
  CalendarRange
} from "lucide-react";
import Docs from "./Docs";

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
    { label: "Sun", value: "sun" },
    { label: "Mon", value: "mon" },
    { label: "Tue", value: "tue" },
    { label: "Wed", value: "wed" },
    { label: "Thu", value: "thu" },
    { label: "Fri", value: "fri" },
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

  // Helper to render cron parts with syntax highlighting and tooltips
  const renderCronPart = (part, index) => {
    const isAsterisk = part === '*';
    const isNumber = !isNaN(part) && part !== '';
    
    let colorClass;
    if (isAsterisk) colorClass = "text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]";
    else if (isNumber) colorClass = "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]";
    else if (part.includes('/')) colorClass = "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]";
    else colorClass = "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"; // days like tue,wed

    // Alternate tooltip position: Top for even indices, Bottom for odd indices
    const isTop = index % 2 === 0;

    return (
      <div key={index} className="relative group inline-block mx-2 sm:mx-3 cursor-help">
        <span className={`${colorClass} transition-all duration-300 group-hover:text-white group-hover:scale-125 inline-block font-black`}>
          {part}
        </span>
        {/* Tooltip */}
        <div className={`absolute ${isTop ? 'bottom-full mb-4 translate-y-2' : 'top-full mt-4 -translate-y-2'} left-1/2 -translate-x-1/2 bg-gradient-to-br from-white to-slate-50 text-slate-900 text-xs font-black py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-2xl border-2 border-indigo-200 z-10 group-hover:translate-y-0 tracking-normal font-sans`}>
          {cronPartsNames[index]}
          <div className={`absolute ${isTop ? '-bottom-2 border-b-2 border-r-2' : '-top-2 border-t-2 border-l-2'} left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-indigo-200 rotate-45`}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/40 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-20 shadow-lg shadow-slate-200/50">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 p-3 rounded-2xl shadow-lg shadow-indigo-500/30 relative">
              <Settings2 className="w-6 h-6 text-white animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-600">
                  SAP Job Schedule Generator
                </h1>
                <span className="text-[10px] font-black tracking-wider uppercase bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-2 py-0.5 rounded-md shadow-sm">Free</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">XS Advanced Cron Expression Builder</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleReset}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-700 flex items-center gap-2 transition-all bg-slate-100 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md border border-slate-200/50 hover:border-indigo-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={() => setShowDocs(true)}
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 transition-all bg-indigo-50 hover:bg-gradient-to-br hover:from-indigo-100 hover:to-blue-100 px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md border border-indigo-200/50 hover:border-indigo-300"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Learn</span>
            </button>
            <a 
              href="https://help.sap.com/docs/job-scheduling/sap-job-scheduling-service/schedule-formats?locale=en-US" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-all hover:bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-200/50 hover:border-blue-300 shadow-sm hover:shadow-md"
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">SAP Docs</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Controls */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Control Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/60 p-8 sm:p-10 hover:shadow-indigo-200/50 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Configure Schedule
                </h2>
              </div>

              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
                  Frequency Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {frequencyOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFrequencyType(opt.id)}
                      className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 ${
                        frequencyType === opt.id
                          ? "border-indigo-600 bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-xl shadow-indigo-500/40 scale-105"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50/50 hover:scale-102 shadow-sm"
                      }`}
                    >
                      <opt.icon className={`w-6 h-6 mb-2 transition-transform ${frequencyType === opt.id ? 'text-white scale-110' : 'text-slate-400 group-hover:text-indigo-500'}`} />
                      <span className={`text-sm font-bold ${frequencyType === opt.id ? 'text-white' : 'text-slate-700'}`}>{opt.label}</span>
                      {frequencyType === opt.id && (
                        <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Conditional Inputs based on Frequency */}
                {(frequencyType === "minute" || frequencyType === "hourly") && (
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 rounded-2xl border-2 border-slate-200/60 shadow-inner">
                    <label className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-gradient-to-b from-slate-700 to-blue-600 rounded-full"></div>
                      Repeat Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">{frequencyType === "minute" ? "Minutes" : "Hours"}</span>
                    </label>
                    <input
                      type="number"
                      value={repeatEvery}
                      min="1"
                      max="999"
                      onChange={(e) => setRepeatEvery(e.target.value)}
                      className="block w-full px-5 py-4 text-xl font-bold border-2 border-slate-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white shadow-md transition-all hover:border-indigo-400"
                    />
                  </div>
                )}

                {(frequencyType === "monthly" || frequencyType === "yearly") && (
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 rounded-2xl border-2 border-slate-200/60 shadow-inner grid grid-cols-2 gap-5">
                    {frequencyType === "yearly" && (
                      <div>
                        <label className="block text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">Month</label>
                        <select
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          className="block w-full px-4 py-4 text-base font-bold border-2 border-slate-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white shadow-md hover:border-indigo-400 transition-all"
                        >
                          {months.map(m => (
                            <option key={m.value} value={m.value}>{m.label}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    <div className={frequencyType === "monthly" ? "col-span-2" : ""}>
                      <label className="block text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">Day of Month <span className="text-slate-400 font-normal normal-case">(1-31)</span></label>
                      <input
                        type="number"
                        min="1"
                        max="31"
                        value={dayOfMonth}
                        onChange={(e) => setDayOfMonth(e.target.value)}
                        className="block w-full px-5 py-4 text-xl font-bold border-2 border-slate-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white shadow-md hover:border-indigo-400 transition-all"
                      />
                    </div>
                  </div>
                )}

                {["daily", "weekly", "monthly", "yearly"].includes(frequencyType) && (
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 rounded-2xl border-2 border-slate-200/60 shadow-inner grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">Hour <span className="text-slate-400 font-normal normal-case">(0-23)</span></label>
                      <input
                        type="number"
                        min="0"
                        max="23"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        className="block w-full px-5 py-4 text-xl font-bold border-2 border-slate-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white shadow-md hover:border-indigo-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">Minute <span className="text-slate-400 font-normal normal-case">(0-59)</span></label>
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={minute}
                        onChange={(e) => setMinute(e.target.value)}
                        className="block w-full px-5 py-4 text-xl font-bold border-2 border-slate-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white shadow-md hover:border-indigo-400 transition-all"
                      />
                    </div>
                  </div>
                )}

                {frequencyType === "weekly" && (
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 rounded-2xl border-2 border-slate-200/60 shadow-inner">
                    <label className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-gradient-to-b from-slate-700 to-blue-600 rounded-full"></div>
                      Select Days
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {days.map((day) => (
                        <button
                          key={day.value}
                          onClick={() => toggleDay(day.value)}
                          className={`px-5 py-3 text-sm font-bold rounded-xl border-2 transition-all duration-200 ${
                            weekDays.includes(day.value)
                              ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white border-slate-800 shadow-xl shadow-slate-500/40 scale-105"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50 shadow-sm hover:scale-102"
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isSpecificYear ? 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-300 shadow-lg shadow-indigo-200/50' : 'bg-gradient-to-br from-slate-50 to-blue-50/50 border-slate-200/60 shadow-inner'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-base font-bold text-slate-900 flex items-center gap-2">
                          Specific Year Constraint
                          {isSpecificYear && <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold">ACTIVE</span>}
                        </label>
                        <p className="text-xs text-slate-600 mt-1 font-medium">Restrict job to a single year</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsSpecificYear(!isSpecificYear)}
                        className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-md ${isSpecificYear ? 'bg-gradient-to-r from-indigo-600 to-blue-600 shadow-indigo-500/50' : 'bg-slate-300'}`}
                      >
                        <span className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition-all duration-300 ease-in-out ${isSpecificYear ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>
                    
                    {isSpecificYear && (
                      <div className="mt-5 pt-5 border-t-2 border-indigo-200/50 animate-fadeIn">
                        <label className="block text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">Target Year</label>
                        <input
                          type="number"
                          min="1970"
                          max="2099"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="block w-full px-5 py-4 text-xl font-bold border-2 border-indigo-300 rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white shadow-md hover:border-indigo-400 transition-all"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Always show second, it's specific to SAP XS */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 rounded-2xl border-2 border-amber-200/60 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full"></div>
                      Second Offset
                    </label>
                    <span className="text-[10px] font-black tracking-wider uppercase text-amber-800 bg-amber-200 px-3 py-1 rounded-full shadow-sm">⚡ Recommended: 20</span>
                  </div>
                  <p className="text-xs text-slate-700 mb-4 leading-relaxed font-medium bg-white/60 p-3 rounded-xl">
                    Staggering jobs by 20 seconds prevents system overload exactly at the top of the minute.
                  </p>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                    className="block w-full px-5 py-4 text-xl font-bold border-2 border-amber-300 rounded-2xl focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 bg-white shadow-md hover:border-amber-400 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Output & Reference */}
          <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-24">
            
            {/* Result Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-700/50 relative group">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-slate-900/95 backdrop-blur-sm rounded-3xl">
                <div className="bg-gradient-to-r from-slate-800/90 via-slate-800/80 to-slate-800/90 px-6 py-4 border-b border-slate-700/50 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-3 text-slate-200 text-base font-bold tracking-wide">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                      <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">Generated XS Cron String</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-300 shadow-lg ${
                      copied 
                        ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-emerald-500/60 scale-105" 
                        : "bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:from-indigo-100 hover:to-blue-100 hover:shadow-indigo-500/30 hover:scale-105"
                    }`}
                  >
                    {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    {copied ? "Copied!" : "Copy Cron"}
                  </button>
                </div>
                
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center min-h-[240px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900 relative overflow-hidden">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
                  
                  <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-black tracking-widest text-center flex flex-wrap justify-center items-center gap-y-6 gap-x-4">
                    {cron.split(' ').map((part, i) => renderCronPart(part, i))}
                  </div>
                
                </div>
              </div>
            </div>

            {/* Reference Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Format Table */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-slate-200/60 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-slate-100 to-blue-50 px-6 py-5 border-b border-slate-200/60">
                  <h3 className="font-black text-lg text-slate-900 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
                    Format Reference
                  </h3>
                </div>
                <div className="p-0 overflow-x-auto flex-grow">
                  <table className="w-full text-sm text-left">
                    <thead className="text-[11px] text-slate-600 uppercase bg-slate-50/80 tracking-wider border-b-2 border-slate-200">
                      <tr>
                        <th className="px-6 py-4 font-black">Pos</th>
                        <th className="px-6 py-4 font-black">Field</th>
                        <th className="px-6 py-4 font-black">Allowed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {[
                        { p: 1, n: "Year", v: "1970-2099, *" },
                        { p: 2, n: "Month", v: "1-12, *" },
                        { p: 3, n: "Day", v: "1-31, *" },
                        { p: 4, n: "Day of Wk", v: "sun-sat, *" },
                        { p: 5, n: "Hour", v: "0-23, *" },
                        { p: 6, n: "Minute", v: "0-59, *" },
                        { p: 7, n: "Second", v: "0-59, *" },
                      ].map((row) => (
                        <tr key={row.p} className="hover:bg-indigo-50/50 transition-colors">
                          <td className="px-6 py-4 font-mono text-indigo-600 font-black text-base">{row.p}</td>
                          <td className="px-6 py-4 font-bold text-slate-800">{row.n}</td>
                          <td className="px-6 py-4 font-mono text-xs text-slate-600 font-medium">{row.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-xl border-2 border-indigo-200/60 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-200/50 transition-shadow duration-300">
                <div className="bg-gradient-to-r from-indigo-100/80 to-blue-100/80 px-6 py-5 border-b border-indigo-200/60">
                  <h3 className="font-black text-lg text-indigo-900 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
                    Common Patterns
                  </h3>
                </div>
                <div className="p-6 space-y-6 flex-grow">
                  {[
                    { desc: "Every 10 mins at 20s", val: "* * * * * */10 20", icon: Timer },
                    { desc: "Every 2 hours at 0m 20s", val: "* * * * */2 0 20", icon: Clock },
                    { desc: "Tuesdays at 10:30:20", val: "* * * tue 10 30 20", icon: CalendarDays },
                    { desc: "1st of every month at 08:30:20", val: "* * 1 * 8 30 20", icon: CalendarClock },
                    { desc: "Specific year (2026) daily at noon", val: "2026 * * * 12 0 20", icon: CalendarRange },
                  ].map((ex, i) => (
                    <div key={i} className="group">
                      <div className="text-[11px] font-black uppercase tracking-wider text-indigo-700 mb-2 flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center shadow-md shadow-indigo-500/30">
                          <ex.icon className="w-4 h-4 text-white" />
                        </div>
                        {ex.desc}
                      </div>
                      <div className="font-mono text-sm bg-white border-2 border-indigo-200 rounded-xl px-5 py-3.5 text-slate-800 select-all cursor-text group-hover:border-indigo-400 group-hover:shadow-lg group-hover:shadow-indigo-200/50 transition-all shadow-md font-bold">
                        {ex.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 mb-8 text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-slate-200/60">
            <p className="text-sm text-slate-600 font-medium">
              Built for SAP Job Scheduling •{" "}
              <button
                onClick={() => setShowDocs(true)}
                className="text-indigo-600 hover:text-indigo-700 font-bold underline decoration-2 underline-offset-2 hover:decoration-indigo-400 transition-colors"
              >
                Read the Guide
              </button>
              {" "}•{" "}
              <a 
                href="https://help.sap.com/docs/job-scheduling/sap-job-scheduling-service/schedule-formats?locale=en-US" 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-700 font-bold underline decoration-2 underline-offset-2 hover:decoration-blue-400 transition-colors"
              >
                SAP Documentation
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}