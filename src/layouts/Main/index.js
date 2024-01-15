import Footer from "./components/footer";
import Header from "./components/header";

const Main = ({ children }) => {
  return (
    <div
      className={`relative mx-auto w-full bg-[#EFEFEFE5]`}
    >      
      {children}
      <Footer />
    </div>
  );
};

export default Main;
