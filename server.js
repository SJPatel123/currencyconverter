import Express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';

const app = Express();

app.use(Express.json());
app.use(bodyParser.json());
app.use(cors());

import axios from 'axios';
import bodyParser from 'body-parser';

app.get("/get-currencies", bodyParser.json(), async (req, res) => {
  const options_currencies = {
    method: 'GET',
    url: 'https://currency-converter-pro1.p.rapidapi.com/currencies',
    headers: {
      'X-RapidAPI-Key': '80ac8a58b8msh9e75c5e74bc0502p1cfb77jsn114a1a0296b5',
      'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
    }
  };
  
  var objectArr = [];
  
  try {
    const response_cuurencies = await axios.request(options_currencies);
    const resultObj = response_cuurencies.data;
    const res_keys_obj = resultObj['result'];
    const res_keys = Object.keys(res_keys_obj);
    const res_values = Object.values(res_keys_obj);
  
    res_keys.map((key_item, index) => {
      const obj = {
        value: key_item,
        label: key_item+': '+res_values[index]
      }
      objectArr.push(obj);
    });
    res.send(objectArr);
    const key = (objectArr[0].label).split(':')[0];
    // console.log(key);
  } catch (error) {
    console.error(error);
  }
});

app.get('/convert-currency', async (req, res) => {
  const { selectedOptionFromCountry, selectedOptionToCountry, amount } = req.query;

  // console.log("Country-1: ",selectedOptionFromCountry['value']);
  // console.log("Country-2: ",selectedOptionToCountry['value']);
  // console.log("Amount: ",amount);

  const options_convert_currency = {
    method: 'GET',
    url: 'https://currency-converter-pro1.p.rapidapi.com/convert',
    params: {
      from: selectedOptionFromCountry['value'],
      to: selectedOptionToCountry['value'],
      amount: amount
    },
    headers: {
      'X-RapidAPI-Key': '80ac8a58b8msh9e75c5e74bc0502p1cfb77jsn114a1a0296b5',
      'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options_convert_currency);
    const res_data = response.data;
    const amount = `${res_data['result']} ${selectedOptionToCountry['value']}`;
    res.json(amount);
    console.log(amount);
  } catch (error) {
    console.error(error);
  }
});

const port = 3001; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
