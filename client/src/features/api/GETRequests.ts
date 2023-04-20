import axios from 'axios';

const baseUrl = 'https://back.blackbay-e5c0fb3a.francecentral.azurecontainerapps.io/';

// GET ENDPOINTS -- Beer
export const getAllBeers = async () => {
  await axios
    .get(`${baseUrl}beers`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getABeerById = async (id: number) => {
  await axios
    .get(`${baseUrl}beers/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ENDPOINTS -- Brewery
export const getAllBreweries = async () => {
  await axios
    .get(`${baseUrl}breweries`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getABreweryById = async (id: number) => {
  await axios
    .get(`${baseUrl}breweries/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ENDPOINTS -- Order
export const getAllOrders = async () => {
  await axios
    .get(`${baseUrl}orders`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAnOrderById = async (id: number) => {
  await axios
    .get(`${baseUrl}orders/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
