import { InnerBlocks } from "@wordpress/editor";

const Save = (props = {}) => {
  const {
    attributes: { image }
  } = props;
  return (
    <div className="icon-grid-item">
      <figure className="icon-grid-item__icon">
        <img src={image.src} alt={image.alt} />
      </figure>
      <div className="icon-grid-item__content">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};

export default Save;
