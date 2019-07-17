import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { namespace } from "../../config";
import Save from "./components/Save";
import Edit from "./components/Edit";
import { Icons } from "../../elements";

registerBlockType(`${namespace}/header`, {
  title: __("Header", "semantic-blocks"),
  description: __(
    "Add a semantic Header element to represent introductory content.",
    "semantic-blocks"
  ),
  category: namespace,
  icon: <Icons name="header" />,
  keywords: [
    __("header", "semantic-blocks"),
    __("introduction", "semantic-blocks"),
    __("section header", "semantic-blocks")
  ],
  attributes: {
    alignment: {
      type: "string",
      default: "wide"
    },
    contentAlignment: {
      type: "object",
      default: {
        center: true,
        left: false,
        right: false
      }
    },
    maxWidth: {
      type: "number"
    },
    paddingUnit: {
      type: "string",
      default: "em"
    },
    paddingTop: {
      type: "number"
    },
    paddingRight: {
      type: "number",
      default: 1
    },
    paddingBottom: {
      type: "number"
    },
    paddingLeft: {
      type: "number",
      default: 1
    },
    textColor: {
      type: "string"
    }
  },
  getEditWrapperProps({ alignment }) {
    if (["left", "right", "full", "wide"].includes(alignment)) {
      return { "data-align": alignment };
    }
  },
  edit: props => <Edit {...props} />,
  save: props => <Save {...props} />
});
