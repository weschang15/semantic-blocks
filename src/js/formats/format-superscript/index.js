import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/editor";
import { namespace } from "../../config";
import { Icons } from "../../elements";

registerFormatType(`${namespace}/superscript`, {
  title: "Superscript",
  tagName: "sup",
  className: null,
  edit: ({ onChange, value }) => (
    <RichTextToolbarButton
      icon={<Icons name="superscript" />}
      title="Superscript"
      onClick={() =>
        onChange(toggleFormat(value, { type: `${namespace}/superscript` }))
      }
    />
  )
});
