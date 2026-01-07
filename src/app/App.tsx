import { Header } from "./components/Header";
import { HeroPremium } from "./components/HeroPremium";
import { PortfolioPremium } from "./components/PortfolioPremium";
import { ChannelExperience } from "./components/ChannelExperience";
import { AboutPremium } from "./components/AboutPremium";
import { ContactPremium } from "./components/ContactPremium";
import { FooterProperCut } from "./components/FooterProperCut";
import { CustomCursorPremium } from "./components/CustomCursorPremium";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
      <CustomCursorPremium />
      <Header />
      <HeroPremium />
      <PortfolioPremium />
      <ChannelExperience />
      <AboutPremium />
      <ContactPremium />
      <FooterProperCut />
    </div>
  );
}

