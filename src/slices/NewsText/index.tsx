import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsText`.
 */
export type NewsTextProps = SliceComponentProps<Content.NewsTextSlice>;

/**
 * Component for "NewsText" Slices.
 */
const NewsText = ({ slice }: NewsTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for news_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default NewsText;
