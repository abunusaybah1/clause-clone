import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBarcode } from "react-icons/fa6";

const Features = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center items-center gap-6 sm:gap-8 text-center">
      {/* Badge + Heading */}
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <Link
          href=""
          className="flex items-center gap-1.5 bg-white shadow-sm shadow-[#7d977d] text-[#073127] py-1 px-3 text-[10px] sm:text-xs font-bold rounded-xl hover:bg-[#f0f0f0] transition-colors"
        >
          <FaBarcode />
          FEATURES
        </Link>
        <h3 className="text-[#073127] text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xs sm:max-w-xl lg:max-w-3xl leading-tight">
          Latest advanced technologies to ensure everything you need
        </h3>
        <p className="text-[#333f3c] text-sm sm:text-base max-w-sm sm:max-w-xl lg:max-w-2xl">
          Maximise your team's productivity and security with our affordable,
          user-friendly contract management system
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 gap-4 sm:gap-5">
        {/* Row 1 — Dynamic Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 bg-[#f5f5f0] rounded-2xl overflow-hidden border border-gray-100">
          {/* Left: text */}
          <div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-8 lg:p-10 text-left">
            <h4 className="text-[#073127] text-xl sm:text-2xl font-bold">
              Dynamic dashboard
            </h4>
            <p className="text-[#333f3c] text-sm sm:text-base leading-relaxed">
              Clause helps legal teams work faster, smarter and more
              efficiently, delivering the visibility and data-driven insights to
              mitigate risk and ensure compliance.
            </p>
            <Link
              href="#"
              className="bg-[#073127] text-[#e2fb6c] text-xs sm:text-sm font-semibold py-2 px-4 sm:px-5 rounded-full hover:bg-[#0a4538] transition-colors"
            >
              Explore all
            </Link>
          </div>

          {/* Right: dashboard preview */}
          <div className="bg-white rounded-2xl m-3 sm:m-4 p-4 sm:p-5 flex flex-col gap-2 shadow-sm border border-gray-100">
            {/* Header row */}
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-[#073127]">
                Acme Inc. ▾
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                  >
                    <Image
                      src={`/images/hero/avatar${i}.png`}
                      alt=""
                      width={24}
                      height={24}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* SVG Bar Chart */}
            <svg viewBox="0 0 260 100" className="w-full h-28 sm:h-32">
              {/* Gridlines + Y labels */}
              {[0, 25, 50, 75, 100].map((v) => {
                const y = 88 - (v / 100) * 78;
                return (
                  <g key={v}>
                    <line
                      x1="24"
                      y1={y}
                      x2="258"
                      y2={y}
                      stroke="#f0f0f0"
                      strokeWidth="1"
                    />
                    <text
                      x="18"
                      y={y + 3}
                      fontSize="6"
                      fill="#ccc"
                      textAnchor="end"
                    >
                      {v}
                    </text>
                  </g>
                );
              })}

              {/* Bars */}
              {[
                { h: 38, active: false },
                { h: 62, active: false },
                { h: 44, active: false },
                { h: 78, active: false },
                { h: 53, active: false },
                { h: 68, active: false },
                { h: 92, active: true },
                { h: 58, active: false },
              ].map((bar, i) => {
                const barW = 22;
                const gap = 7;
                const startX = 26;
                const x = startX + i * (barW + gap);
                const barH = (bar.h / 100) * 78;
                const y = 88 - barH;
                return (
                  <rect
                    key={i}
                    x={x}
                    y={y}
                    width={barW}
                    height={barH}
                    rx="3"
                    fill={bar.active ? "#073127" : "#e8ede8"}
                  />
                );
              })}

              {/* X-axis baseline */}
              <line
                x1="24"
                y1="88"
                x2="258"
                y2="88"
                stroke="#e5e5e5"
                strokeWidth="1"
              />

              {/* X labels */}
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
                (m, i) => {
                  const barW = 22;
                  const gap = 7;
                  const startX = 26;
                  const x = startX + i * (barW + gap) + barW / 2;
                  return (
                    <text
                      key={m}
                      x={x}
                      y="97"
                      fontSize="5.5"
                      fill="#bbb"
                      textAnchor="middle"
                    >
                      {m}
                    </text>
                  );
                },
              )}
            </svg>
          </div>
        </div>

        {/* Row 2 — Smart Notifications + Task Management */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Smart Notifications */}
          <div className="bg-[#f5f5f0] rounded-2xl border border-gray-100 p-6 sm:p-7 flex flex-col gap-4 text-left">
            <div>
              <h4 className="text-[#073127] text-lg sm:text-xl font-bold mb-1">
                Smart notifications
              </h4>
              <p className="text-[#333f3c] text-xs sm:text-sm leading-relaxed">
                Easily accessible from the notifications center, calendar or
                email with the relevant activities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col gap-3 border border-gray-100 shadow-sm">
              <p className="text-[10px] sm:text-xs font-semibold text-[#073127] border-b border-gray-100 pb-2">
                Email notification
              </p>
              {[
                { label: "New messages, comment, or replies", on: true },
                { label: "Book emails", on: false },
                { label: "Announcement and Updates", on: true },
                { label: "Reminders", on: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center gap-2"
                >
                  <span className="text-[10px] sm:text-xs text-gray-500 leading-snug">
                    {item.label}
                  </span>
                  <div
                    className={`w-8 h-4 rounded-full flex items-center px-0.5 shrink-0 ${item.on ? "bg-[#073127]" : "bg-gray-200"}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-white transition-transform ${item.on ? "translate-x-4" : "translate-x-0"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Task Management */}
          <div className="bg-[#f5f5f0] rounded-2xl border border-gray-100 p-6 sm:p-7 flex flex-col gap-4 text-left">
            <div>
              <h4 className="text-[#073127] text-lg sm:text-xl font-bold mb-1">
                Task management
              </h4>
              <p className="text-[#333f3c] text-xs sm:text-sm leading-relaxed">
                Discuss contract queries, manage tasks, secure approvals, track
                progression in the workspace.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col gap-3 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#073127]">
                  Activity
                </p>
                <span className="text-[10px] text-[#073127] font-medium cursor-pointer hover:underline">
                  + Message
                </span>
              </div>
              {[
                {
                  initials: "BS",
                  bg: "#073127",
                  color: "#e2fb6c",
                  name: "Bill Sincers",
                  time: "12:00",
                  msg: "Hello! Could you sign the contract before March 12? Team plan in advance 😊",
                },
                {
                  initials: "JC",
                  bg: "#e2fb6c",
                  color: "#073127",
                  name: "Jane Casper",
                  time: "11:45",
                  msg: "Uploaded new contract",
                },
              ].map((item) => (
                <div key={item.name} className="flex gap-2 items-start">
                  <div
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold shrink-0 shadow-sm"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-[10px] font-semibold text-[#073127]">
                        {item.name}
                      </span>
                      <span className="text-[9px] text-gray-400">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">
                      {item.msg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
