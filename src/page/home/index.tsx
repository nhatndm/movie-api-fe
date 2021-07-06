import React, { useEffect, useState } from 'react';
import { Flex, Box, Stack, Button, Text, ButtonProps, Image, Grid, Badge } from '@chakra-ui/react';

import { Paginator, Container, PageGroup } from 'chakra-paginator';

// ACTION
import { getMovieData } from 'redux/movie/action';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

// SELECTOR
import { selectMovieData } from 'redux/movie/selector';

// MODEL
import { GetMoviewType } from 'model';

// IMAGE
import defaulImage from 'assets/images/img1.jpg';

const sortBy = [
  {
    id: 1,
    label: 'Release Date',
    value: GetMoviewType.LATEST
  },
  {
    id: 2,
    label: 'Popularity',
    value: GetMoviewType.POPULAR
  }
];

const baseStyles: ButtonProps = {
  w: 45,
  fontSize: 'sm'
};

const normalStyles: ButtonProps = {
  ...baseStyles
};

const activeStyles: ButtonProps = {
  ...baseStyles,
  bg: 'green.300',
  color: 'whiteAlpha.900'
};

const separatorStyles: ButtonProps = {
  w: 45
};

function Home() {
  const dispatch = useAppDispatch();
  const movieData = useAppSelector(selectMovieData);
  const [currentSortBy, setCurrentSortBy] = useState(sortBy[0]);

  useEffect(() => {
    dispatch(getMovieData({ page: 1, data: currentSortBy.value }));
  }, [currentSortBy.value]);

  return (
    <>
      <Flex justifyContent="space-between" paddingBottom={100}>
        <Text fontWeight="bold" fontSize="3xl">
          Movie List
        </Text>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Stack direction={['column', 'row']} spacing="10px">
            {sortBy.map((v, i) => (
              <Button
                onClick={() => setCurrentSortBy(v)}
                key={i}
                variant={v.value === currentSortBy.value ? 'outline' : 'solid'}
              >
                {v.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Flex>
      <Grid marginBottom={50} templateColumns="repeat(5, 1fr)" gap={3}>
        {movieData.results.map(({ id, title, release_date, popularity }) => (
          <Box key={id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={defaulImage} alt={title} />

            <Box p="6">
              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {title}
              </Box>

              <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                Release Date: {release_date}
              </Box>
              <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                Popularity: {popularity}
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      <Paginator
        activeStyles={activeStyles}
        innerLimit={2}
        currentPage={movieData.page}
        outerLimit={2}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={movieData.total_pages}
        onPageChange={(v) => dispatch(getMovieData({ page: Number(v), data: currentSortBy.value }))}
      >
        <Container justifyContent="center" w="full" p={4}>
          <PageGroup isInline />
        </Container>
      </Paginator>
    </>
  );
}

export default Home;
