import BlocksRenderer from '@/components/Globals/BlocksRenderer/BlocksRenderer';
import { TabFragment } from './Tab.graphql';

type TabProps = {
  data: TabFragment;
};

export default function Tab({ data }: TabProps) {
  const { innerBlocks } = data;

  return <BlocksRenderer blocks={innerBlocks} />;
}
