import {
  BarChart3,
  Bot,
  CalendarClock,
  Cloud,
  Code2,
  CreditCard,
  Filter,
  FlaskConical,
  Lightbulb,
  Mail,
  Megaphone,
  MessageCircle,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Keyword → icon rules so EVERY sub-service across all 11 services
 * gets a matching visual automatically. First match wins.
 */
const RULES: Array<[RegExp, LucideIcon]> = [
  [/whats\s?app/i, MessageCircle],
  [/e-?mail/i, Mail],
  [/chatbot|ai |ai$|agent|artificial|machine learning|predictive/i, Bot],
  [/automation|workflow|pipeline|ci\/cd|process/i, Workflow],
  [/crm|customer|employee|lead scor|qualif/i, Users],
  [/dashboar|analytic|intelligence|kpi|report|visualization|data/i, BarChart3],
  [/seo|search/i, Search],
  [/secur|vulnerab|endpoint|network|access|backup|monitor|recovery|awareness|it (support|infrastructure)/i, ShieldCheck],
  [/cloud|server|docker|kubernetes|deploy|infrastructur|migrat|performance optim/i, Cloud],
  [/design|ui\/ux|creative|brand|logo/i, PenTool],
  [/content|copywrit|video|social|instagram|linkedin|audience|media/i, Megaphone],
  [/payment|billing|order|inventory|catalog|store|commerce|retention/i, ShoppingCart],
  [/funnel|landing|convert|retarget|campaign|ads|advertis|lead|tracking|closing/i, Filter],
  [/testing|a\/b|prototype/i, FlaskConical],
  [/api|integrat|saas|database|architecture|development|application|mobile|software|erp|system/i, Code2],
  [/booking|appointment|sequence|nurture|follow-?up/i, CalendarClock],
  [/strategy|consult|planning|positioning|management|sales/i, Lightbulb],
];

export function subServiceIcon(name: string): LucideIcon {
  for (const [re, Icon] of RULES) {
    if (re.test(name)) return Icon;
  }
  return Sparkles;
}

/**
 * Sub-services rendered as icon mini-cards — used on every service page.
 */
export default function SubServiceGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((sub) => {
        const Icon = subServiceIcon(sub);
        return (
          <li
            key={sub}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lift"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 text-brand-blue">
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-slate-700">{sub}</span>
          </li>
        );
      })}
    </ul>
  );
}
