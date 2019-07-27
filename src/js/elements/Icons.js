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
        <SVG width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <Path d="M9.1 4L4 20h1.976l1.53-5.02h5.29L14.39 20h2.04L11.012 4H9.1zm-1.212 9.305l1.467-4.619c.255-1.004.51-1.941.765-2.878h.063c.192.937.446 1.874.765 2.945l1.466 4.62H7.888v-.068zm10.008-9.238h-.892L14.964 10h.829l.637-1.854h2.104L19.17 10H20l-2.104-5.933zm-1.338 3.682l.573-1.875c.128-.401.192-.803.32-1.138.063.402.19.737.318 1.138l.574 1.875h-1.785z" />
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
    case "dropdown":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <Path d="M0 0h24v24H0z" fill="none" />
          <Path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" />
        </SVG>
      );
    default:
      return;
  }
};

export default Icons;
