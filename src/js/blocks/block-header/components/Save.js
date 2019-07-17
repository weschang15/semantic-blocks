import { InnerBlocks } from "@wordpress/editor";
import Header from "./Header";

const Save = (props = {}) => {
  return (
    <Header {...props}>
      <InnerBlocks.Content />
    </Header>
  );
};

export default Save;
