# Intern Assignment - DevSamurai

A full-stack web application with authentication system and dashboard interface.

**Live Demo**: [https://intern-assignment-ds.vercel.app](https://intern-assignment-ds.vercel.app)

For testing purposes, you can use:
- **Email:** admin@gmail.com
- **Password:** 123456

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone Repository
```bash
git clone https://github.com/Dawn-Zzz/Intern-assignment-DS.git
cd Intern-assignment-DS
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment variables file
# For Windows (Command Prompt)
echo. > .env
# For Windows (PowerShell)
New-Item -ItemType File -Name ".env"
# For macOS/Linux
touch .env
```

Edit `.env` file:
```env
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET="your_jwt_secret_key"
PORT=3000
```

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed

# Start development server
npm run start:dev
```

Backend will run at: `http://localhost:3000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create environment variables file
# For Windows (Command Prompt)
echo. > .env
# For Windows (PowerShell)
New-Item -ItemType File -Name ".env"
# For macOS/Linux
touch .env
```

Edit `.env` file:
```env
VITE_API_BASE_URL=http://localhost:3000
```

```bash
# Start development server
npm run dev
```

Frontend will run at: `http://localhost:5173`

### 4. Development Workflow

1. **Start Backend:** `cd backend && npm run start:dev`
2. **Start Frontend:** `cd frontend && npm run dev`
3. **Access Application:** Open `http://localhost:5173`

## Screenshots

### Login Page
<img width="1852" height="868" alt="image" src="https://github.com/user-attachments/assets/404e66a8-a9d5-46ac-8350-a65d901b5a06" />

### Dashboard
<img width="1855" height="866" alt="image" src="https://github.com/user-attachments/assets/7abe5d0c-18e1-4f48-9763-6b064a59ea50" />
