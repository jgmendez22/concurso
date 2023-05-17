import React, { useState } from 'react';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleLogin = async () => {
    try {
      const apiUrl = 'https://0a00005c04769741801d124a005400c9.web-security-academy.net/'; // URL de la API
      const endpoint = 'ENDPOINT_DE_LA_API_AQUI'; // El endpoint de la API
      const method = 'POST'; // El método HTTP adecuado

      const requestBody = {
        username,
        password,
      };

      const response = await axios.request({
        method,
        url: `${apiUrl}/${endpoint}`,
        data: requestBody,
      });

      if (response.status === 200) {
        setResponse('HACKED');
      } else {
        setResponse('INGRESO FALLIDO');
      }
    } catch (error) {
      console.error(error);
      setResponse('INGRESO FALLIDO');
    }
  };

  return (
    <div>
      <h2>Pagina de Inicio</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
      <div>{response}</div>
    </div>
  );
};

export default LoginPage;
