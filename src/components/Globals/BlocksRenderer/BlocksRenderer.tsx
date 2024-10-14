import Columns from '@/components/Blocks/Columns';
import Heading from '@/components/Blocks/Heading';
import Paragraph from '@/components/Blocks/Paragraph';
import Image from '@/components/Blocks/Image';
import { ReactNode } from 'react';
import { getGlobalClassnames } from '@/utils/getGlobalClassnames';
import { SectionWidth } from '@/types/graphql.types';
import { ContentBlocks } from '@/types/blocks.types';
import classNames from 'classnames';

import styles from './BlocksRenderer.module.css';
import Buttons from '@/components/Blocks/Buttons';

type BlocksRendererProps = {
  blocks: (ContentBlocks | null)[];
  isRoot?: boolean;
};

export default function BlocksRenderer({ blocks, isRoot = false }: BlocksRendererProps) {
  return (
    <>
      {blocks.map((blockRef) => {
        if (!blockRef) return null;

        let block: ReactNode;
        let sectionWidth: SectionWidth | null = 'normal';
        switch (blockRef.name) {
          case 'core/paragraph':
            block = <Paragraph key={blockRef.clientId} data={blockRef} />;
            break;
          case 'core/heading':
            block = <Heading key={blockRef.clientId} data={blockRef} />;
            sectionWidth = blockRef.attributes.align;
            break;
          case 'core/columns':
            block = <Columns key={blockRef.clientId} data={blockRef} />;
            sectionWidth = blockRef.attributes.align;
            break;
          case 'core/image':
            // eslint-disable-next-line jsx-a11y/alt-text
            block = <Image key={blockRef.clientId} data={blockRef} />;
            break;
          case 'core/buttons':
            block = <Buttons key={blockRef.clientId} data={blockRef} />;
            sectionWidth = blockRef.attributes.align;
            break;
          default:
            block = null;
            break;
        }

        return isRoot ? (
          <section
            className={classNames(
              styles['root-section'],
              getGlobalClassnames({ sectionWidth: sectionWidth ?? 'normal' })
            )}
          >
            {block}
          </section>
        ) : (
          block
        );
      })}
    </>
  );
}
