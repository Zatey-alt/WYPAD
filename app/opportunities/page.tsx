// app/opportunities/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Building, Clock, Bookmark, Filter } from 'lucide-react';

interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  logo: string;
  applicants: number;
  featured: boolean;
}

const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '120,000 - 180,000',
    posted: '2 days ago',
    description: 'We are looking for a skilled Senior Software Engineer to join our dynamic team...',
    requirements: ['5+ years experience', 'React/Next.js', 'Node.js', 'TypeScript'],
    logo: '🚀',
    applicants: 47,
    featured: true
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLabs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '100,000 - 150,000',
    posted: '1 day ago',
    description: 'Lead product strategy and development for our cutting-edge platform...',
    requirements: ['3+ years PM experience', 'Agile methodology', 'Data analysis', 'Leadership'],
    logo: '💡',
    applicants: 23,
    featured: false
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'DesignStudio',
    location: 'Remote',
    type: 'Contract',
    salary: '70 - 90/hour',
    posted: '3 days ago',
    description: 'Create intuitive and engaging user experiences for web and mobile applications...',
    requirements: ['Figma proficiency', 'User research', 'Prototyping', 'Design systems'],
    logo: '🎨',
    applicants: 31,
    featured: false
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '110,000 - 160,000',
    posted: '4 days ago',
    description: 'Build and maintain scalable infrastructure and deployment pipelines...',
    requirements: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    logo: '☁️',
    applicants: 18,
    featured: true
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'DataCorp',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '95,000 - 140,000',
    posted: '5 days ago',
    description: 'Analyze complex datasets and build machine learning models...',
    requirements: ['Python/R', 'Machine Learning', 'SQL', 'Statistics'],
    logo: '📊',
    applicants: 42,
    featured: false
  }
];

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());

  const filteredOpportunities = mockOpportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || opp.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = !typeFilter || opp.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const toggleSaveJob = (jobId: string) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Search Filters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Job title, company..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City, state..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredOpportunities.length} opportunities found
              </p>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                Sort by: Most Recent
              </button>
            </div>

            <div className="space-y-4">
              {filteredOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className={`bg-white rounded-lg shadow hover:shadow-md transition-shadow ${
                    opportunity.featured ? '' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-2xl">{opportunity.logo}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Link
                              href={`/opportunities/${opportunity.id}`}
                              className="text-xl font-semibold text-gray-600 hover:text-blue-700 hover:underline"
                            >
                              {opportunity.title}
                            </Link>
                            {opportunity.featured && (
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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

                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                              {opportunity.type}
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {opportunity.salary}
                            </span>
                          </div>

                          <p className="text-gray-700 mb-4 line-clamp-2">
                            {opportunity.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {opportunity.requirements.slice(0, 3).map((req, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                              >
                                {req}
                              </span>
                            ))}
                            {opportunity.requirements.length > 3 && (
                              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                +{opportunity.requirements.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              {opportunity.applicants} applicants
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => toggleSaveJob(opportunity.id)}
                                className={`p-2 rounded-full hover:bg-gray-100 ${
                                  savedJobs.has(opportunity.id) ? 'text-blue-600' : 'text-gray-400'
                                }`}
                              >
                                <Bookmark className="h-5 w-5" />
                              </button>
                              <Link
                                href={`/opportunities/${opportunity.id}`}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                              >
                                View opportunity
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredOpportunities.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No opportunities found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}