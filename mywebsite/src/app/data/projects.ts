export type ProjectLink = {
  label: string;
  href: string;
};

type BaseProject = {
  name: string;
  category: string;
  tech: string[];
  links: ProjectLink[];
  note?: string;
};

export type Project = BaseProject & {
  description: string;
  demoLogin?: { username: string; password: string };
};

export type FeaturedProject = BaseProject & {
  tagline: string;
  architecture: string[];
  highlights: string[];
};

// Featured projects mirror the Projects section of the resume.
export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Multi-Cloud Weather Tracker',
    category: 'Cloud/DevOps',
    tagline: 'Active-passive disaster recovery across AWS and Azure with automated DNS failover.',
    architecture: [
      'Primary:  Route 53 → CloudFront → S3 (AWS)',
      'Failover: Route 53 → Front Door → Blob Storage (Azure)',
    ],
    highlights: [
      'Architected an active-passive multi-cloud disaster-recovery design across AWS (S3, CloudFront) and Azure (Blob Storage, Front Door), codifying the S3, ACM, Route 53, and Azure Storage layers in Terraform.',
      'Implemented Route 53 failover routing with HTTPS health checks on both clouds (30-second interval, 3-failure threshold), shifting traffic to Azure automatically for a ~2-minute RTO and 99.9% uptime.',
      'Enforced HTTPS with ACM and Azure Front Door managed certificates while holding run cost under $2/month.',
    ],
    tech: ['Terraform', 'AWS S3', 'AWS CloudFront', 'AWS Route 53', 'AWS ACM', 'Azure Blob Storage', 'Azure Front Door', 'JavaScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/carloc3005/multi-cloud-weather-tracker' }],
    note: 'The live demo is offline to avoid hosting costs. The repo has the Terraform config, architecture, and screenshots of the working deployment.',
  },
  {
    name: 'Real-Time Stock Market Analytics Pipeline',
    category: 'Cloud/DevOps',
    tagline: 'Serverless, event-driven pipeline that ingests live market data and flags anomalies.',
    architecture: [
      'Ingest: Python producer → Kinesis → Lambda → DynamoDB · S3 · SNS',
      'Query:  S3 → Glue crawler → Athena (SQL)',
    ],
    highlights: [
      'Engineered a serverless, event-driven pipeline (Kinesis Data Streams, Lambda) that ingests live market data every 30 seconds and processes it with sub-second latency, computing price change and flagging moves over 5% as anomalies.',
      'Implemented a two-tier storage design: DynamoDB (on-demand, symbol/timestamp keys) for low-latency queries and an S3 data lake of raw JSON, queryable with SQL through a Glue crawler and Athena.',
      'Fixed a DynamoDB float/Decimal type mismatch with a Lambda transformation layer; isolated per-record failures.',
    ],
    tech: ['Python', 'AWS Kinesis', 'AWS Lambda', 'AWS DynamoDB', 'AWS S3', 'AWS Glue', 'AWS Athena', 'AWS SNS'],
    links: [{ label: 'GitHub', href: 'https://github.com/carloc3005/aws-stock-analytics' }],
  },
  {
    name: 'Checkers Web App CI/CD Pipeline',
    category: 'Cloud/DevOps',
    tagline: 'Every push to main is built, containerized, and rolled out with no manual steps.',
    architecture: [
      'Pipeline: GitHub → CodePipeline → CodeBuild → ECR → ECS Fargate',
      'Network:  Custom VPC · 2 public subnets across 2 AZs · Internet Gateway',
    ],
    highlights: [
      'Built a GitHub-triggered CI/CD pipeline (CodePipeline, CodeBuild, ECR, ECS Fargate) that builds a containerized Nginx app, pushes the image to ECR, and rolls out the new task on every push to main with no manual steps.',
      'Secured the pipeline with a CodeBuild service role and a custom IAM policy scoped to a single ECS service, and deployed Fargate tasks into a custom VPC (2 public subnets across 2 Availability Zones, Internet Gateway, HTTP-only security group).',
      'Diagnosed a Fargate CannotPullContainerError (arm64 vs. amd64 image) and a misplaced outbound security group rule.',
    ],
    tech: ['Docker', 'AWS CodePipeline', 'AWS CodeBuild', 'AWS ECR', 'AWS ECS Fargate', 'AWS IAM', 'AWS VPC', 'GitHub'],
    links: [{ label: 'GitHub', href: 'https://github.com/carloc3005/docker_checker' }],
    note: 'Resources were torn down after verification; total AWS spend was under $1.',
  },
];

export const moreProjects: Project[] = [
  {
    name: '3-Tier WordPress on AWS',
    category: 'Cloud/DevOps',
    description:
      'WordPress on a classic 3-tier AWS architecture: custom VPC with public and private subnets, an Application Load Balancer, EC2 instances in private subnets (bastion host and NAT gateways), RDS MySQL, and EFS shared storage, locked down with chained security groups.',
    tech: ['AWS VPC', 'AWS EC2', 'AWS ALB', 'AWS RDS', 'Amazon EFS', 'NAT Gateway'],
    links: [{ label: 'GitHub', href: 'https://github.com/carloc3005/3-tier-wordpress-website' }],
  },
  {
    name: 'AWS IAM Security & Access Management',
    category: 'Cloud/DevOps',
    description:
      'Provisioned an EC2 instance and wrote custom JSON IAM policies, then created IAM users with specific permissions and tested that least-privilege access was enforced.',
    tech: ['AWS IAM', 'AWS EC2', 'JSON Policy', 'Least Privilege'],
    links: [{ label: 'Write-up', href: 'https://www.canva.com/design/DAG3_H68-3Y/rZGDfMm4ejLV7d0P4Xxtmw/edit' }],
  },
  {
    name: 'Netflix Data Visualization',
    category: 'Cloud/DevOps',
    description:
      'Loaded a Netflix CSV dataset from S3 into AWS QuickSight and built dashboards showing content distribution, ratings, genres, and release trends.',
    tech: ['AWS QuickSight', 'AWS S3', 'Data Visualization'],
    links: [{ label: 'Write-up', href: 'https://www.canva.com/design/DAG3TsKihNM/7hTnwhnqbzFiOrqq0rRqUQ/edit' }],
  },
  {
    name: 'Portfolio Site & Custom Domain',
    category: 'Cloud/DevOps',
    description:
      'This site: a Next.js and Tailwind portfolio deployed on Vercel, served from carlofc.com with the domain\'s DNS managed in an AWS Route 53 hosted zone.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'AWS Route 53'],
    links: [{ label: 'GitHub', href: 'https://github.com/carloc3005/mywebsite' }],
  },
  {
    name: 'KnifeX',
    category: 'Full-Stack',
    description:
      'CS2 knife-skin trading platform where users browse, list, and trade virtual skins, with a responsive UI and REST-style APIs for the trade flow.',
    tech: ['React', 'Node.js', 'Express', 'Neon Postgres'],
    links: [{ label: 'Live demo', href: 'https://knifex.netlify.app/' }],
    demoLogin: { username: 'carlotest@gmail.com', password: 'lol123321' },
  },
  {
    name: 'Spotify Clone',
    category: 'Full-Stack',
    description:
      'Music streaming app where users build a personal library of songs, with a real-time sound-wave visualizer and an interface modeled after Spotify.',
    tech: ['Next.js', 'Tailwind CSS', 'Neon Postgres', 'Node.js', 'Stripe'],
    links: [{ label: 'Live demo', href: 'https://spotify-iota-amber.vercel.app/' }],
    demoLogin: { username: 'carlotest@gmail.com', password: 'lol123321' },
  },
  {
    name: 'Hello Po',
    category: 'Full-Stack/AI',
    description:
      'AI-enhanced video calling: real-time calls and chat on GetStream.io with a live OpenAI conversation, then an Inngest pipeline generates a summary of the discussion.',
    tech: ['Next.js', 'Tailwind CSS', 'Inngest', 'GetStream.io', 'Neon Postgres'],
    links: [],
    note: 'Demo temporarily unavailable.',
  },
  {
    name: 'Custom PC & System Configuration',
    category: 'Hardware/IT',
    description:
      'Built and configured custom gaming and workstation PCs: component selection, assembly, BIOS configuration, OS installation, thermal management, and troubleshooting.',
    tech: ['PC Hardware', 'Windows/Linux', 'BIOS Configuration', 'Troubleshooting'],
    links: [{ label: 'Build guide', href: 'https://docs.google.com/document/d/13zbWH6eNL_1RS9pi--bo2DGuau4_rFT_fFn1gnzbqRo/edit?tab=t.0' }],
  },
];
