import React, { useEffect, useState, useRef } from "react";
import MainFrame from "@/layouts/Main";
import { useStoreState, useStoreActions } from "easy-peasy";
import CloseEye from "@/assets/images/closeEye.svg";
import OpenEye from "@/assets/images/openEye.svg";
import {
  VStack,
  Text,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Homepage() {
  const token = useStoreState((state) => state.token.token);
  const setRememberVal = useStoreActions((actions) => actions.isRemember.setRememberStatus);
  const rememberStatus = useStoreState((state) => state.isRemember.isRemember);
  const router = useRouter();
  const mailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
  const [email, setEmail] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [remember, setRemember] = useState(false)
  const handleEmail = (e) => {
    if (!mailExp.test(e.target.value) || e.target.value.length === 0) {
      setEmailValid(true);
    } else if (mailExp.test(e.target.value) && e.target.value.length > 0) {
      setEmail(e.target.value);
      setEmailValid(false);
      if(rememberStatus){
        setRememberVal({"isRemember": true, "Email": e.target.value, "Pwd": password})
      }
    }
  };
  const handlePwd = (e) => {
    setPassword(e.target.value);
    if(rememberStatus){
      setRememberVal({"isRemember": true, "Email": email, "Pwd": e.target.value})
    }
  };
  const handleLogin = () => {
    if (!mailExp.test(email) || email.length === 0) {
      setEmailValid(true);
    } else if (mailExp.test(email) && email.length > 0) {
      setEmailValid(false);
    }
  };

  const handleRemember = (e) => {
    let val = {}
    if (e.target.checked){
      setRemember(true)
      val.isRemember = true;
      val.Email = email;
      val.Pwd = password;
      setRememberVal(val)
    }else{
      setRemember(false)
      val.isRemember = false;
      val.Email = "";
      val.Pwd = "";
      setRememberVal(val)
    }
  }

  useEffect(()=>{
    setRemember(rememberStatus)
  }, [rememberStatus])

  return (
    <MainFrame>
      <div className="overflow-auto main-content w-full flex justify-center items-center bg-[var(--background-color)]">
        <VStack className="w-[300px] h-full justify-center" gap={0}>
          <h1 className="font-semibold text-white">Sign in</h1>
          <Input
            placeholder="Email"
            className="!text-white !bg-[var(--input-color)] !rounded-[10px] !h-[45px] mt-[48px] Body-Small font-regular !pl-[15px]"
            variant="unstyled"
            onChange={(e) => {
              handleEmail(e);
            }}
            onBlur={(e) => {
              handleEmail(e);
            }}
          />
          <Text
            className={`${
              emailValid ? "flex" : "hidden"
            } text-white Body-Small font-regular w-full `}
            align={"left"}
          >
            Please input the correct email.
          </Text>

          <InputGroup className={`${!emailValid ? "mt-[24px]" : "mt-0"} `}>
            <Input
              placeholder="Password"
              type={showPwd ? "text" : "password"}
              className="!text-white !bg-[var(--input-color)] !rounded-[10px] !h-[45px] Body-Small font-regular !pl-[15px] relative"
              variant="unstyled"
              onChange={(e)=>{handlePwd(e)}}
            />
            {showPwd && (
              <InputRightElement className="top-1/2 z-50">
                <div
                  onClick={() => {
                    setShowPwd(false);
                  }}
                >
                  <Image src={OpenEye} width={21} alt="openEye"></Image>
                </div>
              </InputRightElement>
            )}
            {!showPwd && (
              <InputRightElement className="z-50">
                <div
                  onClick={() => {
                    setShowPwd(true);
                  }}
                >
                  <Image src={CloseEye} width={18} alt="closeEye"></Image>
                </div>
              </InputRightElement>
            )}
          </InputGroup>

          <Checkbox size="lg" className="mt-[24px] Body-Small font-regular" isChecked={remember} onChange={(e)=>{handleRemember(e)}}>
            Remember me
          </Checkbox>
          <div
            className="w-full h-[54px] mt-[24px] bg-[var(--primary-color)] cursor-pointer !rounded-[10px] Body-Regular font-regular text-white flex justify-center items-center"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
            {token}
          </div>
        </VStack>
      </div>
    </MainFrame>
  );
}
