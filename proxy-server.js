const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Định nghĩa middleware proxy cho '/api'
const apiProxy = createProxyMiddleware('/api', {
    target: 'https://gappapi.deliverynow.vn', // Địa chỉ máy chủ cần chuyển tiếp đến
    changeOrigin: true, // Chuyển đổi origin để máy chủ đích chấp nhận yêu cầu
    secure: false, // Tắt SSL verification (chỉ sử dụng trong môi trường phát triển)
  });

// Sử dụng middleware proxy cho '/api'
app.use('/api', apiProxy);

// Server lắng nghe trên cổng 3000
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});