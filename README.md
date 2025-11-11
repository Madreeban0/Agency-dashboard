# 📊 Interactive Agency Dashboard

A modern, feature-rich agency dashboard built with React and Vite, featuring real-time data visualization, animated metrics, and a sleek dark-themed UI. This project showcases advanced frontend development techniques including state management, smooth animations, and responsive design.

## 🌟 Overview

AgencyPro Dashboard is a comprehensive project management and analytics platform designed for digital agencies. It provides an intuitive interface to monitor key performance indicators (KPIs), track project progress, manage social media metrics, and oversee team activities in real-time.

## ✨ Key Features

### 📈 Data Visualization & Analytics
- **Animated Number Counters**: Smooth counting animations on load for revenue, users, engagement, and conversion metrics
- **Real-time KPI Tracking**: Monitor total revenue, active users, engagement rate, and conversion rate with trend indicators
- **Multi-metric Dashboard**: Comprehensive overview with color-coded gradient cards
- **Performance Trends**: Visual indicators showing positive/negative changes in metrics

### 🎯 Project Management
- **Project Progress Tracking**: Visual progress bars for ongoing projects
- **Status Indicators**: Track project stages (In Progress, Review, Planning)
- **Client Association**: Link projects to specific clients
- **Color-coded Organization**: Easy visual differentiation between projects

### 📱 Social Media Analytics
- **Multi-platform Monitoring**: Track Instagram, Twitter, LinkedIn, and Facebook metrics
- **Engagement Metrics**: Monitor follower counts, engagement rates, and growth trends
- **Post Analytics**: Keep track of total posts per platform
- **Growth Indicators**: Visual representation of platform performance

### 🔔 Activity Feeds & Notifications
- **Real-time Updates**: Live activity feed showing team actions
- **User Activity Tracking**: Monitor task completions, comments, file uploads, and sprint starts
- **Timestamp Display**: Recent activity with relative time indicators
- **User Avatars**: Color-coded gradient avatars for team members

### 🎨 User Interface & Experience
- **Modern Dark Theme**: Sleek gradient background (gray-950 to black)
- **Responsive Layout**: Sidebar navigation with multi-column grid system
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions
- **Glassmorphism Design**: Backdrop blur effects for a modern aesthetic
- **Icon Integration**: Lucide React icons throughout the interface

### 🔄 State Management & Interactivity
- **Tab Switching**: Navigate between Overview, Projects, Analytics, Social Media, Calendar, and Settings
- **Animated Values**: Smooth transitions for numerical data updates
- **Interactive Navigation**: Active state indicators for selected tabs
- **Dynamic Content**: Content updates based on user interaction

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.2.0**: Latest version with modern hooks (useState, useEffect)
- **Vite**: Next-generation frontend tooling for fast development
- **Rolldown-vite 7.2.2**: Optimized build tool

### Styling & UI
- **Tailwind CSS 3.4.18**: Utility-first CSS framework
- **PostCSS 8.5.6**: CSS transformations
- **Autoprefixer 10.4.22**: Automatic vendor prefixes
- **Lucide React 0.553.0**: Beautiful, consistent icon set

### Development Tools
- **ESLint 9.39.1**: Code linting and quality assurance
- **React Hooks Plugin**: Enforces rules of hooks
- **React Refresh Plugin**: Fast refresh during development
- **Vite Plugin React**: React integration for Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Madreeban0/Agency-dashboard.git
   cd Agency-dashboard
   ```

2. **Navigate to the dashboard directory**
   ```bash
   cd dashboard
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Usage

### Development Mode
Run the development server with hot module replacement (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Check code quality and style:
```bash
npm run lint
```

## 📁 Project Structure

```
Agency-dashboard/
├── dashboard/
│   ├── src/
│   │   ├── App.jsx          # Main dashboard component
│   │   ├── main.jsx         # Application entry point
│   │   └── assets/          # Static assets
│   ├── public/              # Public static files
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies and scripts
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.cjs  # Tailwind CSS configuration
│   ├── postcss.config.cjs   # PostCSS configuration
│   └── eslint.config.js     # ESLint configuration
└── README.md                # Project documentation
```

## 🎯 Core Components

### Dashboard Metrics
- **Revenue Tracking**: $124,500 with 12.5% growth
- **User Monitoring**: 8,742 active users with 8.2% increase
- **Engagement Rate**: 68.4% with trend analysis
- **Conversion Rate**: 24.8% with 5.1% improvement

### Project Examples
1. Brand Redesign (TechCorp) - 75% complete
2. Marketing Campaign (StartupXYZ) - 90% complete
3. Website Development (RetailCo) - 45% complete
4. Social Media Strategy (FoodBrand) - 20% complete

### Navigation Sections
- Overview (default)
- Projects
- Analytics
- Social Media
- Calendar
- Settings

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with purple/pink gradient accents
- **Typography**: Bold headers with gradient text effects
- **Animations**: Smooth transitions, pulse effects, and scale transformations
- **Layout**: Fixed sidebar (72 units) with flexible main content area
- **Responsive**: Grid system adapts from 1 to 4 columns based on screen size

## 🔧 Technical Highlights

### Animation Implementation
- Number counters using `setInterval` for smooth counting
- CSS transitions for hover effects and state changes
- Gradient backgrounds with multiple color stops
- Animated pulse effects for notifications and badges

### State Management
- React Hooks (useState) for active tab and animated values
- useEffect for initialization and cleanup
- Component-level state management
- Efficient re-rendering optimization

### Performance Optimizations
- Vite's fast HMR for development
- Optimized production builds with rolldown
- Lazy loading and code splitting
- CSS purging with Tailwind

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Madreeban0**
- GitHub: [@Madreeban0](https://github.com/Madreeban0)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Tailwind CSS for the utility-first approach
- Lucide for the beautiful icon set

---

**Note**: This is a demonstration project showcasing modern React development practices, UI/UX design, and frontend animation techniques.