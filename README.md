# 🌱 AgriLink360 Internal UI

A modern React + Python web application for AgriLink360's internal operations, featuring multi-language support and a clean, mobile-friendly interface.

## 🚀 Features

- **🔐 Secure Authentication** - User login and session management
- **📊 Dashboard** - User details, farm statistics, and quick navigation
- **📈 Market Analysis** - Real-time crop prices, demand trends, and market insights
- **💰 Microloans Section** - Loan applications, eligibility checks, and status tracking
- **🌿 Crop Health Prediction** - AI-driven crop health analysis and recommendations
- **🤖 Predictor Assistant** - Personalized guidance for next best actions
- **🛒 Sales Platform** - Product listings and sales management (Amazon-like interface)
- **🌍 Multi-language Support** - Available in English, Hindi, and Marathi

## 🏗️ Architecture

- **Frontend**: React with TypeScript
- **Backend**: Python FastAPI
- **Database**: SQLite (development) / PostgreSQL (production)
- **Authentication**: JWT-based authentication
- **Internationalization**: React i18next

## 📁 Project Structure

```
agrilink360-internal-ui/
├── backend/                 # Python FastAPI backend
│   ├── main.py             # Main FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── .env.example       # Environment variables template
├── frontend/               # React TypeScript frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── package.json       # Node.js dependencies
├── docs/                  # Documentation
└── README.md             # This file
```

## 🛠️ Development Setup

### Prerequisites

- Python 3.9+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\\Scripts\\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Run the development server:
   ```bash
   python main.py
   ```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The web application will be available at `http://localhost:3000`

## 📋 Key Pages

1. **Login Page** - Secure user authentication
2. **Dashboard** - Overview of user data and quick actions
3. **Market Analysis** - Crop pricing and market trends
4. **Microloans** - Loan application and management
5. **Crop Health** - AI-powered crop health predictions
6. **Assistant** - Personalized recommendations
7. **Sales Platform** - Product marketplace

## 🌐 API Endpoints

- `POST /api/auth/login` - User authentication
- `GET /api/auth/me` - Get current user info
- `GET /api/dashboard/stats` - Dashboard statistics
- `GET /api/market/data` - Market data and trends
- `POST /api/loans/apply` - Apply for microloan
- `GET /api/loans/status/{user_id}` - Get loan status
- `POST /api/crop-health/predict` - Crop health prediction
- `GET /api/assistant/recommendations/{user_id}` - Get recommendations
- `GET /api/sales/products` - Get products list
- `POST /api/sales/products` - Add new product

## 🚀 Deployment

### Production Build

Frontend:
```bash
cd frontend
npm run build
```

Backend:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 🧪 Testing

Backend tests:
```bash
cd backend
pytest
```

Frontend tests:
```bash
cd frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team.