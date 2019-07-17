import { InnerBlocks } from "@wordpress/editor";
import IconGrid from "./IconGrid";

const Save = (props = {}) => {
  return (
    <IconGrid {...props}>
      <InnerBlocks.Content />
    </IconGrid>
  );
};

export default Save;
