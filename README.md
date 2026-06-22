# SmartCityFix 🚀

SmartCityFix is a Smart Civic Issue Reporting and Management Platform that enables citizens to report civic infrastructure issues such as potholes, garbage overflow, water leakage, and streetlight failures through a digital platform.

The system allows users to submit complaints with images and location details, while administrators can monitor complaints through a centralized dashboard.

---

## 📌 Problem Statement

Traditional civic complaint systems are often slow, manual, and lack transparency. Citizens face difficulties in reporting issues and tracking their resolution status.

SmartCityFix addresses these challenges by providing:

- Digital complaint registration
- Complaint tracking system
- Image-based issue reporting
- Location-based complaint submission
- Centralized complaint management
- Admin monitoring dashboard

---

## ✨ Features

### 👤 Citizen Features

- User Registration
- Secure Login using JWT Authentication
- Raise Civic Complaints
- Upload Issue Images
- Capture Current Location
- Track Complaint Status

### 🛠️ Admin Features

- View All Complaints
- Dashboard Statistics
- Complaint Monitoring
- Recent Complaint Tracking

---

## 🏗️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- React Router

### Backend

- Spring Boot
- Spring Security
- JWT Authentication
- REST APIs

### Database

- PostgreSQL

### External Services

- Browser Geolocation API
- Image Upload Support

---

## 📂 Project Structure

```text
SmartCityFix
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
└── README.md
```

---

## 🔐 Authentication

SmartCityFix uses JWT (JSON Web Token) Authentication.

### Login Flow

1. User logs in.
2. Backend validates credentials.
3. JWT Token is generated.
4. Token is sent to the frontend.
5. Protected APIs are accessed using:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## 🗄️ Database Design

### Users Table

| Column | Type |
|----------|---------|
| id | Long |
| name | String |
| email | String |
| password | String |
| role | String |

### Complaints Table

| Column | Type |
|----------|---------|
| id | Long |
| title | String |
| description | Text |
| category | String |
| status | String |
| imageName | String |
| imageType | String |
| imageData | Binary |
| address | String |
| latitude | Double |
| longitude | Double |
| createdAt | Timestamp |
| updatedAt | Timestamp |
| userId | Long |

Relationship:

```text
User
  |
  └── Multiple Complaints
```

---

## 📡 API Endpoints

### Authentication APIs

#### Register User

```http
POST /auth/register
```

#### Login User

```http
POST /auth/login
```

---

### Complaint APIs

#### Create Complaint

```http
POST /complaints/user/{userId}
```

#### Upload Complaint Image

```http
POST /complaints/user/{userId}/upload
```

#### Get User Complaints

```http
GET /complaints/user/{userId}
```

---

### Admin APIs

#### Dashboard Statistics

```http
GET /admin/dashboard/stats
```

#### Recent Complaints

```http
GET /admin/recent
```

---

## 🔄 Workflow

```text
Register
   ↓
Login
   ↓
Raise Complaint
   ↓
Upload Image
   ↓
Capture Location
   ↓
Submit Complaint
   ↓
Database Storage
   ↓
Admin Dashboard Update
   ↓
Complaint Tracking
```

---

## 📸 Screens

### Landing Page
- Introduction to platform
- Login & Register options

### Login Page
- User authentication

### Register Page
- New user registration

### User Dashboard
- Complaint list
- Complaint status tracking

### Raise Complaint Page
- Complaint submission
- Image upload
- Location capture

### Admin Dashboard
- Statistics cards
- Recent complaints
- Complaint monitoring

---

## 🎯 Objectives

- Simplify civic issue reporting
- Digitize complaint management
- Improve transparency
- Enable complaint tracking
- Provide complaint analytics
- Maintain digital records

---

## ✅ Advantages

- Easy complaint reporting
- Centralized management
- Better transparency
- Real-time monitoring
- Digital record keeping
- Reduced manual effort

---

## ⚠️ Limitations

- Prototype Version
- Web Application Only
- Internet Connectivity Required
- Limited to Current Features

---

## 🚀 Future Enhancements

- Mobile Application
- AI-based Complaint Categorization
- Real-time Notifications
- GIS Map Integration
- Complaint Escalation System
- Multi-language Support

---

## 👨‍💻 Team Kryptronix

- Aadrika Katiyar
- Aman Singh
- Arin Chaurasia

---

⭐ If you like this project, don't forget to star the repository!
