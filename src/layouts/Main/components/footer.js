import { Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import FooterImage from "@/assets/images/footer.png"

const Footer = () => {
  return (
    <div className="footer w-full text-white">
      <HStack className="w-full h-full bg-[#093545]">
        <Image src={FooterImage} className="w-full h-full" alt="footerImage" />
      </HStack>
    </div>
  );
};

export default Footer;
