import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { namespace } from "../../config";
import Save from "./components/Save";
import Edit from "./components/Edit";

registerBlockType(`${namespace}/page-section`, {
  title: __("Page Section", "semantic-blocks"),
  description: __(
    "Add a semantic Section element to wrap several blocks in a parent container.",
    "semantic-blocks"
  ),
  category: namespace,
  icon: "editor-table",
  keywords: [
    __("page section", "semantic-blocks"),
    __("section", "semantic-blocks"),
    __("container", "semantic-blocks")
  ],
  attributes: {
    sectionWidth: {
      type: "string"
    },
    innerContainerHorizontalAlignment: {
      type: "object",
      default: {
        center: true,
        left: false,
        right: false
      }
    },
    innerContainerPaddingUnit: {
      type: "string",
      default: "em"
    },
    innerContainerPaddingTop: {
      type: "number"
    },
    innerContainerPaddingRight: {
      type: "number"
    },
    innerContainerPaddingBottom: {
      type: "number"
    },
    innerContainerPaddingLeft: {
      type: "number"
    },
    innerContainerMaxWidth: {
      type: "number",
      default: 1280
    },
    innerContainerAlignCenter: {
      type: "boolean",
      default: true
    },
    innerContainerAlignLeft: {
      type: "boolean",
      default: false
    },
    innerContainerAlignRight: {
      type: "boolean",
      default: false
    },
    sectionBackground: {
      type: "object",
      default: {
        color: null,
        id: null,
        image: null,
        position: "center center",
        repeat: "no-repeat",
        size: "cover"
      }
    },
    textColor: {
      type: "string"
    },
    withOverlay: {
      type: "boolean",
      default: false
    },
    overlayBackgroundColor: {
      type: "string"
    }
  },
  getEditWrapperProps({ sectionWidth }) {
    if (["left", "right", "full", "wide"].includes(sectionWidth)) {
      return { "data-align": sectionWidth };
    }
  },
  edit: props => <Edit {...props} />,
  save: props => <Save {...props} />
});
