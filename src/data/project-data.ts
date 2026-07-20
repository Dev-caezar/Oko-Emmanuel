import nexaHero from "../assets/public/nexaHero.png";
import nexaDemo1 from "../assets/public/nexademo1.jpg";
import nexaDemo2 from "../assets/public/nexademo2.jpg";
import nexaDemo3 from "../assets/public/nexademo3.jpg";
import nexaImage from "../assets/public/nexa-bg.png";
import nexawire1 from "../assets/public/nexa-wire1.png";
import nexawire2 from "../assets/public/nexa-wire2.png";
import nexawire3 from "../assets/public/nexa-wire3.png";
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
  // Added optional fields to make projectsData match BaseProjectData
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

export interface ResearchProjectData extends BaseProjectData {
  projectType: "research";
  subtitle: string;
  heroImage: string;
  meta: {
    role: string;
    timeline: string;
    sector: string;
    tools: string[];
  };
  sections: {
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
    insights: {
      headline: string;
      findings: Array<{ title: string; detail: string }>;
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
      "A Nigerian fashion marketplace, designed to end — down and seller issues, provide standard sizes, search and discovery, and a reward system built to keep both sides coming back.",
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

export const projectsDetailDataset: Record<string, ProjectDetailData> = {
  nexa: {
    id: "nexa",
    title: "Nexa",
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
  },
  "kyc-dropoff": {
    id: "kyc-dropoff",
    title: "Reducing KYC Drop-Off in African Fintech Apps",
    subtitle:
      "An end-to-end UX research framework targeting completion optimization.",
    projectType: "research",
    heroImage: "/assets/projects/kyc-hero.png",
    meta: {
      role: "UX Researcher",
      timeline: "4 Weeks",
      sector: "Fintech / Identity",
      tools: ["UserTesting", "Maze", "Google Analytics", "Miro"],
    },
    sections: {
      overview: {
        headline: "The Cost of Friction",
        context:
          "Strict regulatory identity checks often conflict with seamless user onboarding. This study uncovers exactly where users abandon identity capture workflows.",
        metrics: [
          { label: "Initial Drop-Off", value: "42%" },
          { label: "ID Verification Abandonment", value: "65%" },
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
        ],
      },
      insights: {
        headline: "Actionable UX Recommendations",
        findings: [
          {
            title: "Progressive Requirements Disclosure",
            detail:
              "Explain exactly why personal documents are needed right before the request pop-up, rather than front-loading privacy text.",
          },
          {
            title: "Contextual Inline Validation",
            detail:
              "Verify text fields as the user types rather than throwing generic errors post-submission.",
          },
        ],
      },
    },
  },
};
