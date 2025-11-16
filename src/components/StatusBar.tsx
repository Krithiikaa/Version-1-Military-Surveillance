import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import {
  Clock,
  Wifi,
  Battery,
  Thermometer,
  Signal,
} from "lucide-react";

export function StatusBar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 bg-[#12181f] border-b border-zinc-800/50 px-6 flex items-center justify-between">
      {/* Title */}
      <div>
        <h1 className="text-emerald-400 tracking-wider">
          FUSED SURVEILLANCE CONSOLE
        </h1>
        <p className="text-zinc-600 text-xs">Dual-Sensor Tactical System</p>
      </div>

      {/* Status Indicators */}
      <div className="flex items-center gap-4">
        {/* GPS Time */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
          <Clock className="w-4 h-4 text-zinc-500" />
          <span className="text-zinc-300 text-sm font-mono">{currentTime}</span>
        </div>

        {/* Network Quality */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
          <Wifi className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-300 text-sm">98%</span>
        </div>

        {/* Latency */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
          <Signal className="w-4 h-4 text-blue-400" />
          <span className="text-zinc-300 text-sm">12ms</span>
        </div>

        {/* Temperature */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
          <Thermometer className="w-4 h-4 text-orange-400" />
          <span className="text-zinc-300 text-sm">42°C</span>
        </div>

        {/* Battery */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
          <Battery className="w-4 h-4 text-green-400" />
          <span className="text-zinc-300 text-sm">87%</span>
        </div>

        {/* System Status */}
        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/30">
          OPERATIONAL
        </Badge>
      </div>
    </div>
  );
}