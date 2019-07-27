import classnames from "classnames";
import { InnerBlocks } from "@wordpress/block-editor";
import DetailsDropdown from "./DetailsDropdown";

function Save(props = {}) {
  return (
    <DetailsDropdown {...props}>
      <InnerBlocks.Content />
    </DetailsDropdown>
  );
}

export default Save;
