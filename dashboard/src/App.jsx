import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Bell, Settings, Search, ChevronDown, Plus, ArrowUpRight, ArrowDownRight, Eye, MessageSquare, Heart, Share2, Calendar, Zap } from 'lucide-react';

export default function AgencyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    users: 0,
    engagement: 0,
    conversion: 0
  });

  const stats = [
    { label: 'Total Revenue', value: 124500, prefix: '$', change: 12.5, icon: DollarSign, color: 'from-green-400 to-emerald-500' },
    { label: 'Active Users', value: 8742, prefix: '', change: 8.2, icon: Users, color: 'from-blue-400 to-cyan-500' },
    { label: 'Engagement Rate', value: 68.4, prefix: '', suffix: '%', change: -2.4, icon: Activity, color: 'from-purple-400 to-pink-500' },
    { label: 'Conversion Rate', value: 24.8, prefix: '', suffix: '%', change: 5.1, icon: TrendingUp, color: 'from-orange-400 to-red-500' }
  ];

  const projects = [
    { name: 'Brand Redesign', status: 'In Progress', progress: 75, client: 'TechCorp', color: 'bg-blue-500' },
    { name: 'Marketing Campaign', status: 'Review', progress: 90, client: 'StartupXYZ', color: 'bg-purple-500' },
    { name: 'Website Development', status: 'In Progress', progress: 45, client: 'RetailCo', color: 'bg-green-500' },
    { name: 'Social Media Strategy', status: 'Planning', progress: 20, client: 'FoodBrand', color: 'bg-orange-500' }
  ];

  const activities = [
    { user: 'Sarah Chen', action: 'completed task', project: 'Brand Redesign', time: '5m ago', avatar: 'from-pink-400 to-rose-500' },
    { user: 'Mike Johnson', action: 'commented on', project: 'Marketing Campaign', time: '12m ago', avatar: 'from-blue-400 to-cyan-500' },
    { user: 'Emma Davis', action: 'uploaded files to', project: 'Website Development', time: '23m ago', avatar: 'from-purple-400 to-pink-500' },
    { user: 'Alex Turner', action: 'started sprint for', project: 'Social Media Strategy', time: '1h ago', avatar: 'from-green-400 to-emerald-500' }
  ];

  const socialMetrics = [
    { platform: 'Instagram', followers: '45.2K', engagement: '8.4%', growth: 12, posts: 156, color: 'from-pink-500 to-rose-500' },
    { platform: 'Twitter', followers: '28.7K', engagement: '6.2%', growth: 8, posts: 342, color: 'from-blue-400 to-cyan-500' },
    { platform: 'LinkedIn', followers: '18.3K', engagement: '12.8%', growth: 15, posts: 89, color: 'from-blue-600 to-indigo-600' },
    { platform: 'Facebook', followers: '62.1K', engagement: '5.7%', growth: -3, posts: 234, color: 'from-blue-500 to-blue-600' }
  ];

  useEffect(() => {
    stats.forEach((stat, i) => {
      let current = 0;
      const target = stat.value;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [stat.label.toLowerCase().replace(' ', '')]: current
        }));
      }, 20);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-black/50 backdrop-blur-xl border-r border-white/10 z-40">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AgencyPro
              </h1>
              <p className="text-xs text-gray-400">Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'projects', label: 'Projects', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'social', label: 'Social Media', icon: MessageSquare },
              { id: 'calendar', label: 'Calendar', icon: Calendar },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-white'
                      : 'hover:bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
            <div className="flex-1">
              <p className="font-semibold text-sm">John Doe</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Welcome back, John
            </h2>
            <p className="text-gray-400">Here's what's happening with your projects today</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-110">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30 p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                      stat.change >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {stat.change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {Math.abs(stat.change)}%
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {stat.prefix}{animatedValues[stat.label.toLowerCase().replace(' ', '')] ? Math.floor(animatedValues[stat.label.toLowerCase().replace(' ', '')]) : 0}{stat.suffix}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Projects Section */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Active Projects</h3>
              <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm font-semibold">
                View All
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-white/20 p-5 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-2 h-2 ${project.color} rounded-full animate-pulse`} />
                        <h4 className="font-semibold text-lg">{project.name}</h4>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">Client: {project.client}</p>
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {project.progress}%
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${project.color} rounded-full transition-all duration-1000 relative overflow-hidden`}
                      style={{ width: `${project.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>

            <div className="space-y-4">
              {activities.map((activity, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${activity.avatar} rounded-full flex-shrink-0 group-hover:scale-110 transition-transform`} />
                  <div className="flex-1">
                    <p className="text-sm mb-1">
                      <span className="font-semibold">{activity.user}</span>
                      <span className="text-gray-400"> {activity.action} </span>
                      <span className="text-purple-400">{activity.project}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Metrics */}
        <div className="mt-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-6">Social Media Performance</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMetrics.map((metric, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-white/20 p-6 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-lg">{metric.platform}</h4>
                    <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                      metric.growth >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {metric.growth >= 0 ? '↑' : '↓'} {Math.abs(metric.growth)}%
                    </div>
                  </div>

                  <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {metric.followers}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Engagement</span>
                      <span className="font-semibold text-purple-400">{metric.engagement}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Posts</span>
                      <span className="font-semibold">{metric.posts}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                      <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="flex-1 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                      <Heart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                    <button className="flex-1 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                      <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}