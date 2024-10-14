type BlockGapStyle =
  | string
  | {
      top?: string;
      left?: string;
    };

type PaddingStyle = { left?: string; right?: string; top?: string; bottom?: string };

type BorderRadiusStyle =
  | string
  | {
      topLeft?: string;
      topRight?: string;
      bottomLeft?: string;
      bottomRight?: string;
    };

export type WordpressStyle = {
  spacing?: {
    blockGap?: BlockGapStyle;
    padding?: PaddingStyle;
  };
  border?: {
    radius?: BorderRadiusStyle;
  };
};
