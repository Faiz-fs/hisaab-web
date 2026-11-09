export const BETA_JOIN_URL = "https://api.zynapse.in/api/beta/join";

export const navItems = [
    { label: "Product", path: "/product" },
    { label: "Docs", path: "/docs" },
    { label: "Pricing", path: "/pricing" },
];

export const agents = [
    {
        name: "AWS Read-Only Ops Agent",
        status: "Beta",
        description:
            "Analyze AWS services, deployment health, logs, alarms, and incidents using read-only MCP tools.",
        accent: "cyan",
    },
    {
        name: "AWS Security Review Agent",
        status: "Beta",
        description:
            "Review IAM, CloudTrail, security groups, access keys, S3, and cloud posture without making changes.",
        accent: "green",
    },
    {
        name: "AWS Incident Review Agent",
        status: "Beta",
        description:
            "Investigate ECS, Lambda, EC2, CloudWatch, ALB, and CloudTrail signals for incident context.",
        accent: "violet",
    },
    {
        name: "GitHub PR Agent",
        status: "Coming soon",
        description:
            "Review pull requests, summarize repository changes, and prepare code review notes.",
        accent: "amber",
    },
    {
        name: "Sales Agent",
        status: "Coming soon",
        description:
            "Draft follow-ups, summarize customer conversations, and prepare CRM-ready notes.",
        accent: "rose",
    },
    {
        name: "Founder Agent",
        status: "Coming soon",
        description:
            "Prepare investor notes, operating docs, planning summaries, and business updates.",
        accent: "cyan",
    },
];

export const pricingBundles = [
    {
        name: "AWS Beta",
        agents: "AWS Read-Only Ops + Security + Incident Review",
        target: "For startups testing AWS visibility and incident review",
        note: "Read-only AWS analysis, no create/delete actions",
        featured: true,
    },
    {
        name: "Founder Preview",
        agents: "Founder Agent",
        target: "For future business workflow testing",
        note: "Coming soon",
    },
    {
        name: "Business Preview",
        agents: "Sales + HR + Founder",
        target: "For future SMB workflow automation",
        note: "Coming soon",
    },
    {
        name: "Custom Beta",
        agents: "Custom AWS workflow review",
        target: "For teams who want early access discussion",
        note: "Manual onboarding",
    },
];