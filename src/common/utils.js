import BigNumber from "bignumber.js";
import { checkToken } from "@/api/index";

export function storeToClipBoard(info) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(info);
  } else {
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement("textarea");
    textArea.value = info;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";

    document.body.prepend(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  }
}

export const checkTokenValidate = async (token) => {
  try {
    let res = await checkToken(token);
    if (res.data?.data) {
      var data = {
        message:"valid token",
        user: res.data.data
      }
      return data;
    } else {
      return "invalid token";
    }
  } catch (err) {
    if (err.response?.data.message.message === "jwt expired") {
      return "invalid token";
    } else {
      return "network problem";
    }
  }
};

export function numberWithCommas(value) {
  let parts = value.toString().split(".");
  let num =
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    (parts[1] ? "." + parts[1] : "");
  return num;
}

export function getShortName(full_name = "") {
  return `${full_name.slice(-4)}`.toUpperCase();
}

export function changeRate(param) {
  if (param >= 0.1) {
    return param.toString();
  }
  let val = new BigNumber(param).times(100).toFixed(3);
  return val.toString();
}
