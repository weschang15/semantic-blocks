import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/editor";
import { namespace } from "../../config";
import { Icons } from "../../elements";

registerFormatType(`${namespace}/highlight`, {
  title: "Highlight",
  tagName: "mark",
  className: null,
  edit: ({ onChange, value }) => (
    <RichTextToolbarButton
      icon={<Icons name="highlight" />}
      title="Highlight"
      onClick={() =>
        onChange(toggleFormat(value, { type: `${namespace}/highlight` }))
      }
    />
  )
});
