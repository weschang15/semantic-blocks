import { G, Path, SVG } from "@wordpress/components";

const Icons = ({ name }) => {
  switch (name) {
    case "hero":
      return (
        <SVG
          enableBackground="new 0 0 12 12"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G fill="currentColor">
            <Path d="m11 0h-10c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-10c0-.6-.4-1-1-1zm0 11h-10v-10h10z" />
            <Path d="m2 2h8v3h-8z" />
          </G>
        </SVG>
      );
    case "superscript":
      return (
        <SVG
          enableBackground="new 0 0 25.1 23.9"
          viewBox="0 0 25.1 23.9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            clipRule="evenodd"
            d="m8 0-8 23.9h3.1l2.4-7.5h8.3l2.5 7.5h3.2l-8.5-23.9zm-1.9 13.9 2.3-6.9c.4-1.5.8-2.9 1.2-4.3h.1c.3 1.4.7 2.8 1.2 4.4l2.3 6.9h-7.1zm15.7-13.8h-1.4l-3.2 9.6h1.3l1-3h3.3l1 3h1.3zm-2.1 5.5.9-2.8c.2-.6.3-1.2.5-1.7.1.6.3 1.1.5 1.7l.9 2.8z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </SVG>
      );
    case "header":
      return (
        <SVG 
          enableBackground="new 0 0 19 18" 
          viewBox="0 0 19 18" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path 
            d="m.5 9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h17c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h14c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h17c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h8c.3 0 .5.2.5.5s-.2.5-.5.5zm0-12c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h18c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5zm.5-1h17v-4h-17z" 
            fill="currentColor"
          />
        </SVG>
      );
    case "highlight":
      return (
        <SVG 
          height="24" 
          viewBox="0 0 24 24" 
          width="24" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsLlink="http://www.w3.org/1999/xlink"
        >
          <clipPath id="a">
            <Path d="m0 0h24v24h-24z" />
          </clipPath>
          <Path 
            clipPath="url(#a)" 
            d="m6 14 3 3v5h6v-5l3-3v-5h-12zm5-12h2v3h-2zm-7.5 3.875 1.414-1.415 2.12 2.122-1.414 1.415zm13.46.71 2.123-2.12 1.414 1.414-2.122 2.121z"
          />
        </SVG>
      );
    default:
      return;
  }
};

export default Icons;
