import * as React from "react";

function SvgCard(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 24 17.142" {...props}>
      <path
        d="M22.5 17.142h-21A1.56 1.56 0 010 15.534V1.607A1.558 1.558 0 011.5 0h21A1.558 1.558 0 0124 1.607v13.927a1.56 1.56 0 01-1.5 1.608zM1 7.5v8.034a.518.518 0 00.5.536h21a.52.52 0 00.5-.536V7.5zm0-3.215v2.143h22V4.285zm.5-3.215a.518.518 0 00-.5.536v1.608h22V1.606a.519.519 0 00-.5-.536z"
        fill="#595959"
      />
      <path
        d="M16.384 11.193h5.091a.621.621 0 000-1.222h-5.091a.62.62 0 000 1.22"
        fill="#00baa4"
      />
    </svg>
  );
}

export default SvgCard;

