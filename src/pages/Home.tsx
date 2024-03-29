import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import {
  GameGrid,
  GameHeading,
  GenreList,
  PlatformSelector,
  SortSelector,
} from '../components';

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={8}
          maxHeight="calc(100vh - 80px)"
          overflowY="scroll"
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem maxHeight="calc(100vh - 80px)" overflowY="scroll" area="main">
        <Box paddingX={5}>
          <GameHeading />
          <Flex marginBottom={5} gap={5}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;
