import * as React from "react";

function SvgHelp(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 20.88 20.642" {...props}>
      <defs>
        <style>
          {
            ".help_svg__a{fill:none;stroke:#595959;stroke-linecap:round}.help_svg__b{fill:#00baa4}"
          }
        </style>
      </defs>
      <g transform="translate(-499.87 -279)">
        <path
          className="help_svg__a"
          d="M500.376 299.092s-.273-3.812 6.317-5.522"
        />
        <path
          className="help_svg__b"
          d="M503.499 286.58h1.5v5h-1.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5zM517 286.58h.5a2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5h-.5v-5z"
        />
        <ellipse
          className="help_svg__b"
          cx={1.5}
          cy={1}
          rx={1.5}
          ry={1}
          transform="translate(509.999 293.58)"
        />
        <path
          d="M517.578 291h-.429v-4.283h.429a2.144 2.144 0 110 4.287zm-5.145 4.287h-1.715a.429.429 0 110-.857h1.715a.429.429 0 110 .857zM504.287 291h-.43a2.144 2.144 0 010-4.283h.43zm13.291-5.14h-.429v-1.286c0-3.139-3.456-5.574-6.431-5.574s-6.431 2.435-6.431 5.574v1.286h-.43a3 3 0 100 6h1.288v-7.286c0-2.656 3-4.716 5.574-4.716s5.574 2.06 5.574 4.716v6.86a3.118 3.118 0 01-2.664 2.966 1.287 1.287 0 00-1.2-.821h-1.711a1.286 1.286 0 000 2.572h1.715a1.284 1.284 0 001.219-.9 3.964 3.964 0 003.45-3.391h.475a3 3 0 100-6z"
          fill="#595959"
          fillRule="evenodd"
        />
        <path
          className="help_svg__a"
          d="M520.198 299.092a5.55 5.55 0 00-2.369-3.784"
        />
      </g>
    </svg>
  );
}

export default SvgHelp;

