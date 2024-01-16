import React, { useEffect, useState } from "react";
import { HStack, Text } from "@chakra-ui/layout";
import Image from "next/image";
import PaginationItemType

const Pagination = ({ items, currentPage, pageSize, onPageChange }) => {
  console.log(currentPage)
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <HStack gap={0} className="w-full flex justify-center mt-[64px]">
      <div className="Body-Regular font-regular text-white">Prev</div>
      {pages.map((page, index) => (
        <div
          className={`Body-Regular font-regular text-white ml-[16px] w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer ${currentPage === page ? "bg-[var(--primary-color)]" : "bg-[#092C39]"}`}
          key={index}
          onClick={() => onPageChange(page)}
        >
          {page}
        </div>
      ))}
      <div className="Body-Regular font-regular text-white ml-[16px]">Next</div>
    </HStack>
  );
};

export default Pagination;
