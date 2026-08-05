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
      'A real-world boba shop launch, covering the brand identity, the creative assets, and the social content and promotions that introduced it locally.',
    objective:
      'Launch a new local boba shop and build an audience for it from zero, with no existing brand, following, or customer base to work from.',
    role:
      'Owned the marketing side of the launch, from brand development through to the content and campaigns that ran after opening.',
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
        body: 'Established the identity the shop needed before it could open.',
        items: ['Brand strategy', 'Logo design', 'Mascot creation', 'Visual identity'],
      },
      {
        title: 'Marketing Execution',
        body: 'Ran the ongoing marketing that built an audience around the opening.',
        items: [
          'Social media content',
          'Promotional campaigns',
          'Giveaways',
          'Community marketing',
          'Organic audience growth',
        ],
      },
      {
        title: 'Creative Production',
        body: 'Produced the printed and digital assets the campaigns ran on.',
        items: ['Menu design', 'In-store print materials', 'Promotional graphics', 'Video for social'],
      },
    ],
    reflection:
      'Launching a brand from zero meant handling every marketing discipline at once: brand strategy, design, content production, promotions, and community building. The main lesson was how much early traction depends on publishing consistently rather than waiting for a perfect asset. It is the clearest example of my marketing work applied to a real business with real customers.',
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
