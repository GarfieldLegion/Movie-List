import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import { TELEGRAM_LINK, TWITTER_LINK, LITEPAPER_LINK } from "@/common/constants";

const Header = ({ showAnnounceBar, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full header text-[#EFEFEFE5]">
      
    </div>
  );
};

export default Header;
