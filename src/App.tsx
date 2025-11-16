import { useState } from "react";
import { LiveFusedVideo } from "./components/LiveFusedVideo";
import { VisScreen } from "./components/VisScreen";
import { MwirScreen } from "./components/MwirScreen";
import { MapView } from "./components/MapView";
import { RecordingsPage } from "./components/RecordingsPage";
import { SystemHealth } from "./components/SystemHealth";
import { LoginScreen } from "./components/LoginScreen";
import { Sidebar } from "./components/Sidebar";
import { MilitaryBackground } from "./components/MilitaryBackground";
import { Toaster } from "./components/ui/sonner";

type Screen = "login" | "fused" | "vis" | "mwir" | "map" | "recordings" | "health";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen("fused");
  };

  if (!isLoggedIn) {
    return (
      <>
        <MilitaryBackground />
        <LoginScreen onLogin={handleLogin} />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <>
      <MilitaryBackground />
      <div className="flex h-screen bg-[#0a0e12] text-zinc-100 overflow-hidden relative z-10">
        <Sidebar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        
        <div className="flex-1 flex flex-col">
          {currentScreen === "fused" && <LiveFusedVideo />}
          {currentScreen === "vis" && <VisScreen />}
          {currentScreen === "mwir" && <MwirScreen />}
          {currentScreen === "map" && <MapView />}
          {currentScreen === "recordings" && <RecordingsPage />}
          {currentScreen === "health" && <SystemHealth />}
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}