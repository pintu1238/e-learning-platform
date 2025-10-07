# 🎓 Learning Platform - Udemy Clone

A modern, responsive learning management system built with Next.js 15, React 19, and Bootstrap 5. This platform provides a comprehensive online learning experience with course management, user authentication, and interactive features.

## Live Link:-   https://e-learning-platform-black.vercel.app/


## 🚀 Features

### 🏠 **Homepage & Navigation**
- **Hero Banner** - Eye-catching landing section with course highlights
- **Course Categories** - Interactive tabs for Data Science, Web Development, Leadership
- **Featured Courses** - Swiper-based course carousel with ratings and pricing
- **Learning Plans** - Subscription-based learning paths
- **User Feedback** - Testimonials and reviews section

### 👤 **Authentication System**
- **User Registration** - Complete signup flow with validation
- **Login System** - Secure authentication with form validation
- **Password Management** - Forgot password, reset, and change password
- **OTP Verification** - Two-factor authentication support
- **Success Pages** - User-friendly confirmation screens

### 📚 **Course Management**
- **Course Catalog** - Browse all available courses
- **Course Categories** - Organized by subjects (Data Science, Web Development, etc.)
- **Course Details** - Detailed course information with pricing
- **Search & Filter** - Find courses by category, price, rating
- **Wishlist** - Save courses for later purchase

### 🛒 **E-commerce Features**
- **Shopping Cart** - Add/remove courses, quantity management
- **Checkout Process** - Secure payment flow
- **Pricing Plans** - Multiple subscription options
- **Thank You Pages** - Order confirmation

### 📖 **Learning Dashboard**
- **My Learning** - Track enrolled courses and progress
- **Course Progress** - Visual progress indicators
- **Learning Tools** - Additional resources and materials
- **Archived Courses** - Access to completed courses

### 📄 **Content Management**
- **About Us** - Company information and mission
- **Blogs** - Educational content and updates
- **FAQ Section** - Frequently asked questions
- **Contact Us** - Support and inquiry forms
- **Privacy Policy** - Legal compliance
- **Terms & Conditions** - User agreements
- **Careers** - Job opportunities and company culture

### 🎯 **Skills & Specializations**
- **Skills Page** - Browse courses by specific skills
- **Paid Skills** - Premium skill-based courses
- **Career Development** - Professional growth paths
- **Analytics** - Learning progress tracking

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Bootstrap 5** - Responsive UI framework
- **React Bootstrap** - Bootstrap components for React
- **Sass/SCSS** - Advanced CSS preprocessing
- **FontAwesome** - Icon library
- **Swiper.js** - Touch slider component

### **Styling & UI**
- **Custom SCSS** - Modular styling architecture
- **Responsive Design** - Mobile-first approach
- **Bootstrap Grid** - Flexible layout system
- **Custom Components** - Reusable UI elements

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Next.js Config** - Optimized build configuration
- **Hot Reload** - Development server with fast refresh

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/               # User login
│   │   ├── signup/              # User registration
│   │   ├── forget_passward/     # Password recovery
│   │   ├── otp_section/         # OTP verification
│   │   ├── resetPassword/       # Password reset
│   │   ├── resetSuccess/        # Reset confirmation
│   │   └── ChangePassword/      # Change password
│   │
│   ├── (dashboard)/             # User dashboard
│   │   ├── dashboard/           # Main dashboard
│   │   ├── my_learning/         # Learning progress
│   │   ├── wishlist/            # Saved courses
│   │   └── chaangePasswordDashboard/ # Dashboard password change
│   │
│   ├── (cms)/                   # Content management
│   │   ├── about/               # About page
│   │   ├── aboutus/             # About us details
│   │   ├── blogs/               # Blog posts
│   │   ├── careers/             # Career opportunities
│   │   ├── contactUs/           # Contact form
│   │   ├── FAQ_S/               # FAQ section
│   │   ├── Privacy_policy/      # Privacy policy
│   │   └── terms_conditions/    # Terms & conditions
│   │
│   ├── components/              # Reusable components
│   │   ├── header.js            # Navigation header
│   │   ├── footer.js            # Site footer
│   │   ├── banner.js            # Hero banner
│   │   ├── all_courses.js       # Course catalog
│   │   ├── cart.js              # Shopping cart
│   │   ├── my_learning.js       # Learning dashboard
│   │   ├── plan.js              # Subscription plans
│   │   ├── feedback.js          # User testimonials
│   │   └── ...                  # Other components
│   │
│   ├── homepage/                # Homepage content
│   ├── allcourses_page/         # All courses listing
│   ├── cart/                    # Shopping cart
│   ├── my_learning/             # Learning dashboard
│   ├── skills_page/             # Skills-based courses
│   ├── careerpage/              # Career development
│   ├── thankyou/                # Order confirmation
│   ├── 404page/                 # Error page
│   ├── not-found.js             # Next.js 404 handler
│   ├── layout.js                # Root layout
│   ├── page.js                  # Homepage
│   └── globals.css              # Global styles
│
└── public/                      # Static assets
    ├── images/                  # Images and media
    ├── sass/                    # SCSS source files
    │   ├── base/                # Base styles
    │   └── pages/               # Page-specific styles
    └── ...                      # Other static files
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd learning_copy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Build and Export
npm run export       # Build and export static files
```

## 🌐 Routes & Navigation

### **Public Routes**
| Route | Description | Component |
|-------|-------------|-----------|
| `/` | Homepage | Homepage |
| `/allcourses_page` | All Courses | AllCoursesPage |
| `/skills_page` | Skills Page | SkillsPage |
| `/skills_page/skillpage_paid` | Paid Skills | SkillPagePaid |
| `/careerpage` | Career Development | CareerPage |
| `/cart` | Shopping Cart | Cart |
| `/thankyou` | Order Confirmation | ThankYou |

### **Authentication Routes**
| Route | Description | Component |
|-------|-------------|-----------|
| `/login` | User Login | Login |
| `/signup` | User Registration | Signup |
| `/forget_passward` | Forgot Password | ForgetPassword |
| `/otp_section` | OTP Verification | OTPSection |
| `/resetPassword` | Reset Password | ResetPassword |
| `/resetSuccess` | Reset Success | ResetSuccess |
| `/ChangePassword` | Change Password | ChangePassword |

### **Dashboard Routes**
| Route | Description | Component |
|-------|-------------|-----------|
| `/dashboard` | User Dashboard | Dashboard |
| `/my_learning` | My Learning | MyLearning |
| `/wishlist` | Wishlist | Wishlist |
| `/chaangePasswordDashboard` | Dashboard Password Change | ChangePasswordDashboard |

### **CMS Routes**
| Route | Description | Component |
|-------|-------------|-----------|
| `/about` | About Page | About |
| `/aboutus` | About Us Details | AboutUs |
| `/blogs` | Blog Posts | Blogs |
| `/careers` | Career Opportunities | Careers |
| `/contactUs` | Contact Form | ContactUs |
| `/FAQ_S` | FAQ Section | FAQ |
| `/Privacy_policy` | Privacy Policy | PrivacyPolicy |
| `/terms_conditions` | Terms & Conditions | TermsConditions |

### **Error Routes**
| Route | Description | Component |
|-------|-------------|-----------|
| `/404page` | Custom 404 Page | Error404 |
| `/_not-found` | Next.js 404 Handler | NotFound |

## 🎨 Key Components

### **Header Component**
- Responsive navigation with mobile menu
- Course category dropdowns
- Search functionality
- User authentication links
- Shopping cart indicator

### **Course Components**
- **All Courses** - Interactive course catalog with filtering
- **Course Cards** - Individual course display with ratings
- **Course Categories** - Tabbed navigation for different subjects
- **Swiper Integration** - Touch-friendly course carousels

### **Authentication Components**
- **Login/Signup Forms** - Validated user registration
- **Password Management** - Secure password handling
- **OTP Verification** - Two-factor authentication
- **Success Pages** - User-friendly confirmations

### **Dashboard Components**
- **My Learning** - Course progress tracking
- **Wishlist** - Saved courses management
- **Learning Tools** - Additional resources
- **Progress Indicators** - Visual learning progress

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. The `vercel.json` configuration will handle routing

### **Netlify**
1. Connect your repository to Netlify
2. Use the provided `netlify.toml` configuration
3. Deploy with automatic builds

### **Other Platforms**
- The project uses `output: 'standalone'` for maximum compatibility
- Build command: `npm run build`
- Start command: `npm run start`

## 🔧 Configuration Files

### **next.config.mjs**
- Optimized for production builds
- Image optimization settings
- Static export configuration
- Compression enabled

### **eslint.config.mjs**
- Next.js core web vitals
- Custom rules for React components
- Disabled unescaped entities rule

### **package.json**
- Next.js 15 with App Router
- React 19 with concurrent features
- Bootstrap 5 for responsive design
- FontAwesome for icons
- Swiper for carousels

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Bootstrap Grid** - Flexible responsive layout
- **Touch Friendly** - Swiper integration for mobile
- **Cross Browser** - Compatible with all modern browsers

## 🎯 Features Highlights

### **Interactive Course Catalog**
- Dynamic course filtering by category
- Real-time search functionality
- Swiper-based course carousels
- Responsive course cards

### **User Experience**
- Smooth page transitions
- Loading states and animations
- Error handling with custom 404 pages
- Mobile-optimized navigation

### **Performance**
- Next.js 15 optimizations
- Image optimization
- Code splitting
- Static generation where possible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Bootstrap Team** - For the responsive UI framework
- **FontAwesome** - For the comprehensive icon library
- **Swiper.js** - For the touch slider functionality

---

**Built with ❤️ using Next.js 15, React 19, and Bootstrap 5**

For support or questions, please open an issue in the repository.
