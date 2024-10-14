import { ColumnFragment } from '@/components/Blocks/Column';
import { ColumnsFragment } from '@/components/Blocks/Columns';
import { HeadingFragment } from '@/components/Blocks/Heading';
import { ImageFragment } from '@/components/Blocks/Image';
import { ParagraphFragment } from '@/components/Blocks/Paragraph';

export type ContentBlocks = ParagraphFragment | HeadingFragment | ColumnsFragment | ImageFragment | ColumnFragment;
