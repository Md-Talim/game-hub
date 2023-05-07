import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platformId, genreId } = gameQuery;
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres.results.find((gen) => gen.id === genreId);
  const platform = platforms.results.find(
    (platform) => platform.id === platformId
  );
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize={{ base: '3xl', md: '5xl' }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
