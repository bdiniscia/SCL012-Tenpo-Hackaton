import * as React from "react";

function SvgBack(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 23" fill="#333" {...props}>
      <g clipPath="url(#back_svg__clip0)">
        <path
          d="M.16 11.072L9.91.177A.514.514 0 0110.291 0c.144 0 .281.063.383.177a.643.643 0 01.159.428c0 .16-.057.314-.159.428L1.85 10.895h20.36c.143 0 .28.064.382.177a.643.643 0 01.159.428c0 .16-.057.315-.159.428a.514.514 0 01-.383.177H1.85l8.825 9.861a.643.643 0 01.159.428c0 .16-.057.315-.159.428a.493.493 0 01-.59.132.541.541 0 01-.176-.132L.16 11.927a.615.615 0 01-.117-.197.671.671 0 010-.462.6.6 0 01.117-.197z"
          fill="#595959"
        />
      </g>
      <defs>
        <clipPath id="back_svg__clip0">
          <path fill="#fff" d="M0 0h26v23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBack;

