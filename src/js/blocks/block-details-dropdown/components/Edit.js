import { InnerBlocks } from "@wordpress/block-editor";
import DetailsDropdown from "./DetailsDropdown";
import Inspector from "./Inspector";

function Edit(props = {}) {
  return [
    <Inspector {...props} />,
    <DetailsDropdown {...props}>
      <InnerBlocks allowedBlocks={["core/paragraph", "core/list"]} />
    </DetailsDropdown>
  ];
}

export default Edit;
