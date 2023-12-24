// Ваш файл App.jsx

import React from "react";
import LoginPage from "./src/LoginPage";

const App = () => {
  const handleLogin = async () => {
    // В этой части вы отправите запрос на бэкенд
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com", // Замените на введенные вами данные
          password: "password123", // Замените на введенные вами данные
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Login successful");
        // Дополнительные действия, например, перенаправление на другую страницу
      } else {
        console.error("Login failed:", data.message);
        // Обработка ошибок, например, отображение сообщения об ошибке
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div>
      <h1>Your Library App</h1>
      <LoginPage onLogin={handleLogin} />
    </div>
  );
};

export default App;
