import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { TopicTile } from '@src/components/features/topic/TopicTile';
import { PageTopicFieldsFragment } from '@src/lib/__generated/sdk';

interface TopicTileGridProps {
  title: string;
  topics: Array<PageTopicFieldsFragment | undefined | null>;
}

export const TopicTileGrid = ({ title, topics }: TopicTileGridProps) => {
  const filteredProducts = topics.filter((topic) => topic !== undefined && topic !== null);
  if (filteredProducts.length === 0) {
    return null;
  }
  return (
    <Container>
      {filteredProducts.length >= 1 && title && (
        <Heading as="h2" mb={3}>
          {title}
        </Heading>
      )}
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        rowGap={{ base: 6, lg: 6 }}
        columnGap={{ base: 4, lg: 24 }}>
        {topics.map((topic, index) => {
          return <GridItem key={index}>{topic ? <TopicTile {...topic} /> : null}</GridItem>;
        })}
      </Grid>
    </Container>
  );
};
