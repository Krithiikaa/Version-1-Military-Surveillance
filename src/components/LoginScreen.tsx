import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Shield } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0e12] via-[#0f1419] to-[#1a1f26]">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <Shield className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
          <div>
            <h1 className="text-emerald-400 tracking-wider mb-2">CLASSIFIED SYSTEM</h1>
            <p className="text-zinc-400 text-sm">Dual-Sensor Surveillance Console</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-6 bg-[#12181f] rounded-xl border border-zinc-800/50 shadow-lg space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-zinc-300">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[#0a0e12] border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0a0e12] border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              SECURE LOGIN
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center space-y-1">
          <p className="text-zinc-600 text-xs">Version 2.4.1 | Build 20251116</p>
          <p className="text-zinc-700 text-xs">© 2025 Military Systems Division</p>
        </div>
      </div>
    </div>
  );
}
