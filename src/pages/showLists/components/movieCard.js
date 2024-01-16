import React, { useEffect, useState } from "react";
import { VStack, Text } from "@chakra-ui/layout";
import Image from "next/image";

const MovieCard = ({Title, Year, imageSrc }) => {
  return (
    <VStack gap={0} className="max-w-full min-w-[228px] h-[504px] rounded-[12px] px-[8px] pt-[8px] pb-[16px] bg-[#092C39]">
      <Image className="w-full h-[400px] rounded-[12px]" src={imageSrc} alt="MyVideos" />
      <Text className="Body-Large text-white font-regular mt-[12px] w-full" align="left">{Title}</Text>
      <Text className="Body-Small text-white font-regular mt-[12px] w-full" align="left">{Year}</Text>
    </VStack>
  );
};

export default MovieCard;