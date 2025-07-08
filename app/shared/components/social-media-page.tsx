'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark, 
  Settings, 
  HelpCircle, 
  MessageSquare, 
  User,
  LogOut,
  ChevronDown,
  MoreHorizontal,
  Image,
  Video,
  Paperclip,
  Hash,
  AtSign,
  Plus
} from 'lucide-react';

// Mock data
const mockPosts = [
  {
    id: 1,
    author: {
      name: "Alan Patterson",
      avatar: "/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
      handle: "@alanpatterson"
    },
    timestamp: "2 hours ago",
    content: "Was great meeting up with Anna Ferguson and Dave Bishop at the breakfast talk!",
    hashtags: ["#breakfast"],
    image: "/hunter-haley-s8OO2-t-HmQ-unsplash.jpg",
    likes: 45,
    comments: 16,
    shares: 8
  },
  {
    id: 2,
    author: {
      name: "Alan Patterson",
      avatar: "/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
      handle: "@alanpatterson"
    },
    timestamp: "2 hours ago",
    content: "Was great meeting up with Anna Ferguson and Dave Bishop at the breakfast talk!",
    hashtags: ["#breakfast"],
    image: "/hunter-haley-s8OO2-t-HmQ-unsplash.jpg",
    likes: 45,
    comments: 16,
    shares: 8
  }
];

const mockUser = {
  name: "Erşad Başbağ",
  location: "Istanbul, Turkey",
  bio: "Senior Product Designer passionate about creating meaningful digital experiences. Always learning, always growing.",
  role: "Senior Product Designer",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

const suggestedAccounts = [
  {
    name: "Sarah Johnson",
    role: "UX Designer",
avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 12
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 8
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    mutualConnections: 15
  }
];

const mockPages = [
  { name: "Twitter", type: "Social Media Platform", color: "bg-green-500", notifications: 2 },
];

const mockProjects = [
  { name: "Github", type: "Coding Platform", color: "bg-gray-800", notifications: 2 },
  { name: "Apple", type: "Business Company", color: "bg-black", notifications: 2 }
];

const mockCompanyProjects = [
  { name: "Twitter", description: "Lorem ipsum dolor", color: "bg-green-500" },
  { name: "Apple", description: "Lorem ipsum dolor", color: "bg-black" }
];

const mockUserProjects = [
  { name: "Twitter", description: "Lorem ipsum dolor", color: "bg-green-500" },
  { name: "Twitter", description: "Lorem ipsum dolor", color: "bg-green-500" }
];

// Left Profile Sidebar Component
interface LeftSidebarProps {
  user: {
    name: string;
    bio: string;
    role: string;
    avatar: string;
    location: string;
  };
  suggestedAccounts: Array<{
    name: string;
    role: string;
    avatar: string;
    mutualConnections: number;
  }>;
}

const LeftSidebar = ({ user, suggestedAccounts }: LeftSidebarProps) => {
  return (
    <div className="w-70 bg-white py-8 border-r p-6 bg-gray-50 border-gray-200 h-screen overflow-y-hidden">
      <div className="p-6">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex flex-col items-center text-center mb-6">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-lg"
            />
            <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
            <p className="text-sm font-medium text-green-600 mb-2">{user.role}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{user.bio}</p>
            <p className="text-xs text-gray-500">{user.location}</p>
          </div>
          
          <div className="flex justify-center space-x-4 text-center">
            <div>
              <p className="text-lg font-bold text-gray-900">2.4k</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="text-lg font-bold text-gray-900">180</p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
          </div>
        </div>

        {/* Suggested Accounts Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Suggested for you</h3>
            <Link href="#" className="text-xs text-green-600 hover:underline">
              See all
            </Link>
          </div>
          
          <div className="space-y-3">
            {suggestedAccounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={account.avatar} 
                    alt={account.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{account.name}</p>
                    <p className="text-xs text-gray-500">{account.role}</p>
                    <p className="text-xs text-gray-400">{account.mutualConnections} mutual connections</p>
                  </div>
                </div>
                <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-50 hover:border-green-500 transition-colors">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Edit Profile</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Settings</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <HelpCircle className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Help Center</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Post Creation Component
interface PostCreationProps {
  user: {
    name: string;
    location: string;
    avatar: string;
  };
}

const PostCreation = ({ user }: PostCreationProps) => {
  return (
    <div className="bg-white border-b border-gray-200  p-4">
      <div className="flex items-start space-x-3">
        <div className="flex-1">
          <textarea
            placeholder="Share something..."
            className="w-full border border-gray-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={3}
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                <Image className="w-5 h-5" />
                <span className="text-sm">Image</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                <Video className="w-5 h-5" />
                <span className="text-sm">Video</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                <Paperclip className="w-5 h-5" />
                <span className="text-sm">Attachment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                <Hash className="w-5 h-5" />
                <span className="text-sm">Hashtag</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                <AtSign className="w-5 h-5" />
                <span className="text-sm">Mention</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <select className="border border-gray-200 rounded px-3 py-1 text-sm">
                <option>Public</option>
                <option>Private</option>
              </select>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Post Component
interface PostProps {
  post: {
    id: number;
    author: {
      name: string;
      avatar: string;
      handle: string;
    };
    timestamp: string;
    content: string;
    hashtags: string[];
    image?: string;
    likes: number;
    comments: number;
    shares: number;
  };
}

const Post = ({ post }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 p-4 my-4 rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-900 mb-2">{post.content}</p>
        {post.hashtags.map((tag, index) => (
          <Link key={index} href="#" className="text-green-600 hover:underline mr-2">
            {tag}
          </Link>
        ))}
      </div>

      {post.image && (
        <div className="mb-4">
          <img src={post.image} alt="Post content" className="w-full rounded-lg" />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center space-x-2 ${liked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
            <Share className="w-5 h-5" />
            <span className="text-sm">{post.shares}</span>
          </button>
        </div>
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`${bookmarked ? 'text-green-500' : 'text-gray-500'} hover:text-green-500`}
        >
          <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// Right Sidebar Component
interface RightSidebarProps {
  companyProjects: Array<{ name: string; description: string; color: string }>;
  userProjects: Array<{ name: string; description: string; color: string }>;
}
const SUPPORT_LINKS = [
  {
    title: "Find Customers",
    href: "/find-customers",
    description: "Connect with potential customers and expand your market reach across Ghana",
  },
  {
    title: "Get Mentorship",
    href: "/get-mentorship",
    description: "Access experienced mentors who can guide your business journey",
  },
  {
    title: "Certification Support",
    href: "/certification-support",
    description: "Get help with certifications and compliance requirements",
  },
  {
    title: "Media Exposure",
    href: "/media-exposure",
    description: "Gain visibility through media partnerships and promotional opportunities",
  },
  {
    title: "Find Investors",
    href: "/find-investors",
    description: "Connect with investors interested in funding innovative projects",
  },
  {
    title: "Technical Support",
    href: "/technical-support",
    description: "Access R&D support, software development, and technical expertise",
  },
];

const RightSidebar = () => {
  return (
    <div className="w-64 bg-white py-12 border-l border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            SUPPORT OPTIONS
          </h3>
          {SUPPORT_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block p-3 rounded-lg hover:bg-gray-50 mb-2"
            >
              <div className="font-medium text-sm text-gray-900">{link.title}</div>
              <div className="text-xs text-gray-500">{link.description}</div>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4 mt-6">
          <Link
            href="/logout"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 text-red-600"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};



// Main Feed Component
interface FeedProps {
  posts: Array<{
    id: number;
    author: {
      name: string;
      avatar: string;
      handle: string;
    };
    timestamp: string;
    content: string;
    hashtags: string[];
    image?: string;
    likes: number;
    comments: number;
    shares: number;
  }>;
  user: {
    name: string;
    location: string;
    avatar: string;
  };
}

const Feed = ({ posts, user }: FeedProps) => {
  return (
    <div className="flex-1 bg-gray-50 px-4">
      <PostCreation user={user} />
      
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const SocialMediaApp = () => {
return (
  <div className="flex bg-gray-50 h-screen max-w-7xl mx-auto">
    {/* Left Sidebar - Hidden on small screens */}
    <div className="hidden md:block mt-16 rounded-lg shadow-sm">
      <LeftSidebar user={mockUser} suggestedAccounts={suggestedAccounts} />
    </div>

    {/* Feed - Always visible */}
    <div className="flex-1 bg-gray-50 h-screen overflow-y-auto mt-16">
      <Feed posts={mockPosts} user={mockUser} />
    </div>

    {/* Right Sidebar - Hidden on small screens */}
    <div className="hidden md:block mt-16 rounded-lg shadow-sm">
      <RightSidebar />
    </div>
  </div>
);

};


export default SocialMediaApp;