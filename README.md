# Summit Seekers - Premium Outdoor Equipment Store

A modern, responsive e-commerce website for outdoor enthusiasts built with React, TypeScript, and Tailwind CSS. Summit Seekers (MNTN) offers a curated selection of premium outdoor equipment with a seamless shopping experience.

![Summit Seekers Preview](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🏔️ Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: 35+ carefully curated outdoor equipment items across 11 categories
- **Shopping Cart**: Add, remove, and update quantities with real-time total calculation
- **Checkout Process**: Complete checkout flow with shipping and payment forms
- **Order Confirmation**: Professional order success page with tracking information
- **Persistent Cart**: Cart data saved in localStorage across browser sessions

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Image Optimization**: Lazy loading with fallback images for better performance
- **Interactive Elements**: Hover effects, loading states, and micro-interactions

### 📱 Pages & Navigation
- **Homepage**: Hero section with featured products and company highlights
- **Equipment Catalog**: Filterable product grid with detailed item cards
- **About Page**: Company story, mission, values, and team information
- **Contact Page**: Contact form with business information and hours
- **Authentication**: Sign-in and login pages with form validation
- **Checkout & Success**: Complete purchase flow with order confirmation

### 🛠️ Technical Features
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Global state management for cart functionality
- **Vite**: Fast build tool and development server

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/pnpm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ParvaMakwana/Summit-Seekers.git
   cd Summit-Seekers
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
Summit-Seekers/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── cart/          # Shopping cart components
│   │   ├── equipment/     # Product-related components
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── context/           # React Context providers
│   │   └── CartContext.jsx # Cart state management
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx   # Landing page
│   │   ├── EquipmentPage.jsx # Product catalog
│   │   ├── AboutPage.jsx  # About us page
│   │   ├── ContactPage.jsx # Contact page
│   │   ├── CheckoutPage.jsx # Checkout flow
│   │   └── ...           # Other pages
│   ├── App.jsx           # Main app component
│   ├── AppRouter.jsx     # Route configuration
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite build configuration
└── README.md            # Project documentation
```

## 🛒 Product Categories

The store features equipment across these categories:
- **Hiking & Trekking**: Boots, poles, backpacks
- **Camping**: Tents, sleeping bags, camp furniture
- **Climbing**: Harnesses, ropes, protection gear
- **Water Sports**: Kayaks, life jackets, paddles
- **Winter Sports**: Skis, snowboards, winter clothing
- **Navigation**: GPS devices, compasses, maps
- **Safety & Survival**: First aid, emergency gear
- **Apparel**: Technical clothing, base layers
- **Footwear**: Hiking boots, approach shoes
- **Accessories**: Headlamps, multi-tools, hydration
- **Electronics**: Action cameras, portable chargers

## 🎯 Key Features Showcase

### Shopping Cart System
- Real-time cart updates with quantity management
- Persistent storage across browser sessions
- Smooth animations and transitions
- Mobile-optimized cart sidebar

### Product Display
- High-quality product images with fallback support
- Detailed product information and ratings
- Feature tags and pricing with sale indicators
- Responsive grid layout

### Checkout Process
- Multi-step form with validation
- Shipping and billing information collection
- Payment simulation with processing states
- Order confirmation and next steps

## 🔧 Development

### Available Scripts
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint for code quality

### Code Quality
- ESLint configuration for consistent code style
- TypeScript for type safety
- Component-based architecture for maintainability
- Responsive design principles

## 🚀 Deployment

This project is configured for easy deployment to various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `pnpm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for client-side routing

### GitHub Pages
1. Build the project with proper base path
2. Deploy to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🤝 Contributing

We welcome contributions to Summit Seekers! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes across different devices
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for high-quality outdoor photography
- **Tailwind CSS** for the utility-first CSS framework
- **React Team** for the amazing React library
- **Vite Team** for the fast build tool

## 📞 Support

If you have any questions or need help with the project:

- 📧 Email: support@summit-seekers.com
- 🐛 Issues: [GitHub Issues](https://github.com/ParvaMakwana/Summit-Seekers/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/ParvaMakwana/Summit-Seekers/discussions)

---

**Built with ❤️ for outdoor enthusiasts by the Summit Seekers team**

*Ready to gear up for your next adventure? Start exploring our premium outdoor equipment collection today!*