// Skill groups mirror the Technical Skills section of the resume.
// React, Express, and PostgreSQL are added under Web & Data because the
// full-stack projects on this site use them.
export type SkillGroup = {
  title: string;
  icon: 'cloud' | 'devops' | 'code' | 'data' | 'ai';
  skills: string[];
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud (AWS)',
    icon: 'cloud',
    skills: ['EC2', 'VPC', 'IAM', 'S3', 'Route 53', 'CloudFront', 'ACM', 'RDS', 'ECS (Fargate)', 'ECR', 'Lambda', 'Kinesis', 'DynamoDB', 'Glue', 'Athena', 'SNS'],
  },
  {
    title: 'Cloud (Azure)',
    icon: 'cloud',
    skills: ['Blob Storage', 'Front Door'],
  },
  {
    title: 'Infrastructure as Code & DevOps',
    icon: 'devops',
    skills: ['Terraform', 'Docker', 'CI/CD', 'AWS CodePipeline', 'AWS CodeBuild', 'GitHub Actions', 'Git', 'GitHub'],
  },
  {
    title: 'Languages',
    icon: 'code',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Web & Data',
    icon: 'data',
    skills: ['Node.js', 'React', 'Next.js', 'Express', 'HTML', 'CSS', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'AI Tools',
    icon: 'ai',
    skills: ['Claude'],
    note: 'AI-assisted coding, debugging, and documentation',
  },
];
