import Head from "next/head";
import { useEffect } from "react";

const Layout = ({ children }) => {  
  
  useEffect(() => {
    const script = document.createElement("script");    
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Ascend</title>
        <meta name="title" content="Ascend" />
        {/* <meta name="description" content="Escrow is a secure and neutral intermediary platform that holds and disburses funds on behalf of two parties involved in a transaction or service agreement, ensuring a trustworthy and transparent process." /> */}
        <meta name="keywords" content="Ascend" />
        <meta
          property="og:image"
          content="https://ascend-new.vercel.app/AscendLogo.png"
        />
        <meta property="og:site_name" content="Ascend" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:url"
          content="https://helloescrow.com/"
        /> */}
        <meta property="og:title" content="Ascend" />
        {/* <meta
          property="og:description"
          content="Escrow is a secure and neutral intermediary platform that holds and disburses funds on behalf of two parties involved in a transaction or service agreement, ensuring a trustworthy and transparent process."
        /> */}

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta
          property="twitter:url"
          content="https://helloescrow.com/"
        /> */}
        <meta property="twitter:title" content="Ascend" />
        {/* <meta
          property="twitter:description"
          content="Escrow is a secure and neutral intermediary platform that holds and disburses funds on behalf of two parties involved in a transaction or service agreement, ensuring a trustworthy and transparent process."
        /> */}
        <meta
          property="twitter:card"
          content="https://ascend-new.vercel.app/AscendLogo.png"
        />
        <meta property="twitter:site_name" content="Ascend" />        
      </Head>
      {children}
    </>
  );
};
export default Layout;
