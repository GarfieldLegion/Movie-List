import axios from "axios";

// --------------User Auth apis--------------


export async function userRegister(
  username,
  password,
  address,
  uuid,
  verifycode,
  registertype,
  recommend
) {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/register",
      {
        username: username,
        password: password,
        adress: address,
        uuid: uuid,
        captcha: verifycode,
        registertype: registertype,
        recommend:recommend
      }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function login(username, password) {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
      { username: username, password: password }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function checkToken(token) {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/checkToken",
      { token: token }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getCaptchaCode() {
  try {
    let result = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/captcha/get_capthca"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getEmailCaptcha(email) {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/captcha/get_emailCaptcha",
      { email: email }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getUserInfo(username){
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/user/get_userInfo",
      { username: username }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

// --------------User Auth apis--------------

// --------------Show Market Price apis--------------

export async function getForexPrices() {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/price/forexPrice"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getCryptoPrices() {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/price/cryptoPrice"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getStockPrices() {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/price/stockPrice"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getIndexPrices() {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/price/indexPrice"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

// --------------Show Market Price apis--------------

// --------------loAn apis--------------


export async function getBorrowConfig() {
  try {
    let result = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/price/get_borrowinfo"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function getRecentPrice() {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/price/getAiMarketPrice"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function uploadImage(value, token) {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/user/uploadFile", value, {
        headers: {
          'token': token
        }
      }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function updateVerifyInfo(value, token) {
  try {
    let result = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/user/uploadVerifyInfo", value);
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}

// --------------Arbitrage apis--------------

export async function getArbitrageProduct() {
  try {
    let result = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/arbitrage/getArbitrage"
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
}