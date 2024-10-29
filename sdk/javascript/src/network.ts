// src/network.ts
export const network = {
    async get(url: string, headers: Record<string, string> = {}) {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
      return response.json();
    },
  
    async post(url: string, data: any, headers: Record<string, string> = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
};
