import { StatusBar } from "./StatusBar";
import { Badge } from "./ui/badge";
import {
  Cpu,
  HardDrive,
  Thermometer,
  Fan,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface GaugeCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
  status: "normal" | "warning" | "critical";
}

function GaugeCard({ title, value, unit, icon, color, status }: GaugeCardProps) {
  const data = [{ value, fill: color }];

  return (
    <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-zinc-300">{title}</h3>
        </div>
        <Badge
          className={
            status === "normal"
              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
              : status === "warning"
              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
              : "bg-red-500/20 text-red-400 border-red-500/50"
          }
        >
          {status}
        </Badge>
      </div>

      <div className="relative h-40">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            barSize={12}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              fill={color}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl text-zinc-100">{value}</div>
          <div className="text-sm text-zinc-500">{unit}</div>
        </div>
      </div>
    </div>
  );
}

export function SystemHealth() {
  const alerts = [
    {
      id: 1,
      level: "normal" as const,
      message: "All systems operational",
      time: "16:45:23",
    },
    {
      id: 2,
      level: "warning" as const,
      message: "CPU temperature elevated",
      time: "16:42:11",
    },
    {
      id: 3,
      level: "normal" as const,
      message: "Network connection restored",
      time: "16:38:45",
    },
    {
      id: 4,
      level: "critical" as const,
      message: "Disk space below 20%",
      time: "16:35:22",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <StatusBar />

      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-emerald-400 text-xl tracking-wider mb-1">
            SYSTEM HEALTH DASHBOARD
          </h2>
          <p className="text-zinc-500 text-sm">
            Real-time monitoring of system resources and performance
          </p>
        </div>

        {/* Gauges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GaugeCard
            title="CPU Load"
            value={67}
            unit="%"
            icon={<Cpu className="w-5 h-5 text-blue-400" />}
            color="#3b82f6"
            status="warning"
          />

          <GaugeCard
            title="GPU Load"
            value={45}
            unit="%"
            icon={<Cpu className="w-5 h-5 text-purple-400" />}
            color="#a855f7"
            status="normal"
          />

          <GaugeCard
            title="System Temp"
            value={72}
            unit="°C"
            icon={<Thermometer className="w-5 h-5 text-orange-400" />}
            color="#f97316"
            status="warning"
          />

          <GaugeCard
            title="Fan Speed"
            value={85}
            unit="%"
            icon={<Fan className="w-5 h-5 text-cyan-400" />}
            color="#06b6d4"
            status="normal"
          />

          <GaugeCard
            title="Disk Usage"
            value={85}
            unit="%"
            icon={<HardDrive className="w-5 h-5 text-red-400" />}
            color="#ef4444"
            status="critical"
          />

          <GaugeCard
            title="Network Quality"
            value={98}
            unit="%"
            icon={<Wifi className="w-5 h-5 text-emerald-400" />}
            color="#10b981"
            status="normal"
          />
        </div>

        {/* Alerts Panel */}
        <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 shadow-lg">
          <h3 className="text-emerald-400 text-sm tracking-wider mb-4">
            SYSTEM ALERTS
          </h3>

          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center gap-3 p-3 bg-zinc-900/30 rounded-lg border border-zinc-800/30"
              >
                {alert.level === "normal" && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                )}
                {alert.level === "warning" && (
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                )}
                {alert.level === "critical" && (
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                )}

                <div className="flex-1">
                  <p className="text-zinc-300 text-sm">{alert.message}</p>
                </div>

                <span className="text-zinc-500 text-xs font-mono">
                  {alert.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider mb-4">
              HARDWARE INFO
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">CPU</span>
                <span className="text-zinc-300">Intel Core i9-12900K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">GPU</span>
                <span className="text-zinc-300">NVIDIA RTX 4080</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">RAM</span>
                <span className="text-zinc-300">64 GB DDR5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Storage</span>
                <span className="text-zinc-300">2TB NVMe SSD</span>
              </div>
            </div>
          </div>

          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider mb-4">
              SOFTWARE INFO
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">OS</span>
                <span className="text-zinc-300">Ubuntu 22.04 LTS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Kernel</span>
                <span className="text-zinc-300">6.2.0-39</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Uptime</span>
                <span className="text-zinc-300">47 days, 12:34:56</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Version</span>
                <span className="text-zinc-300">2.4.1 Build 20251116</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
