import React, { useEffect, useState } from 'react'
import './details.css'
import Select from 'react-select';
import axios from 'axios';

export default function Details() {
  const [bothCountryMatch, setBothCountryMatch] = useState(false);
  const [selectedOptionFromCountry, setSelectedOptionFromCountry] = useState(false);
  const [selectedOptionToCountry, setSelectedOptionToCountry] = useState(false);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [objectArr, setObjectArr] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const checkFormValidity = () => {
    return selectedOptionFromCountry && selectedOptionToCountry && amount !== 0;
  };

  const getCurrencyDetails = async () => {
    await axios.get('http://localhost:3001/get-currencies')
      .then((response) => {
        setObjectArr(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Fetch the objectArr data from the server
    getCurrencyDetails();
  }, []);

  const handleSwap = () => {
    setSelectedOptionFromCountry(selectedOptionToCountry);
    setSelectedOptionToCountry(selectedOptionFromCountry);
  }

  const handleSelectChangeFromCountry = (selectedOptionFromCountry) => {
    setSelectedOptionFromCountry(selectedOptionFromCountry);
    setIsFormValid(checkFormValidity());
  };

  const handleSelectChangeToCountry = (selectedOptionToCountry) => {
    setSelectedOptionToCountry(selectedOptionToCountry);
    setIsFormValid(checkFormValidity());
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setIsFormValid(checkFormValidity());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      selectedOptionFromCountry: selectedOptionFromCountry,
      selectedOptionToCountry: selectedOptionToCountry,
      amount: amount
    };

    setIsBtnLoading(true);
    await axios.get("http://localhost:3001/convert-currency", { params: requestData }).then((response) => {
      setIsBtnLoading(false);
      setConvertedAmount(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <div className="details-box ring-2 ring-inset ring-gray-300 bg-gray-200">
        <div className="currency-converter-title">
          <p>Currency Converter</p>
        </div>
        <div className="currency-form">
          <form onSubmit={handleSubmit} method="GET">
            <label className="text-gray-700 uppercase">Select Country-1:</label>
            <Select className="basic-single mt-1 focus:outline-none" classNamePrefix="select" isClearable={isClearable} isSearchable={isSearchable} name="country" isLoading={isLoading} options={objectArr} onChange={handleSelectChangeFromCountry} value={selectedOptionFromCountry} placeholder="Select a Country" />
            {/* {countryFrom && <p>You select: {countryFrom}</p>} */}
            <div className="flex justify-center mt-3 rounded-full">
              <svg onClick={handleSwap} className="w-7 h-7 border border-slate-600 rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="swap"><path d="M14 2.256V30c-2.209 0-4-1.791-4-4V13H4.714c-.633 0-.949-.765-.502-1.212l9.607-9.607C13.886 2.114 14 2.162 14 2.256zM27.788 20.212l-9.6 9.6C18.118 29.882 18 29.832 18 29.734V2c2.209 0 4 1.791 4 4v13h5.286C27.918 19 28.235 19.765 27.788 20.212z"></path></svg>
            </div>
            <label className="text-gray-700 uppercase mt-3">Select Country-2:</label>
            <Select className="basic-single mt-1" classNamePrefix="select" isClearable={isClearable} isSearchable={isSearchable} name="country" isLoading={isLoading} options={objectArr} onChange={handleSelectChangeToCountry} value={selectedOptionToCountry} placeholder="Select a Country" />
            <label className="text-gray-700 uppercase mt-6">Enter the Amount:</label>
            <input className="appearance-none border border-gray-10 mt-1 h-10 rounded w-full py-2 px-3 leading-tight text-gray-500 focus:outline-none" id="username" type="number" placeholder="Amount" onChange={handleAmountChange}></input>
            <label className="text-gray-700 uppercase mt-6">Converted Amount:</label>
            <input className="appearance-none border h-12 font-bold text-xl border-gray-10 mt-1 rounded w-full py-2 px-3 leading-tight text-gray-500 focus:outline-none" type="text" placeholder="0.0" value={convertedAmount} readOnly></input>
            <button type="submit" className="w-full mt-7 bg-white hover:bg-gray-900 transition ease-in-out delay-150 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-[10px] shadow" disabled={!isFormValid || !amount}>
              {isBtnLoading ? <div className="loading"></div> : "Convert Currency"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
