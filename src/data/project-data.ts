import nexaHero from "../assets/public/nexaHero.png";
import nexaDemo1 from "../assets/public/nexademo1.jpg";
import nexaDemo2 from "../assets/public/nexademo2.jpg";
import nexaDemo3 from "../assets/public/nexademo3.jpg";
import quickDemo1 from "../assets/public/quickDemo1.png";
import quickDemo2 from "../assets/public/quickdemo2.jpg";
import quickDemo3 from "../assets/public/quickdemo3.jpg";
import nexaImage from "../assets/public/nexa-bg.png";
import nexawire1 from "../assets/public/nexa-wire1.png";
import nexawire2 from "../assets/public/nexa-wire2.png";
import nexawire3 from "../assets/public/nexa-wire3.png";
import quickwire1 from "../assets/public/quickWire1.png";
import quickwire2 from "../assets/public/quickWire2.png";
import quickwire3 from "../assets/public/quickWire3.png";
import nexaMob1 from "../assets/public/nexa-mob1.png";
import nexaMob2 from "../assets/public/nexa-mob2.png";
import nexaMob3 from "../assets/public/nexa-mob3.png";
import nexaMob4 from "../assets/public/nexa-mob4.png";
import nexaMob5 from "../assets/public/nexa-mob5.png";
import nexaMob6 from "../assets/public/nexa-mob6.png";
import nexaMob7 from "../assets/public/nexa-mob7.png";
import nexaMob8 from "../assets/public/nexa-mob8.png";
import nexaMob9 from "../assets/public/nexa-mob9.png";
import nexaMob10 from "../assets/public/nexa-mob-10.png";
import nexaMob11 from "../assets/public/nexa-mob-11.png";
import xpress from "../assets/public/xpress.png";
import najia from "../assets/public/najia-thread.png";
import kyc from "../assets/public/kyc.png";
import nexa from "../assets/public/nexa.png";
import kycHero from "../assets/public/kyc-dropoff.png";
import kycMob from "../assets/public/kycMob.png";
import principle1 from "../assets/public/principle1.png";
import principle2 from "../assets/public/principle2.png";
import principle3 from "../assets/public/principle3.png";
import principle4 from "../assets/public/principle4.png";
import principle5 from "../assets/public/principle5.png";
import quickshopHero from "../assets/public/quickshop-hero.png";
import NaijaHero from "../assets/public/najia-design.png";
import Quickshop1 from "../assets/public/quick1.png";
import Quickshop2 from "../assets/public/quick2.png";
import Quickshop3 from "../assets/public/quick3.png";
import Quickshop4 from "../assets/public/quick4.png";
import Quickshop5 from "../assets/public/quick5.png";
import Quickshop6 from "../assets/public/quick6.png";
import Quickshop7 from "../assets/public/quick7.png";
import Quickshop8 from "../assets/public/quick8.png";
import Quickshop9 from "../assets/public/quick9.png";
import QuickShopImage from "../assets/public/business.png";
import fashionWire1 from "../assets/public/fashion-wire1.png";
import fashionWire2 from "../assets/public/fashion-wire2.png";
import fashionWire3 from "../assets/public/fashion-wire3.png";
import fashion1 from "../assets/public/fashion1.png";
import fashion2 from "../assets/public/fashion2.png";
import fashion3 from "../assets/public/fashion3.png";
import fashion4 from "../assets/public/fashion4.png";
import fashion5 from "../assets/public/fashion5.png";
import fashion6 from "../assets/public/fashion6.png";
import fashion7 from "../assets/public/fashion7.png";
import fashion8 from "../assets/public/fashion8.png";
import fashion9 from "../assets/public/fashion9.png";
import fashion10 from "../assets/public/fashion10.png";
import fashion11 from "../assets/public/fashion11.png";
import fashion12 from "../assets/public/fashion12.png";
import fashion13 from "../assets/public/fashion13.png";

export interface BaseProjectData {
  id: string;
  title: string;
  subtitle?: string;
  projectType?: "design" | "research";
  heroImage?: string;
  meta?: {
    role: string;
    timeline: string;
    sector: string;
    tools: string[];
  };
  description?: string;
  tags?: string[];
  image?: string;
  color?: string;
  deviceType?: "mobile" | "desktop";
}

export interface KPIRow {
  metric: string;
  current: string;
  target: string;
}

export interface DesignProjectData extends BaseProjectData {
  projectType: "design";
  project: string;
  subtitle: string;
  heroImage: string;
  meta: {
    role: string;
    timeline: string;
    sector: string;
    tools: string[];
  };
  sections: {
    theProblem: {
      headline: string;
      description: string;
      images: string[];
    };
    demographics: {
      tagline: string;
      title: string;
      businessCard: {
        bgImage: string;
        tag: string;
        heading: string;
        features: Array<{
          title: string;
          subTitle: string;
          desc: string;
        }>;
      };
      gridCards: Array<{
        bgImage: string;
        tag: string;
        heading: string;
        desc: string;
      }>;
    };
    bgImage: string;
    userPersonas: {
      headline: string;
      personas: Array<{
        name: string;
        role: string;
        quote: string;
        image: string;
        frustrations: string[];
      }>;
    };
    designDecisions: {
      headline: string;
      solutions: Array<{
        name: string;
        role: string;
        image: string;
        problemTitle: string;
        description: string;
        outcome: string;
      }>;
    };
    wireframes: {
      images: string[];
    };
    measurableKPIs: {
      headline: string;
      subHeadline: string;
      kpis: KPIRow[];
    };
    uiDesign: {
      headline: string;
      images: string[];
    };
  };
}

export interface ResearchPlanData {
  tagline?: string;
  headline: string;
  objectives: string[];
  hypotheses: Array<{ id: string; text: string }>;
  interviewPlan: {
    participantCount: string;
    targetUsers: string[];
    categories: Array<{
      name: string;
      iconType: "trust" | "process" | "technical" | "value";
      questions: string[];
    }>;
  };
}

export interface ResearchFindingCategory {
  title: string;
  iconType: "trust" | "process" | "technical" | "value";
  points: string[];
}

export interface ResearchFindingsData {
  tagline?: string;
  headline: string;
  subSectionTitle?: string;
  categories: ResearchFindingCategory[];
}

export interface JourneyStep {
  stepNumber: number;
  label: string;
  emotion: string;
  emotionType:
    | "excited"
    | "hopeful"
    | "comfortable"
    | "unsure"
    | "frustrated"
    | "anxious"
    | "relieved";
}

export interface JourneyMapData {
  title?: string;
  steps: JourneyStep[];
}

export interface PersonaDetail {
  name: string;
  role: string;
  age: number | string;
  location: string;
  quote: string;
  image: string;
  goals: string[];
  frustrations: string[];
}

export interface UserPersonasSectionData {
  tagline?: string;
  headline: string;
  personas: PersonaDetail[];
}

export interface OpportunityCategory {
  title: string;
  iconType: "before" | "during" | "errors" | "waiting" | "completion";
  points: string[];
}

export interface OpportunityAreasData {
  tagline?: string;
  headline: string;
  categories: OpportunityCategory[];
}

export interface DesignPrincipleItem {
  title: string;
  description: string;
  image: string;
  align?: "left" | "right";
}

export interface DesignPrinciplesSectionData {
  headline?: string;
  principles: DesignPrincipleItem[];
}

export interface FlowStep {
  label: string;
  sublabel?: string;
  statusText?: string;
  statusType?: "dropoff" | "heaviest-dropoff" | "ontrack";
}

export interface FlowBlock {
  badgeText: string; // e.g. "Before" or "After"
  title: string;
  completionRate: string;
  isSuccess?: boolean;
  steps: FlowStep[];
  notesHeader: string; // e.g. "Reasons for drop-off" or "Small fixes big impact"
  notes: string[];
}

export interface FlowComparisonData {
  tagline?: string;
  headline: string;
  description: string;
  beforeFlow: FlowBlock;
  afterFlow: FlowBlock;
}

export interface ImpactMetric {
  kpi: string;
  expectedImprovement: string;
}

export interface ExpectedImpactsData {
  tagline?: string;
  headline: string;
  description: string;
  metrics: ImpactMetric[];
}

export interface KeyTakeawayData {
  headline: string;
  subheading?: string;
  businessGoalTitle?: string;
  businessGoalDescription?: string;
  principlesHeader?: string;
  principles: string[];
}

export interface ResearchProjectData extends BaseProjectData {
  projectType: "research";
  project: string;
  subtitle: string;
  heroImage: string;
  meta: {
    role: string;
    timeline: string;
    sector: string;
    tools: string[];
  };
  sections: {
    problemFraming: {
      tagline: string;
      headline: string;
      items: Array<{
        title: string;
        description: string;
        accentColor: "red" | "blue" | "amber";
      }>;
      mockupImage: string;
    };
    researchPlan?: ResearchPlanData;
    researchFindings?: ResearchFindingsData;
    journeyMap?: JourneyMapData;
    userPersonasSection?: UserPersonasSectionData;
    opportunityAreas?: OpportunityAreasData;
    designPrinciples?: DesignPrinciplesSectionData;
    flowComparison?: FlowComparisonData;
    expectedImpacts?: ExpectedImpactsData;
    keyTakeaway?: KeyTakeawayData;
    overview: {
      headline: string;
      context: string;
      metrics: Array<{ label: string; value: string }>;
    };
    researchGoals: {
      headline: string;
      points: Array<{ title: string; detail: string }>;
    };
    funnelAnalysis: {
      headline: string;
      dropOffSteps: Array<{
        step: string;
        dropOffRate: string;
        frictionPoint: string;
      }>;
    };
    userPersonas: {
      headline: string;
      personas: Array<{
        name: string;
        role: string;
        quote: string;
        image: string;
        frustrations: string[];
      }>;
    };
    designDecisions: {
      headline: string;
      solutions: Array<{
        name: string;
        role: string;
        image: string;
        problemTitle: string;
        description: string;
        outcome: string;
      }>;
    };
    wireframes: {
      images: string[];
    };
    measurableKPIs?: {
      headline: string;
      subHeadline: string;
      kpis: KPIRow[];
    };
    insights: {
      headline: string;
      findings: Array<{ title: string; detail: string }>;
    };
    uiDesign: {
      headline: string;
      images: string[];
    };
  };
}

export type ProjectDetailData = DesignProjectData | ResearchProjectData;

export const projectsData: BaseProjectData[] = [
  {
    id: "Xpress-mart",
    title: "Xpress-mart",
    description:
      "An e-commerce product that provides users with a top-notch shopping experience — from discovery through checkout.",
    tags: ["E-commerce", "UI/UX Design"],
    image: xpress,
    color: "hover:bg-[#FFF0F0]",
    deviceType: "mobile",
  },
  {
    id: "Naija-Thread",
    title: "Naija-Thread",
    description:
      "A Nigerian fashion marketplace, designed to end down and seller issues, provide standard sizes, search and discovery, and a reward system built to keep both sides coming back.",
    tags: ["E-commerce", "UI/UX Design"],
    image: najia,
    color: "hover:bg-[#EAF7EA]",
    deviceType: "desktop",
  },
  {
    id: "Nexa",
    title: "Nexa",
    description:
      "A concept fintech platform redesigned to solve a problem where users were quitting mid-transaction. Includes research, wireframes, decisions, and measurable targets.",
    tags: ["Fintech", "UI/UX Design"],
    image: nexa,
    color: "hover:bg-[#E8F5E9]",
    deviceType: "mobile",
  },
  {
    id: "Naija-Thread Case Study",
    title: "Naija-Thread Case Study",
    description:
      "An e-commerce product that provide user with top-notch experience.",
    tags: ["E-commerce", "UI/UX Design"],
    image: kyc,
    color: "hover:bg-[#F3E8FF]",
    deviceType: "desktop",
  },
];

// 1. Nexa project detail dataset
const nexaDetail: DesignProjectData = {
  id: "Nexa",
  title: "Nexa",
  project: "Nexa",
  subtitle:
    "Nexa is a modern online payment platform that simplifies sending funds and receiving payments globally with a smart, intuitive, and seamless experience.",
  projectType: "design",
  heroImage: nexaHero,
  meta: {
    role: "Product Designer",
    timeline: "3 Weeks",
    sector: "Fintech",
    tools: ["Figma", "FigJam", "Whimsical"],
  },
  sections: {
    theProblem: {
      headline: "Why are high-intent users quitting mid-transaction?",
      description:
        "Deep analytics showed an alarming drop-off rate during the final checkout split-payment phase. Users found the interface ambiguous and lacked clear verification feedback.",
      images: [
        "/assets/projects/nexa-problem-1.png",
        "/assets/projects/nexa-problem-2.png",
      ],
    },
    demographics: {
      tagline: "Demographics",
      title: "Who we designed for",
      businessCard: {
        bgImage: nexaDemo1,
        tag: "Nexa for business",
        heading: "How Nexa can help scale up your business",
        features: [
          {
            title: "Faster global payments",
            subTitle: "→ Faster operations",
            desc: "With instant or near-instant cross-border transfers, businesses can pay partners, freelancers, and suppliers quickly, reducing project delays and improving delivery speed.",
          },
          {
            title: "Lower transaction costs",
            subTitle: "→ Higher profit margins",
            desc: "Nexa's transparent, competitive fees help businesses save on international payment overhead, freeing up more capital for growth, hiring, and expansion.",
          },
          {
            title: "Multi-currency infrastructure",
            subTitle: "→ Global market expansion",
            desc: "Businesses can receive and hold funds in multiple currencies, making it easier to serve customers worldwide, enter new markets, and operate without currency barriers.",
          },
        ],
      },
      gridCards: [
        {
          bgImage: nexaDemo2,
          tag: "Nexa for freelancers",
          heading: "We have a lot to offer you",
          desc: "Nexa helps freelancers get paid faster across borders with no hidden fees. Share your Nexa tag and receive payments instantly in any supported currency.",
        },
        {
          bgImage: nexaDemo3,
          tag: "Nexa for E-commerce",
          heading: "Faster Payouts to Sellers",
          desc: "E-commerce merchants get paid instantly or same-day through Nexa, improving their cashflow and enabling them to restock quicker — which leads to more sales.",
        },
      ],
    },
    bgImage: nexaImage,
    userPersonas: {
      headline: "Research discovery on users pain point",
      personas: [
        {
          name: "Jack Welsh",
          role: "32 Years old",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          quote:
            "Onboarding flow is very tedious and long, too many forms to fill",
          frustrations: [
            "Onboarding flow is very tedious and long",
            "Too many forms to fill",
          ],
        },
        {
          name: "Grace",
          role: "Freelance Graphic Designer",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          quote: "Hiding transaction fees until the final step of payment",
          frustrations: [
            "Hidden transaction milestones",
            "Fees hidden until the final step",
          ],
        },
        {
          name: "Helen",
          role: "Ceo, Lumen Tech",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          quote:
            "Sending money often requires multiple screens and unclear options.",
          frustrations: [
            "Sending money requires multiple screens",
            "Unclear structural options",
          ],
        },
        {
          name: "Damian",
          role: "E-commerce retailer",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          quote:
            "Most apps rely only on phone numbers or emails, making search slow and error-prone.",
          frustrations: [
            "Slow and error-prone manual searches",
            "Strict reliance on legacy contact identifiers",
          ],
        },
        {
          name: "Elvis",
          role: "Freelance Front end dev",
          image:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=150&auto=format&fit=crop&q=80",
          quote: "Slow transfer that take several days for it to get through",
          frustrations: [
            "Delayed transaction settlement timelines",
            "Lack of real-time multi-day delivery feedback",
          ],
        },
        {
          name: "Sarah Proctor",
          role: "Human resource manager",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          quote:
            "Little or no feedback on completed transaction or payment request",
          frustrations: [
            "Little or no structural context on completion status",
            "Missing operational response states for requests",
          ],
        },
      ],
    },
    designDecisions: {
      headline: "Solutions taken to fix problems",
      solutions: [
        {
          name: "Jack Welsh",
          role: "32 Years old • Freelance Product Designer",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Onboarding",
          description:
            "Enough steps to verify identity properly, but a visible endpoint — an open-ended form feels longer than a form with a finish line in sight.",
          outcome: "KYC completion: 35% → 55%",
        },
        {
          name: "Grace",
          role: "Freelance Graphic Designer",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Transparency",
          description:
            "Fees revealed at the last step feel like a bait-and-switch — that's exactly the moment trust breaks and people abandon. Showing FX and service fees at entry lets users decide with full information.",
          outcome: "Activation rate: 25% → 50%",
        },
        {
          name: "Helen",
          role: "Ceo, Lumen Tech",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Adaptive payment flow",
          description:
            "Branching screens per destination or method meant users had to relearn the flow each time. One interface that adapts its fields to the destination keeps a single mental model regardless of where money is going.",
          outcome: "Activation rate: 25% → 50%",
        },
        {
          name: "Damian",
          role: "E-commerce retailer",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Universal username",
          description:
            "Phone number formats vary by country and a single mistyped digit silently misdirects money. A distinct, memorable tag removes that ambiguity entirely and gives users control over how they're found.",
          outcome: "Fewer misdirected transfers, faster recipient search",
        },
        {
          name: "Elvis",
          role: "Freelance Front end dev",
          image:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Honest labelling",
          description:
            "Real transfer speed depends on rails we don't fully control — but we can be upfront about it. Confirming 'instant' or a realistic window at the point of sending removes the class of uncertainty Elvis described, even before the underlying speed improves.",
          outcome: "Reduced perceived wait, fewer status inquiries",
        },
        {
          name: "Sarah Proctor",
          role: "Human resource manager",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Timely status notifications",
          description:
            "The anxiety isn't a missing transaction log to check later — it's not knowing right now. Proactive notification meets that uncertainty the moment it happens, instead of leaving users to go looking for reassurance.",
          outcome: "Support tickets: High → Low",
        },
      ],
    },
    wireframes: {
      images: [nexawire1, nexawire2, nexawire3],
    },
    measurableKPIs: {
      headline: "Measurable KPIs",
      subHeadline:
        "This is a concept project — the numbers below are the targets the design was built toward, not measured results.",
      kpis: [
        { metric: "KYC Completion", current: "35%", target: "55%" },
        { metric: "Activation Rate", current: "25%", target: "50%" },
        {
          metric: "Average Completion Time",
          current: "10 mins",
          target: "5 mins",
        },
        { metric: "Support Ticket", current: "High", target: "Low" },
      ],
    },
    uiDesign: {
      headline: "The Final Polish",
      images: [
        nexaMob1,
        nexaMob2,
        nexaMob3,
        nexaMob4,
        nexaMob5,
        nexaMob6,
        nexaMob7,
        nexaMob8,
        nexaMob9,
        nexaMob10,
        nexaMob11,
      ],
    },
  },
};
const quickShopDetails: DesignProjectData = {
  id: "Xpress-mart",
  title: "Xpress-mart",
  project: "QuickShop",
  subtitle:
    "The fastest way to shop for products online with or without creating an account. Quick shop allows easy and fast quest checkout unlike most e-commerce application where users will be required to create an account before placing order.",
  projectType: "design",
  heroImage: quickshopHero,
  meta: {
    role: "Product Designer",
    timeline: "3 Weeks",
    sector: "Fintech",
    tools: ["Figma", "FigJam", "Whimsical"],
  },
  sections: {
    theProblem: {
      headline: "Why are high-intent users quitting mid-transaction?",
      description:
        "Deep analytics showed an alarming drop-off rate during the final checkout split-payment phase. Users found the interface ambiguous and lacked clear verification feedback.",
      images: [
        "/assets/projects/nexa-problem-1.png",
        "/assets/projects/nexa-problem-2.png",
      ],
    },
    demographics: {
      tagline: "Demographics",
      title: "Who we designed for",
      businessCard: {
        bgImage: quickDemo1,
        tag: "Quickshop for business",
        heading: "How Quick Shop can help scale up your business",
        features: [
          {
            title: "Give small designers and tailors real distribution.",
            subTitle: "→ Faster operations",
            desc: "Most independent fashion businesses have great products and zero reach. A marketplace that handles discovery, payments, and logistics lets them focus on making, not marketing.",
          },
          {
            title: "Build trust into the transaction.",
            subTitle: "→ Higher profit margins",
            desc: "Escrow-protected payments, clear order tracking, and simple returns solve the real reason people hesitate to buy from unfamiliar sellers online — fear of getting scammed.",
          },
          {
            title:
              "Turn local identity into a selling point, not a limitation.",
            subTitle: "→ Global market expansion",
            desc: "Categorizing and merchandising around things like Ankara, Agbada, or Aso-oke instead of forcing everything into generic Western categories helps businesses reach the exact customers who are already looking for that.",
          },
        ],
      },
      gridCards: [
        {
          tag: "Turn local identity into a selling point, not a limitation.",
          bgImage: quickDemo2,
          heading: "We have a lot to offer you",
          desc: "Businesses can receive and hold funds in multiple currencies, making it easier to serve customers worldwide, enter new markets, and operate without currency barriers.",
        },
        {
          bgImage: quickDemo3,
          tag: "Nexa for E-commerce",
          heading: "Faster Payouts to Sellers",
          desc: "E-commerce merchants get paid instantly or same-day through Nexa, improving their cashflow and enabling them to restock quicker — which leads to more sales.",
        },
      ],
    },
    bgImage: nexaImage,
    userPersonas: {
      headline: "Research discovery on users pain point",
      personas: [
        {
          name: "Pascal",
          role: "Buyer",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          quote:
            "I've been scammed twice buying clothes from Instagram sellers. I don't trust random accounts anymore.",
          frustrations: [
            "Onboarding flow is very tedious and long",
            "Too many forms to fill",
          ],
        },
        {
          name: "Rita Okam",
          role: "Seller",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          quote:
            "I lose track of orders in my DMs. I don't always know who's paid and who hasn't.",
          frustrations: [
            "Hidden transaction milestones",
            "Fees hidden until the final step",
          ],
        },
        {
          name: "Ngozi",
          role: "Buyer",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          quote:
            "I never know if the fabric will actually look like the photo until it arrives.",
          frustrations: [
            "Sending money requires multiple screens",
            "Unclear structural options",
          ],
        },
        {
          name: "Emeka",
          role: "Seller",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          quote:
            "Customers haggle every time because I don't have a real storefront to point them to",
          frustrations: [
            "Slow and error-prone manual searches",
            "Strict reliance on legacy contact identifiers",
          ],
        },
        {
          name: "Blessing",
          role: "Buyer",
          image:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=150&auto=format&fit=crop&q=80",
          quote: "There's no delivery tracking. I just wait and hope.",
          frustrations: [
            "Delayed transaction settlement timelines",
            "Lack of real-time multi-day delivery feedback",
          ],
        },
        {
          name: "Sarah Proctor",
          role: "Seller",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          quote:
            "I get orders from all over the country but I never know the right delivery cost until after I've already agreed a price with the customer.",
          frustrations: [
            "Little or no structural context on completion status",
            "Missing operational response states for requests",
          ],
        },
      ],
    },
    designDecisions: {
      headline: "Solutions taken to fix problems",
      solutions: [
        {
          name: "Chidinmma",
          role: "Buyer",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Buyer protection by default.",
          description:
            "Funds are held in escrow until delivery is confirmed, so buyers aren't trusting a stranger with a bank transfer upfront.",
          outcome: "Reduced Order dispute rate",
        },
        {
          name: "Tunde",
          role: "Seller",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          problemTitle: "One dashboard, not five DM threads.",
          description:
            "A seller dashboard consolidates every order, payment status, and message in one place instead of scattered chats.",
          outcome:
            "Missed/unfulfilled orders reduced, faster seller response time",
        },
        {
          name: "Ngozi",
          role: "Buyer",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Photos and details buyers can actually trust.",
          description:
            "Multi-angle photos, fabric and sizing details, and buyer reviews replace a single flattering product shot.",
          outcome: "Return/complaint rate on received items reduced",
        },
        {
          name: "Emeka",
          role: "Seller",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          problemTitle: "A real storefront, not just a bio link.",
          description:
            "Every seller gets a branded store page, so haggling gets replaced by a page that looks worth the listed price.",
          outcome: "Avg. time to first sale (new seller) 21 days → 7 days",
        },
        {
          name: "Blessing",
          role: "Buyer",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Visible status, every step.",
          description:
            "Order tracking shows exactly where a package is, instead of leaving buyers to message and ask.",
          outcome: "Delivery-related support tickets reduced",
        },
        {
          name: "Halima",
          role: "Seller",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Delivery cost calculated upfront, before checkout.",
          description:
            "Shipping cost is calculated automatically based on buyer location and item weight and shown before the seller confirms a sale — no more guessing, no more absorbing a loss because a price was agreed before shipping was factored in.",
          outcome:
            "Seller-reported pricing disputes reduced, faster order confirmation time",
        },
      ],
    },
    wireframes: {
      images: [quickwire1, quickwire2, quickwire3],
    },
    measurableKPIs: {
      headline: "Measurable KPIs",
      subHeadline:
        "This is a concept project — the numbers below are the targets the design was built toward, not measured results.",
      kpis: [
        {
          metric: "Repeat purchase rate",
          current: "~15–20%",
          target: "30%",
        },
        {
          metric: "Seller Onboarding Completion",
          current: "~50–60%",
          target: "75%",
        },
        {
          metric: "Order dispute rate",
          current: "~10–15%",
          target: "5%",
        },
        {
          metric: "Avg. time to first sale (new seller)",
          current: "14–21 days",
          target: "7 days",
        },
        {
          metric: "Return/complaint rate",
          current: "~15–20%",
          target: "8%",
        },
        {
          metric: "Delivery-related support tickets",
          current: "-",
          target: "Low",
        },
      ],
    },
    uiDesign: {
      headline: "The Final Polish",
      images: [
        Quickshop1,
        Quickshop2,
        Quickshop3,
        Quickshop4,
        Quickshop5,
        Quickshop6,
        Quickshop7,
        Quickshop8,
        Quickshop9,
      ],
    },
  },
};
const naijaThreadFashionDetail: DesignProjectData = {
  id: "Naija-Thread",
  title: "Naija-Thread",
  project: "Naija-Thread",
  subtitle:
    "NaijaThread is a fashion marketplace that connects Nigerian buyers with independent fashion sellers — from Ankara prints to made-to-order Agbada — with escrow-protected payments on every order.",
  projectType: "design",
  heroImage: NaijaHero,
  meta: {
    role: "Product Designer",
    timeline: "3 Weeks",
    sector: "Fintech",
    tools: ["Figma", "FigJam", "Whimsical"],
  },
  sections: {
    theProblem: {
      headline: "Why are high-intent users quitting mid-transaction?",
      description:
        "Deep analytics showed an alarming drop-off rate during the final checkout split-payment phase. Users found the interface ambiguous and lacked clear verification feedback.",
      images: [
        "/assets/projects/nexa-problem-1.png",
        "/assets/projects/nexa-problem-2.png",
      ],
    },
    demographics: {
      tagline: "Demographics",
      title: "Who we designed for",
      businessCard: {
        bgImage: QuickShopImage,
        tag: "NaijaThread for business",
        heading: "How NaijaThread can help scale up your business",
        features: [
          {
            title: "Beyond your instagram followers",
            subTitle: "",
            desc: "Sellers currently limited to their own DM followers and word-of-mouth get access to buyers across Nigeria who are actively searching, not just scrolling past a post.",
          },
          {
            title: "One dashboard → Less time managing, more time selling",
            subTitle: "",
            desc: "Every order, payment, and buyer message lives in one place instead of scattered across WhatsApp and Instagram DMs — less time spent tracking who's paid, more time spent sourcing and making sales.",
          },
          {
            title: "Real storefront → Prices that don't get haggled",
            subTitle: "",
            desc: "A branded store page replaces a bio link, giving sellers the same credibility as an established brand — so customers see value instead of assuming there's room to negotiate.",
          },
        ],
      },
      gridCards: [
        {
          tag: "NaijaThread for buyers",
          bgImage: quickDemo2,
          heading: "Verified sellers, real photos → Buy with confidence",
          desc: "Multi-angle photos, fabric details, and buyer reviews mean no more guessing whether what arrives will match what was posted.",
        },
        {
          tag: "NaijaThread for Payment",
          bgImage: quickDemo3,
          heading: "Escrow-protected payments → Fewer disputes, more trust",
          desc: "Funds are held securely until the buyer confirms delivery, protecting sellers from chargebacks and buyers from scams — both sides trust the transaction instead of just trusting each other.",
        },
      ],
    },
    bgImage: nexaImage,
    userPersonas: {
      headline: "Research discovery on users pain point",
      personas: [
        {
          name: "Mark",
          role: "",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          quote:
            "Its difficult to find genuine Nigerian wears due to mass-produced imitations.",
          frustrations: [
            "Its difficult to find genuine Nigerian wears due to mass-produced imitations.",
          ],
        },
        {
          name: "Scott",
          role: "",
          image:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
          quote:
            "Browsing thousands of products can feel overwhelming, especially for weddings, cultural events, or formal occasions.",
          frustrations: [
            "Browsing thousands of products can feel overwhelming, especially for weddings, cultural events, or formal occasions.",
          ],
        },
        {
          name: "Grace",
          role: "",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          quote:
            "As an American i find it difficult to convert sizes when i want to buy African wears",
          frustrations: [
            "As an American i find it difficult to convert sizes when i want to buy African wears",
          ],
        },
        {
          name: "Jane",
          role: "",
          image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
          quote:
            "I never know if the fabric will actually look like the photo until it arrives.",
          frustrations: [
            "I never know if the fabric will actually look like the photo until it arrives.",
          ],
        },
        {
          name: "Jake",
          role: "",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          quote:
            "I don't know the difference between Ankara, Aso Oke, Adire, lace, or Senator styles.",
          frustrations: [
            "I don't know the difference between Ankara, Aso Oke, Adire, lace, or Senator styles.",
          ],
        },
        {
          name: "Kelly",
          role: "",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          quote:
            "I find it difficult to know which accessories or complementary pieces match a selected item.",
          frustrations: [
            "I find it difficult to know which accessories or complementary pieces match a selected item.",
          ],
        },
      ],
    },
    designDecisions: {
      headline: "Solutions taken to fix problems",
      solutions: [
        {
          name: "Mark",
          role: "",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Verified designer marketplace",
          description:
            "Every designer and brand is verified with an 'Authentic Nigerian Brand' badge. Include designer stories, production process, craftsmanship highlights, and certificates of authenticity.",
          outcome: "Increase customer trust by 35%, Boost first time purchase",
        },
        {
          name: "Peter",
          role: "",
          image:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Occasion-Based Discovery",
          description:
            'Curate collections such as "Traditional Weddings," "Office Wear," "Sunday Service," "Luxury Events," and "Casual Weekend." Use AI-powered recommendations based on browsing behavior and preferences.',
          outcome: "Order dispute rate 18% → 5%",
        },
        {
          name: "Grace",
          role: "",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Size recommendation",
          description:
            "Recommend the best size based on body measurements, previous purchases, regional sizing standards, and garment fit. Include visual fit guidance and size confidence indicators.",
          outcome:
            "Reduce return rates due to sizing & increase purchase confidence",
        },
        {
          name: "Kwamme",
          role: "",
          image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Transparent shipping experience",
          description:
            "Show estimated delivery dates, shipping costs, duties, taxes, courier tracking, and warehouse availability before checkout. Offer express and economy options.",
          outcome: "Reduce checkout abandonment by 20%",
        },
        {
          name: "Jake",
          role: "",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Detailed description",
          description:
            "Each product includes fabric details, care instructions, cultural background, styling tips, and suggested occasions, supported by educational content and videos.",
          outcome: "Increase average order value by 25%",
        },
        {
          name: "Kelly",
          role: "",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Complete the Look Experience",
          description:
            "Recommend matching shoes, bags, jewelry, headwear, and accessories. Allow users to purchase the full outfit with one click and preview complete looks.",
          outcome: "Increase product discovery by 30%",
        },
      ],
    },
    wireframes: {
      images: [fashionWire1, fashionWire2, fashionWire3],
    },
    measurableKPIs: {
      headline: "Measurable KPIs",
      subHeadline:
        "This is a concept project — the numbers below are the targets the design was built toward, not measured results.",
      kpis: [
        {
          metric: "Repeat purchase rate",
          current: "~15–20%",
          target: "40%",
        },
        {
          metric: "Seller Onboarding Completion",
          current: "~50–60%",
          target: "90%",
        },
        {
          metric: "Order dispute rate",
          current: "~10–15%",
          target: "3%",
        },
        {
          metric: "Avg. time to first sale (new seller)",
          current: "14–21 days",
          target: "3 days",
        },
        {
          metric: "Return/complaint rate",
          current: "~15–20%",
          target: "5%",
        },
        {
          metric: "Delivery-related support tickets",
          current: "-",
          target: "Low",
        },
      ],
    },
    uiDesign: {
      headline: "The Final Polish",
      images: [
        fashion1,
        fashion2,
        fashion3,
        fashion4,
        fashion5,
        fashion6,
        fashion7,
        fashion8,
        fashion9,
        fashion10,
        fashion11,
        fashion12,
        fashion13,
      ],
    },
  },
};

// 2. Naija Thread research project detail dataset (completed)
const naijaThreadDetail: ResearchProjectData = {
  id: "Naija-Thread Case Study",
  title: "Reducing KYC Drop-Off in African Fintech Apps",
  project: "User Research",
  subtitle:
    "Nigerian fintechs lose 30–60% of new users during identity verification. This is a screen-by-screen breakdown of where that drop-off actually happens, and how the interface itself was redesigned to stop causing it.",
  projectType: "research",
  heroImage: kycHero,
  meta: {
    role: "UX Researcher",
    timeline: "4 Weeks",
    sector: "Fintech / Identity",
    tools: ["UserTesting", "Maze", "Google Analytics", "Miro"],
  },
  sections: {
    problemFraming: {
      tagline: "User Research",
      headline: "Framing the Problem",
      mockupImage: kycMob,
      items: [
        {
          title: "The Problem",
          accentColor: "red",
          description:
            "Fintech companies in Nigeria invest heavily in acquiring users, but lose a significant number of them during onboarding and KYC. Common causes: no upfront explanation of why data is needed, verification steps that feel long and unclear, poor performance on low connectivity, and confusing instructions at each stage. The result is a lower activation rate, higher acquisition costs per retained user, and lost revenue from transactions that never happen.",
        },
        {
          title: "Why It Matters",
          accentColor: "blue",
          description:
            "Every user lost at KYC is a user the business already paid to acquire. A fintech app that needs to increase KYC completion isn't asking for a nicer screen — it's asking to stop paying for users who never convert.",
        },
        {
          title: "The Core Tension",
          accentColor: "amber",
          description:
            "Trust has to be earned before it's asked for, not after. Most KYC flows request sensitive documents and data immediately, with no explanation and no visible progress — asking users to trust the app before the app has shown them anything worth trusting. Design the flow to build that trust incrementally, or lose the user at the first document request.",
        },
      ],
    },
    researchPlan: {
      tagline: "Process",
      headline: "Research plan",
      objectives: [
        "What makes users start KYC",
        "What makes them abandon it",
        "What creates anxiety",
        "Which steps takes the longest",
        "What information do users need to feel safe",
      ],
      hypotheses: [
        {
          id: "H1",
          text: "User abandon KYC because they don't trust how their data will be used",
        },
        { id: "H2", text: "User abandon when the process feels too long" },
        {
          id: "H3",
          text: "Users drop off because they experience technical issues",
        },
        {
          id: "H4",
          text: "Users don't understand why certain documents are needed",
        },
        {
          id: "H5",
          text: "Users leave because they don't see immediate value in completing verification",
        },
      ],
      interviewPlan: {
        participantCount: "10 - 15 user",
        targetUsers: [
          "Students",
          "Salary earners",
          "Small business owners",
          "First time digital banking users",
        ],
        categories: [
          {
            name: "Trust",
            iconType: "trust",
            questions: [
              "What concerns do you have when sharing your ID online?",
              "Have you ever stopped using an app because it asked for too much information?",
            ],
          },
          {
            name: "Process",
            iconType: "process",
            questions: [
              "Describe your last account verification process?",
              "What frustrated you the most?",
            ],
          },
          {
            name: "Technical Issues",
            iconType: "technical",
            questions: [
              "Have you ever had an ID upload fail?",
              "What did you shared afterwards?",
            ],
          },
          {
            name: "Value",
            iconType: "value",
            questions: ["What would motivate you to finish verification"],
          },
        ],
      },
    },
    researchFindings: {
      tagline: "Hypothesis",
      headline: "Research findings",
      subSectionTitle: "Affinity Mapping",
      categories: [
        {
          title: "Trust",
          iconType: "trust",
          points: [
            "Fear of fraud",
            "Fear of identity theft",
            "Data privacy concerns",
          ],
        },
        {
          title: "Process",
          iconType: "process",
          points: [
            "Too many steps",
            "Confusing instructions",
            "Unclear progress",
          ],
        },
        {
          title: "Technical Issues",
          iconType: "technical",
          points: ["Slow internet", "Failed upload", "App crashes"],
        },
        {
          title: "Value",
          iconType: "value",
          points: ["No immediate benefit", "No urgency", "No rewards"],
        },
      ],
    },
    journeyMap: {
      title: "Journey Map",
      steps: [
        {
          stepNumber: 1,
          label: "Download App",
          emotion: "Excited",
          emotionType: "excited",
        },
        {
          stepNumber: 2,
          label: "Sign Up",
          emotion: "Hopeful",
          emotionType: "hopeful",
        },
        {
          stepNumber: 3,
          label: "Enter Personal Details",
          emotion: "Comfortable",
          emotionType: "comfortable",
        },
        {
          stepNumber: 4,
          label: "Upload ID",
          emotion: "Unsure",
          emotionType: "unsure",
        },
        {
          stepNumber: 5,
          label: "Take Selfie",
          emotion: "Frustrated",
          emotionType: "frustrated",
        },
        {
          stepNumber: 6,
          label: "Wait for Approval",
          emotion: "Anxious",
          emotionType: "anxious",
        },
        {
          stepNumber: 7,
          label: "Start Banking",
          emotion: "Relieved",
          emotionType: "relieved",
        },
      ],
    },
    userPersonasSection: {
      tagline: "Personas",
      headline: "User Personas",
      personas: [
        {
          name: "Amara Okafor",
          role: "First-time fintech user",
          age: 24,
          location: "Lagos",
          quote: "If this takes more than five minutes, I'm probably leaving.",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
          goals: [
            "Finish onboarding in minutes.",
            "Get immediate access to banking features.",
          ],
          frustrations: [
            "Too many forms.",
            "Long verification process.",
            "Doesn't have time to repeat failed steps.",
          ],
        },
        {
          name: "Sikiru Olalekan",
          role: "Multi-app power user",
          age: 31,
          location: "Port Harcourt",
          quote:
            "Just let me finish quickly — I've done this ten times already.",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
          goals: [
            "Ensure her information is secure.",
            "Understand how her data is being used.",
          ],
          frustrations: [
            "Fear of scams.",
            "Unclear privacy policies.",
            "Lack of trust indicators.",
          ],
        },
      ],
    },
    opportunityAreas: {
      tagline: "Solution",
      headline: "Opportunity areas for improvements",
      categories: [
        {
          title: "Before KYC",
          iconType: "before",
          points: ["Build early trust", "Explain why data is needed"],
        },
        {
          title: "During KYC",
          iconType: "during",
          points: [
            "Show clear progress",
            "Break tasks into simple steps",
            "Unclear progress",
          ],
        },
        {
          title: "Errors",
          iconType: "errors",
          points: ["Offer clear guidance", "Make it easy to retry"],
        },
        {
          title: "Waiting",
          iconType: "waiting",
          points: ["Provide real time status update", "Set expectation"],
        },
        {
          title: "Completion",
          iconType: "completion",
          points: ["Celebrate success", "Show immediate value"],
        },
      ],
    },
    designPrinciples: {
      headline: "Design Principles",
      principles: [
        {
          title: "Build Trust",
          description: "Explain why data is needed",
          image: principle1,
          align: "left",
        },
        {
          title: "Reduce cognitive load",
          description: "Break complex tasks into small steps.",
          image: principle2,
          align: "right",
        },
        {
          title: "Progress and Feedback",
          description: "Show progress and status.",
          image: principle3,
          align: "left",
        },
        {
          title: "Design for Low Connectivity",
          description: "Enable retries and save progress.",
          image: principle4,
          align: "right",
        },
        {
          title: "Reward milestone",
          description: "Celebrate milestones.",
          image: principle5,
          align: "left",
        },
      ],
    },
    flowComparison: {
      tagline: "Final flow",
      headline: "Before vs. after — where the flow changed",
      description:
        "The old flow asked for trust before earning it. The redesign spreads verification across smaller steps, explains each request, and shows progress the whole way through.",
      beforeFlow: {
        badgeText: "Before",
        title: "Original KYC Flow",
        completionRate: "40% Completion",
        isSuccess: false,
        steps: [
          { label: "Create account" },
          {
            label: "Upload ID",
            sublabel: "(no explanation)",
            statusText: "Drop-off",
            statusType: "dropoff",
          },
          {
            label: "Selfie capture",
            sublabel: "(no guidance)",
            statusText: "Drop-off",
            statusType: "dropoff",
          },
          {
            label: '"Under review"',
            sublabel: "(no timeline)",
            statusText: "Heaviest drop-off",
            statusType: "heaviest-dropoff",
          },
          {
            label: "Silent pass / fail",
            sublabel: "(no notification)",
          },
        ],
        notesHeader: "Reasons for drop-off",
        notes: [
          "No progress indicator anywhere in the flow",
          "No copy explaining why each step is needed",
        ],
      },
      afterFlow: {
        badgeText: "After",
        title: "Restructured KYC flow",
        completionRate: "100% Completion",
        isSuccess: true,
        steps: [
          {
            label: "Create account",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "KYC Intro (What & why)",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Personal details",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Document upload (Guided)",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Selfie verification (Guided)",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Document upload (Guided)",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Review & submit",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Verification status (live updates)",
            statusText: "On track",
            statusType: "ontrack",
          },
          {
            label: "Success screen",
            statusText: "On track",
            statusType: "ontrack",
          },
        ],
        notesHeader: "Small fixes big impact",
        notes: [
          "Progress shown at every step",
          "Each request explained before it's asked",
          "Live status replaces silent waiting",
        ],
      },
    },
    keyTakeaway: {
      headline: "Key Takeaway",
      subheading: "This project isn't just about designing onboarding screens.",
      businessGoalTitle: "It's about solving a business problem:",
      businessGoalDescription:
        "Turning more sign-ups into active, revenue-generating customers.",
      principlesHeader: "Principles that held",
      principles: [
        "Trust is earned before it's asked for, not after",
        "Simplicity means fewer decisions per screen, not fewer screens",
        'Even the "safe" screens can break trust if they\'re not honest about system state',
      ],
    },
    expectedImpacts: {
      tagline: "Expectations",
      headline: "Expected Impacts",
      description:
        "This is a concept project — the numbers below are the targets the design was built toward, not measured results.",
      metrics: [
        { kpi: "KYC Completion", expectedImprovement: "+40%" },
        { kpi: "Activation Rate", expectedImprovement: "+35%" },
        { kpi: "Average Completion Time", expectedImprovement: "7 mins" },
        { kpi: "Support Ticket", expectedImprovement: "Low" },
        { kpi: "First Transaction", expectedImprovement: "+35%" },
      ],
    },
    overview: {
      headline: "The Cost of Friction",
      context:
        "Strict regulatory identity checks often conflict with seamless user onboarding. This study uncovers exactly where users abandon identity capture workflows, and how much of that loss is avoidable through interface design alone.",
      metrics: [
        { label: "Initial Drop-Off", value: "42%" },
        { label: "ID Verification Abandonment", value: "65%" },
        { label: "Users Interviewed", value: "24" },
        { label: "Sessions Analyzed", value: "180+" },
      ],
    },
    researchGoals: {
      headline: "Key Research Objectives",
      points: [
        {
          title: "Objective One",
          detail:
            "Pinpoint specific screens causing high cognitive load during document uploads.",
        },
        {
          title: "Objective Two",
          detail:
            "Identify structural mismatches between local ID formats and layout input constraints.",
        },
        {
          title: "Objective Three",
          detail:
            "Evaluate user sentiment regarding privacy concerns on live facial capture steps.",
        },
        {
          title: "Objective Four",
          detail:
            "Measure the impact of low-bandwidth conditions on completion rates and error frequency.",
        },
      ],
    },
    funnelAnalysis: {
      headline: "Funnel & Friction Mapping",
      dropOffSteps: [
        {
          step: "Phone OTP Verification",
          dropOffRate: "12%",
          frictionPoint: "Delayed carrier network message deliveries.",
        },
        {
          step: "ID Card Snapshot Capture",
          dropOffRate: "38%",
          frictionPoint:
            "Unclear edge-alignment overlays causing camera failure.",
        },
        {
          step: "Facial Liveness Check",
          dropOffRate: "22%",
          frictionPoint:
            "Users unsure why a selfie is required, and uneasy handing over biometric data without explanation.",
        },
        {
          step: "Document Review & Submission",
          dropOffRate: "15%",
          frictionPoint:
            "No confirmation that documents were received in good quality, leading users to abandon rather than risk a rejection.",
        },
      ],
    },
    userPersonas: {
      headline: "Research Discovery on User Pain Points",
      personas: [
        {
          name: "Jack Welsh",
          role: "32 Years old",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          quote:
            "Onboarding flow is very tedious and long, too many forms to fill",
          frustrations: [
            "Onboarding flow is very tedious and long",
            "Too many forms to fill before reaching value",
          ],
        },
        {
          name: "Grace",
          role: "Freelance Graphic Designer",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          quote:
            "I don't understand why they need my ID before I've even sent a payment",
          frustrations: [
            "No explanation of why documents are needed",
            "Feels like handing over sensitive data too early",
          ],
        },
        {
          name: "Helen",
          role: "Ceo, Lumen Tech",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          quote:
            "The camera never captured my ID properly, I had to retry five times",
          frustrations: [
            "Unclear edge-alignment overlays during capture",
            "Repeated failed attempts with no guidance on what went wrong",
          ],
        },
        {
          name: "Damian",
          role: "E-commerce retailer",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          quote: "OTP messages take forever to arrive when my signal is weak",
          frustrations: [
            "Delayed OTP delivery on low connectivity",
            "No fallback verification method offered",
          ],
        },
        {
          name: "Elvis",
          role: "Freelance Front end dev",
          image:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=150&auto=format&fit=crop&q=80",
          quote:
            "The app crashed halfway through verification and I had to start all over again",
          frustrations: [
            "No saved progress if the app crashes or closes",
            "Forced to redo document capture from scratch",
          ],
        },
        {
          name: "Sarah Proctor",
          role: "Human resource manager",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          quote: "I submitted my documents but got zero feedback for days",
          frustrations: [
            "No status updates after submission",
            "Uncertainty about whether verification even went through",
          ],
        },
      ],
    },
    designDecisions: {
      headline: "Solutions Taken to Fix Drop-offs",
      solutions: [
        {
          name: "Jack Welsh",
          role: "32 Years old • Freelance Product Designer",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Onboarding",
          description:
            "Enough steps to verify identity properly, but a visible endpoint — an open-ended form feels longer than a form with a finish line in sight.",
          outcome: "KYC completion: 35% → 55%",
        },
        {
          name: "Grace",
          role: "Freelance Graphic Designer",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Contextual explanation",
          description:
            "Asking for sensitive documents with no context reads as a red flag, not a formality. A one-line explanation of why each document is needed, shown right before the request, rebuilds the trust the request would otherwise spend.",
          outcome: "Initial drop-off: 42% → 28%",
        },
        {
          name: "Helen",
          role: "Ceo, Lumen Tech",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Guided capture",
          description:
            "A camera overlay that reacts to glare, blur, and misalignment in real time turns a guessing game into a guided task, so users know what to fix instead of just that something failed.",
          outcome: "ID capture failure rate: 38% → 19%",
        },
        {
          name: "Damian",
          role: "E-commerce retailer",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Verification fallback",
          description:
            "A single OTP channel is a single point of failure on unreliable networks. Offering a fallback method after a short delay keeps users moving instead of leaving them staring at an empty inbox.",
          outcome: "OTP-stage drop-off: 12% → 6%",
        },
        {
          name: "Elvis",
          role: "Freelance Front end dev",
          image:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Save & resume",
          description:
            "Verification progress is now persisted at every step, so an interrupted session picks up exactly where it left off instead of forcing a full restart.",
          outcome: "Re-attempt completion rate: up 31%",
        },
        {
          name: "Sarah Proctor",
          role: "Human resource manager",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          problemTitle: "Status transparency",
          description:
            "Silence after submission reads as failure. Real-time status updates — received, under review, approved — replace the wait with visible progress.",
          outcome: "Support tickets: High → Low",
        },
      ],
    },
    wireframes: {
      images: [nexawire1, nexawire2, nexawire3],
    },
    measurableKPIs: {
      headline: "Success metric KPIs",
      subHeadline:
        "This redesign targets a 20% lift in KYC completion, 15% in activation, and 15% in first-transaction rate.",
      kpis: [
        { metric: "KYC Completion", current: "60%", target: "100%" },
        { metric: "Activation Rate", current: "45%", target: "80%" },
        {
          metric: "Average Completion Time",
          current: "20 mins",
          target: "7 mins",
        },
        { metric: "Support Ticket", current: "High", target: "Low" },
        { metric: "First Transaction", current: "50%", target: "15%" },
      ],
    },
    insights: {
      headline: "Actionable UX Recommendations",
      findings: [
        {
          title: "Progressive Requirements Disclosure",
          detail:
            "Explain exactly why personal documents are needed right before the request pop-up, rather than front-loading privacy text no one reads.",
        },
        {
          title: "Contextual Inline Validation",
          detail:
            "Verify text fields as the user types rather than throwing generic errors post-submission.",
        },
        {
          title: "Resilient, Resumable Flows",
          detail:
            "Persist progress locally so a crash, an incoming call, or a lost connection doesn't cost the user their place in the flow.",
        },
        {
          title: "Design for Low Bandwidth",
          detail:
            "Compress capture previews and degrade gracefully on weak connections instead of stalling silently — a spinner with no explanation reads as a broken app.",
        },
      ],
    },
    uiDesign: {
      headline: "The Refined Experience",
      images: [nexaMob4, nexaMob5, nexaMob6, nexaMob7],
    },
  },
};

// 3. Map keys uniformly to safe lowercased strings matching parameters from route handlers
export const projectsDetailDataset: Record<string, ProjectDetailData> = {
  nexa: nexaDetail,
  quickshop: quickShopDetails,
  naijaThreadFashionDetail,
  "naija-thread-case-study": naijaThreadDetail,
};
