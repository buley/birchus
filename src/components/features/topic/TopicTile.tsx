import { Box } from '@chakra-ui/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { PageTopicFieldsFragment } from '@src/lib/__generated/sdk';

export const TopicTile = ({
  featuredTopicImage,
  slug,
  sys: { id: entryId },
}: PageTopicFieldsFragment) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });
  return slug ? (
    <div {...inspectorProps({ fieldId: 'featuredProductImage' })}>
      <Box as={Link} href={slug}>
        {featuredTopicImage && (
          <Box borderRadius={4} overflow="hidden">
            <CtfImage {...featuredTopicImage} />
          </Box>
        )}
      </Box>
    </div>
  ) : null;
};
