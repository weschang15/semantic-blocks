import classnames from "classnames";
import { Icon, Tooltip, Placeholder } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/editor";

const Image = props => <img {...props} />;

const getImage = (open, { image } = {}) => {
  if (image.id) {
    return (
      <Tooltip text="Click to change image">
        <Icon
          icon={() => <Image onClick={open} src={image.src} alt={image.alt} />}
        />
      </Tooltip>
    );
  }

  return (
    <Tooltip text="Click to change image">
      <Placeholder icon="format-image" label="Select an icon" onClick={open} />
    </Tooltip>
  );
};

const IconGridItem = (props = {}) => {
  const { attributes, className, setAttributes } = props;
  return (
    <div className={classnames(className, "icon-grid-item")}>
      <figure className="icon-grid-item__icon">
        <MediaUploadCheck>
          <MediaUpload
            onSelect={media => {
              const image = {
                alt: media.alt,
                id: media.id,
                src: media.url
              };

              setAttributes({
                image
              });
            }}
            type="image"
            value={attributes.image.id}
            render={({ open }) => getImage(open, attributes)}
          />
        </MediaUploadCheck>
      </figure>
      <div className="icon-grid-item__content">{props.children}</div>
    </div>
  );
};

export default IconGridItem;
