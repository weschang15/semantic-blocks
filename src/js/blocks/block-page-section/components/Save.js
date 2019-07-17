import { InnerBlocks } from "@wordpress/editor";
import Section from "./Section";

const Save = (props = {}) => {
  return (
    <Section {...props}>
      <InnerBlocks.Content />
    </Section>
  );
};

export default Save;
