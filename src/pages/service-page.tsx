import React from "react";
import ServiceHeader from "../components/sections/service-header";
import {
  Handshake,
  Cpu,
  UserSearch,
  ExternalLink,
  Users,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import ValuesMarquee from "../components/sections/value-marque";
import ServicesList from "../components/sections/service-list";
import StartProjectMarquee from "../components/sections/startup-project-marque";

interface ServiceValueItem {
  icon: React.ReactNode;
  label: string;
}

const ServicePage: React.FC = () => {
  const serviceValues: ServiceValueItem[] = [
    {
      icon: <Handshake className="w-4 h-4" />,
      label: "Cross-Functional Collaboration",
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      label: "Fintech & E-commerce UX",
    },
    {
      icon: <UserSearch className="w-4 h-4" />,
      label: "User research",
    },
    {
      icon: <ExternalLink className="w-4 h-4" />,
      label: "Prototyping",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "User Testing",
    },
    {
      icon: <RefreshCw className="w-4 h-4" />,
      label: "Design systems",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Qualitative + Quantitative analysis",
    },
  ];

  return (
    <div>
      <ServiceHeader />
      <ValuesMarquee values={serviceValues} />
      <ServicesList />
      <StartProjectMarquee />
    </div>
  );
};

export default ServicePage;
