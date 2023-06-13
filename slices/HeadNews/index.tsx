import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadNews`.
 */
export type HeadNewsProps = SliceComponentProps<Content.HeadNewsSlice>;

/**
 * Component for "HeadNews" Slices.
 */
const HeadNews = ({ slice }: HeadNewsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for head_news (variation: {slice.variation}) Slices
    </section>
  );
};

export default HeadNews;
