const mockUser = {
  id: "user_001",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  username: "janedoe",
  password: "securePassword123", // ⚠️ Only for mock/testing — never store plain text passwords
  profilePhoto:
    "https://portraitpal.ai/wp-content/uploads/2024/08/corporate-headshot.jpg",
  preferences: {
    theme: "dark", // or "light"
    language: "en-US",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    layout: "compact", // or "comfortable"
  },
  role: "landlord", // or "admin", "tenant", etc.
  isEmailVerified: true,
  createdAt: "2024-03-15T10:00:00Z",
  lastLogin: "2025-04-09T14:30:00Z",
};

export default mockUser;
