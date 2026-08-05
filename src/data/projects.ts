import type { Project } from '../types/project';

/**
 * The four portfolio pieces, in the order they appear on the Projects page.
 *
 * Order is deliberate: the MilwauTea case study leads, the Instagram funnel
 * follows as the featured automation work, and the two remaining systems
 * projects sit below them.
 *
 * These are structural placeholders. Screenshots, outcomes and metrics are
 * intentionally absent until real evidence is added. See the README for how
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
    tools: ['Canva', 'Instagram', 'Facebook', 'Meta Business Suite', 'CapCut'],
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
      'A lead funnel that turns Instagram comments into direct conversations.',
    challenge:
      'Engagement on social posts usually goes to waste because nobody follows up in time. The funnel starts the conversation while the interest is live, then gets the lead to someone who can act on it.',
    role:
      'Designed the funnel, the qualifying questions, and the follow-up logic behind it.',
    skills: [
      'Marketing Automation',
      'Social Media Marketing',
      'Lead Generation',
      'Funnel Design',
      'Campaign Management',
    ],
    tools: ['Instagram', 'ManyChat', 'Make.com', 'Slack'],
    approach: [
      'A comment on a post starts a direct message',
      'The conversation qualifies the lead before anyone spends time',
      'Qualified leads reach the right person with the context attached',
      'Quiet leads get a follow-up instead of being forgotten',
    ],
    images: [],
  },
  {
    id: 'prospecting-command-center',
    title: 'Prospecting Command Center',
    positioning:
      'A CRM pipeline for finding local business leads, qualifying them, and keeping outreach organized.',
    objective:
      'Replace scattered prospecting with one pipeline, so no lead is tracked by memory or dropped halfway through.',
    role:
      'Defined the qualification criteria and the pipeline stages leads move through.',
    skills: [
      'Lead Management',
      'CRM',
      'Lead Qualification',
      'Outreach Strategy',
      'Campaign Management',
      'Marketing Automation',
    ],
    tools: ['Google Sheets', 'Google Docs', 'Make.com', 'Slack', 'ChatGPT'],
    approach: [
      'Research local businesses and score them against qualification criteria',
      'Prepare tailored outreach for the ones worth contacting',
      'Follow up on a schedule rather than ad hoc',
      'Move qualified leads through deal stages, and archive the rest',
    ],
    images: [],
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Studio',
    positioning:
      'A repeatable content workflow that uses AI to get from idea to finished post.',
    objective:
      'Make content production repeatable, so publishing does not depend on starting from a blank page each time.',
    role:
      'Designed the workflow and defined what happens at each stage.',
    skills: [
      'Content Marketing',
      'Content Production',
      'Copywriting',
      'Social Media Marketing',
      'AI-Assisted Marketing',
      'Creative Direction',
    ],
    tools: ['ChatGPT', 'Claude', 'Canva', 'Google Docs'],
    approach: [
      'Research topics worth covering',
      'Develop ideas into angles and hooks',
      'Draft scripts for long and short-form',
      'Generate supporting images, with video planned next',
    ],
    images: [],
  },
];
