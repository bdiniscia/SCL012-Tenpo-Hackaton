import * as React from "react";

function SvgMoney(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 24.486 16.598" {...props}>
      <defs>
        <style>
          {
            ".money_svg__d{stroke:#595959;stroke-linecap:round;stroke-linejoin:round;fill:none;stroke-miterlimit:10}"
          }
        </style>
      </defs>
      <path
        d="M.499 2.063v14.035h21.733a1.907 1.907 0 001.733-2.043V2.063z"
        fillRule="evenodd"
        stroke="#595959"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M20.435.718V2.421c0 1.4-.007 2.812-.009 4.13v5.858c1.59-.324 2.787-.058 3.561.806V1.536a3.137 3.137 0 00-3.552-.818z"
        fill="#00baa4"
        fillRule="evenodd"
        stroke="#595959"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.641 4.685H5.015v1.431H3.359v6.324H5l.015 1.633h1.626"
        fill="none"
        fillRule="evenodd"
        stroke="#595959"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="money_svg__d"
        d="M11.065 10.875a1.591 1.591 0 101.591-1.591 1.591 1.591 0 111.591-1.589M12.656 13.583v-1.117M12.656 6.105V4.988"
      />
    </svg>
  );
}

export default SvgMoney;

