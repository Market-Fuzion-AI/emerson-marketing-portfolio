import type { Project } from '../types/project';

/**
 * The four portfolio pieces, in the order they appear on the Projects page.
 *
 * Order is deliberate: the MilwauTea case study leads, the Instagram funnel
 * follows as the featured automation work, and the two remaining systems
 * projects sit below them.
 *
 * These are structural placeholders. Screenshots, outcomes and metrics are
 * intentionally absent until real evidence is added — see the README for how
 * to drop images into public/images/<project-id>/.
 */
export const projects: Project[] = [
  {
    id: 'milwautea',
    title: 'MilwauTea Marketing Case Study',
    label: 'Featured Case Study',
    featured: true,
    positioning:
      'The launch of a new bubble tea shop, covering brand identity, creative assets, and the content that introduced it locally.',
    challenge:
      'MilwauTea was a brand new bubble tea shop opening in a local market. It had no brand identity and no social media presence to build on. My job was to create the brand and launch it publicly, through creative assets, marketing, and community engagement.',
    role:
      'Responsible for the brand, the creative work, and everything published before and after opening.',
    skills: [
      'Branding',
      'Graphic Design',
      'Social Media Marketing',
      'Content Production',
      'Video Production',
      'Community Marketing',
      'Promotional Campaigns',
      'Organic Growth',
    ],
    tools: [],
    caseStudy: [
      {
        title: 'Brand Development',
        body: 'Created the identity the shop needed before opening.',
        items: ['Brand strategy', 'Logo', 'Mascot', 'Visual identity'],
      },
      {
        title: 'Marketing Execution',
        body: 'Handled the day-to-day marketing during the launch.',
        items: ['Social content', 'Launch promotions', 'Giveaways', 'Local community outreach'],
      },
      {
        title: 'Creative Production',
        body: 'Produced the printed and digital assets campaigns ran on.',
        items: ['Menus', 'In-store print', 'Promo graphics', 'Short-form video'],
      },
    ],
    reflection:
      'This was the first time I owned marketing for a real business rather than a personal project. The fixed opening date was the useful constraint: it forced me to decide what needed to exist, then publish consistently instead of polishing one asset. It is the work I point to when I want to show I can carry a launch.',
    images: [],
  },
  {
    id: 'instagram-dm-automation',
    title: 'Instagram DM Automation Funnel',
    label: 'Featured Automation Project',
    positioning:
      'A comment-to-DM lead funnel using Instagram, ManyChat, Make.com, Slack notifications, routing, and follow-up logic.',
    objective:
      'Convert organic Instagram engagement into tracked conversations by turning a comment into an automatic direct message, then routing the resulting lead somewhere it will actually be followed up on.',
    role:
      'Built the funnel end to end — the trigger conditions, the DM sequence, the routing rules, and the notification and follow-up logic behind it.',
    skills: [
      'Marketing Automation',
      'Social Media Marketing',
      'Lead Generation',
      'Funnel Design',
      'Campaign Management',
    ],
    tools: ['Instagram', 'ManyChat', 'Make.com', 'Slack'],
    approach: [
      'A comment on an Instagram post triggers the funnel',
      'ManyChat opens the conversation with an automatic DM',
      'Make.com processes the lead and applies routing logic',
      'Slack notifies the right person that a lead has come in',
      'Follow-up logic re-engages leads that go quiet',
    ],
    images: [],
  },
  {
    id: 'prospecting-command-center',
    title: 'Prospecting Command Center',
    positioning:
      'A local-business prospecting and lead-management workflow covering research, scoring, review, outreach preparation, follow-up, deal progression, and archive management.',
    objective:
      'Replace scattered, ad-hoc prospecting with a single managed pipeline, so every local business is researched, qualified and progressed through a consistent set of stages rather than tracked by memory.',
    role:
      'Designed the pipeline stages and qualification logic, and built the lead-management workflow that moves prospects from research through to archive.',
    skills: [
      'Lead Management',
      'CRM',
      'Lead Qualification',
      'Outreach Strategy',
      'Campaign Management',
      'Marketing Automation',
    ],
    tools: [],
    approach: [
      'Research local businesses and gather prospect data',
      'Score prospects against qualification criteria',
      'Review and confirm scored prospects',
      'Prepare tailored outreach',
      'Follow up on contacted prospects',
      'Progress qualified prospects through deal stages',
      'Archive closed and disqualified records',
    ],
    images: [],
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Studio',
    positioning:
      'An AI-assisted content-production workflow covering topic research, idea development, hooks, scripts, images, and future video generation.',
    objective:
      'Reduce the time between a raw content idea and a finished, publish-ready asset by giving each stage of content production a repeatable, AI-assisted step instead of starting from a blank page every time.',
    role:
      'Designed the end-to-end content workflow, defined the stages and their hand-offs, and built the production process the studio runs on.',
    skills: [
      'Content Marketing',
      'Content Production',
      'Copywriting',
      'Social Media Marketing',
      'AI-Assisted Marketing',
      'Creative Direction',
    ],
    tools: [],
    approach: [
      'Topic research to identify what is worth creating',
      'Idea development into concrete content angles',
      'Hook writing to open each piece',
      'Script development for long- and short-form',
      'Image generation to support the written content',
      'Video generation planned as a future stage',
    ],
    images: [],
  },
];
