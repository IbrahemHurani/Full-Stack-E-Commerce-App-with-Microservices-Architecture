# Full-Stack E-Commerce App with Microservices Architecture

A modern, scalable full-stack e-commerce application built with a microservices architecture. This project includes a web admin panel, a Node.js backend, and a mobile application for iOS, Android, and web platforms.

## 📋 Project Overview

This e-commerce platform is structured as a multi-tier application:

- **Admin Panel**: Web-based admin dashboard for managing the e-commerce platform
- **Backend**: RESTful API built with Express.js and Node.js
- **Mobile App**: Cross-platform mobile application for both iOS and Android

## 🏗️ Project Structure

```
├── admin/          # Admin dashboard (React + Vite)
├── backend/        # Backend API (Node.js + Express)
├── mobile/         # Mobile app (React Native + Expo)
├── package.json    # Root package configuration
└── README.md       # This file
```

## 🛠️ Tech Stack & Tools

### Frontend (Admin Panel)

| Tool          | Version | Purpose                                 |
| ------------- | ------- | --------------------------------------- |
| **React**     | 19.2.6  | UI library for building user interfaces |
| **Vite**      | 8.0.12  | Modern build tool and dev server        |
| **Clerk**     | 5.61.8  | Authentication and user management      |
| **ESLint**    | 10.3.0  | Code linting and quality assurance      |
| **React DOM** | 19.2.6  | React rendering library for web         |

### Backend (API Server)

| Tool              | Version  | Purpose                                 |
| ----------------- | -------- | --------------------------------------- |
| **Node.js**       | >=20.0.0 | JavaScript runtime environment          |
| **Express**       | 5.2.1    | Web framework for building REST APIs    |
| **Mongoose**      | 8.24.0   | MongoDB object modeling                 |
| **Clerk Express** | 2.1.22   | Backend authentication middleware       |
| **Cloudinary**    | 2.8.0    | Cloud storage for images and media      |
| **Inngest**       | 4.5.0    | Serverless job scheduling and workflows |
| **dotenv**        | 17.4.2   | Environment variable management         |

### Mobile App

| Tool                 | Version | Purpose                                   |
| -------------------- | ------- | ----------------------------------------- |
| **React Native**     | 0.85.3  | Framework for building native mobile apps |
| **Expo**             | 56.0.6  | Platform for building React Native apps   |
| **Expo Router**      | 56.2.7  | File-based routing for mobile apps        |
| **TypeScript**       | 6.0.3   | Typed superset of JavaScript              |
| **React**            | 19.2.3  | UI library                                |
| **React DOM**        | 19.2.3  | Web rendering for Expo Web                |
| **React Native Web** | 0.21.0  | Run React Native on web                   |
| **Expo UI**          | 56.0.14 | Pre-built UI components                   |
| **Gesture Handler**  | 2.31.1  | Native gesture handling                   |
| **Reanimated**       | 4.3.1   | Powerful animations library               |

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 20.0.0 or higher
- **npm**: Version 8 or higher
- **Expo CLI**: For mobile development (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IbrahemHurani/Full-Stack-E-Commerce-App-with-Microservices-Architecture.git
   cd Full-Stack-E-Commerce-App-with-Microservices-Architecture
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

### Running Applications

#### Admin Panel

```bash
cd admin
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
```

#### Backend API

```bash
cd backend
npm run dev    # Start with watch mode
npm start      # Start production server
```

#### Mobile App

```bash
cd mobile
npm start      # Start Expo development server
npm run android # Start Android emulator
npm run ios    # Start iOS simulator
npm run web    # Run on web browser
npm run lint   # Run linting
```

## 🔐 Authentication

The application uses **Clerk** for authentication across all platforms:

- **Admin Panel**: Uses `@clerk/clerk-react` for web authentication
- **Backend**: Uses `@clerk/express` middleware for API protection
- **Mobile**: Clerk integration for mobile app authentication

## 🗄️ Database

- **MongoDB**: Primary database for storing application data
- **Mongoose**: ODM (Object Data Modeling) for MongoDB interactions

## ☁️ Cloud Services

- **Cloudinary**: Image and media storage/optimization
- **Inngest**: Serverless job scheduling and event-driven workflows

## 📦 Environment Configuration

Each application uses environment variables configured via `.env` files:

- **Backend**: Database URL, Cloudinary credentials, Clerk keys, etc.
- **Admin**: Clerk API keys
- **Mobile**: API endpoints, Clerk keys

## 🔄 Microservices Architecture

This project follows microservices principles:

- **Separation of Concerns**: Each service handles specific business logic
- **Scalability**: Independent scaling of frontend, backend, and mobile services
- **Technology Flexibility**: Each service uses appropriate technologies
- **API-First Design**: Backend exposes RESTful APIs consumed by frontend and mobile apps

## 📝 Scripts

### Root Level

```bash
npm run build  # Install dependencies and build admin app
npm start      # Start backend server
```

### Admin

```bash
npm run dev    # Development server
npm run build  # Production build
npm run lint   # Code linting
npm run preview # Preview production build
```

### Backend

```bash
npm run dev    # Development with watch mode
npm start      # Production start
```

### Mobile

```bash
npm start      # Start development server
npm run android # Android development
npm run ios    # iOS development
npm run web    # Web development
npm run lint   # Code linting
npm run reset-project # Reset project to clean state
```

## 🎯 Key Features

- ✅ Multi-platform support (Web Admin, Web API, iOS, Android)
- ✅ Modern authentication with Clerk
- ✅ Cloud-based image management with Cloudinary
- ✅ Serverless job scheduling with Inngest
- ✅ TypeScript support for type safety
- ✅ Scalable microservices architecture
- ✅ Cross-platform code sharing where possible

## 📚 Development Guidelines

- **Code Quality**: Use ESLint and follow project conventions
- **Type Safety**: Leverage TypeScript in the mobile app
- **Environment Variables**: Never commit `.env` files; use `.env.example` templates
- **Testing**: Implement unit and integration tests as needed

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Ibrahem Hurani**

- GitHub: [IbrahemHurani](https://github.com/IbrahemHurani)
- Repository: [Full-Stack-E-Commerce-App-with-Microservices-Architecture](https://github.com/IbrahemHurani/Full-Stack-E-Commerce-App-with-Microservices-Architecture)

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Last Updated**: May 2026
