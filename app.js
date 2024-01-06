const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const configHeader = {
  accept: 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
  'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
  'x-foody-access-token': 'a4f99e77b7c7460c5a1d4c81de7acb064238fa80b4cbf2add5c478037386ec459f799d1b02a5c34789bf0b7b7f76ab5110b15525f91d4e416de424757d4182f4',
  'x-foody-api-version': '1',
  'x-foody-app-type': '1004',
  'x-foody-client-id': '',
  'x-foody-client-language': 'vi',
  'x-foody-client-type': '1',
  'x-foody-client-version': '3.0.0',
  'x-sap-ri': 'ccdb616510ae97d358f6b53a655a8ff5dd39de4c1451481d',
  'Content-Type': 'application/json'
}

const url = `https://gappapi.deliverynow.vn/api/dish/get_delivery_dishes?id_type=2&request_id=309258`

// Định nghĩa một route
app.get('/api/get-order', (req, res) => {
  axios.get(url, {
    headers: configHeader
  })
    .then(response => {
      console.log(response.data.reply.menu_infos);
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
    
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});