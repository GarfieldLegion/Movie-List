import React, { useEffect, useState, useRef } from "react";
import MainFrame from "@/layouts/Main";
import { useStoreState, useStoreActions } from "easy-peasy";
import logOut from "@/assets/images/logOut.svg";
import addIcon from "@/assets/images/addIcon.svg";
import { VStack, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import MovieCard from "./components/movieCard";
import MovieImage from "@/assets/images/Rectangle.png";
import Pagination from "./components/pagination";

export default function Homepage() {
  const token = useStoreState((state) => state.token.token);
  const movies = [
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
    { Title: "Movie", Year: "2021", Image: MovieImage },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <MainFrame>
      <div className="w-full main-content flex justify-center items-center bg-[var(--background-color)] p-[120px] overflow-hidden">
        <VStack gap={0} className="w-full h-full overflow-auto" align="center">
          <HStack gap={0} className="w-full flex justify-between mt-[120px]">
            <HStack gap={0} className="flex items-center">
              <h2 className="text-white font-semibold">My movies</h2>
              <Image
                className="ml-[12px] w-[32px] h-[32px]"
                src={addIcon}
                alt="addIcon"
              />
            </HStack>
            <HStack gap={0} className="w-auto flex items-center">
              <Text className="text-white font-regular Body-Regular">
                Logout
              </Text>
              <Image
                className="ml-[12px] w-[32px] h-[32px]"
                src={logOut}
                alt="addIcon"
              />
            </HStack>
          </HStack>
          <SimpleGrid
            columns={4}
            spacing="24px"
            className="w-full mt-[64px] h-[520px] overflow-y-auto"
          >
            {movies.map((item, index) => {
              return (
                <MovieCard
                  Title="Movie 1"
                  Year="2021"
                  imageSrc={MovieImage}
                  key={index}
                ></MovieCard>
              );
            })}
          </SimpleGrid>
          <Pagination
            items={100} // 100
            currentPage={currentPage} // 1
            pageSize={8}
            onPageChange={onPageChange}
          />
        </VStack>
      </div>
    </MainFrame>
  );
}
