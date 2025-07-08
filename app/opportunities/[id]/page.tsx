// app/opportunities/[id]/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Building, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Bookmark, 
  Share2, 
  Flag,
  CheckCircle,
  Globe,
  Calendar,
  ChevronLeft
} from 'lucide-react';

interface OpportunityDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  logo: string;
  applicants: number;
  featured: boolean;
  companySize: string;
  industry: string;
  companyWebsite: string;
  applicationDeadline: string;
  workArrangement: string;
  experienceLevel: string;
}

// Mock data - in real app, this would come from an API
const mockOpportunityDetails: Record<string, OpportunityDetail> = {
  '1': {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '120,000 - 180,000',
    posted: '2 days ago',
    description: 'We are looking for a skilled Senior Software Engineer to join our dynamic team and help build the next generation of our platform. You will work on cutting-edge technologies and collaborate with a talented team of engineers, designers, and product managers.',
    requirements: ['5+ years experience', 'React/Next.js', 'Node.js', 'TypeScript'],
    responsibilities: [
      'Design and develop scalable web applications using React and Next.js',
      'Collaborate with cross-functional teams to define and implement new features',
      'Write clean, maintainable, and well-tested code',
      'Mentor junior developers and contribute to code reviews',
      'Participate in architectural decisions and technical planning',
      'Optimize application performance and user experience'
    ],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of experience in software development',
      'Strong proficiency in JavaScript, TypeScript, React, and Node.js',
      'Experience with modern web development tools and frameworks',
      'Knowledge of database systems (SQL and NoSQL)',
      'Understanding of cloud platforms (AWS, Azure, or GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote work options',
      'Professional development budget and conference attendance',
      'Generous PTO and parental leave policies',
      'State-of-the-art equipment and modern office space'
    ],
    logo: '🚀',
    applicants: 47,
    featured: true,
    companySize: '500-1000 employees',
    industry: 'Technology',
    companyWebsite: 'techcorp.com',
    applicationDeadline: 'March 15, 2024',
    workArrangement: 'Hybrid',
    experienceLevel: 'Senior Level'
  },
  '2': {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLabs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100,000 - $150,000',
    posted: '1 day ago',
    description: 'Lead product strategy and development for our cutting-edge platform. You will work closely with engineering, design, and marketing teams to deliver exceptional user experiences.',
    requirements: ['3+ years PM experience', 'Agile methodology', 'Data analysis', 'Leadership'],
    responsibilities: [
      'Define product vision and strategy',
      'Manage product roadmap and prioritization',
      'Work closely with engineering and design teams',
      'Analyze user feedback and market trends',
      'Lead product launches and go-to-market strategies'
    ],
    qualifications: [
      'MBA or equivalent experience',
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with Agile development methodologies',
      'Excellent communication and leadership abilities'
    ],
    benefits: [
      'Competitive salary and bonus structure',
      'Comprehensive healthcare package',
      'Flexible work schedule',
      'Professional development opportunities',
      'Stock options'
    ],
    logo: '💡',
    applicants: 23,
    featured: false,
    companySize: '100-500 employees',
    industry: 'Technology',
    companyWebsite: 'innovatelabs.com',
    applicationDeadline: 'March 20, 2024',
    workArrangement: 'On-site',
    experienceLevel: 'Mid Level'
  }
};

export default function OpportunityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  const opportunity = mockOpportunityDetails[params.id as string];

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Opportunity Not Found</h1>
          <p className="text-gray-600 mb-6">The opportunity you're looking for doesn't exist.</p>
          <Link
            href="/opportunities"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Opportunities
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="  pt-16 " >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{opportunity.title}</h1>
             
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{opportunity.logo}</div>
                  <div>
                    
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {opportunity.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {opportunity.posted}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {opportunity.type}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {opportunity.experienceLevel}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {opportunity.workArrangement}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-2 rounded-full hover:bg-gray-100 ${
                      isSaved ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
                    <Flag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  
                  <span className="font-medium">GHS {opportunity.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-600" />
                  <span>{opportunity.applicants} applicants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <span>Apply by {opportunity.applicationDeadline}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h2>
                <p className="text-gray-700 mb-6">{opportunity.description}</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2 mb-6">
                  {opportunity.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Qualifications</h3>
                <ul className="space-y-2 mb-6">
                  {opportunity.qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{qual}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits & Perks</h3>
                <ul className="space-y-2 mb-6">
                  {opportunity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Apply Now</h3>
                {opportunity.featured && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    Featured
                  </span>
                )}
              </div>
              
              <button
                onClick={handleApply}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-4"
              >
                Apply for this position
              </button>
              
              <div className="text-sm text-gray-600 text-center mb-4">
                {opportunity.applicants} people have applied
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Company Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{opportunity.companySize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{opportunity.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href={`https://${opportunity.companyWebsite}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {opportunity.companyWebsite}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {opportunity.requirements.map((req, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Apply for {opportunity.title}</h3>
            <p className="text-gray-600 mb-6">
              You're about to apply for this position at {opportunity.company}. 
              Your application will be submitted to the hiring team.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowApplicationForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowApplicationForm(false);
                  alert('Application submitted successfully!');
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
             