import * as React from "react";

function SvgWithdrawal(props) {
  return (
    <svg width="2.5em" height="2.5em" viewBox="0 0 35.429 40.828" {...props}>
      <defs>
        <style>
          {
            ".withdrawal_svg__c,.withdrawal_svg__d{stroke-linecap:round;stroke-linejoin:round;fill:none}.withdrawal_svg__c{stroke:#595959;fill-rule:evenodd}.withdrawal_svg__d{stroke:#00baa4;stroke-miterlimit:10}"
          }
        </style>
      </defs>
      <path
        d="M2.8 10.829H1.648A1.152 1.152 0 01.5 9.681V1.648A1.152 1.152 0 011.648.5h32.133a1.151 1.151 0 011.148 1.148v8.033a1.151 1.151 0 01-1.148 1.148h-1.147"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#595959"
        fillRule="evenodd"
        fill="#fff"
      />
      <path
        d="M7.207 6.332v34h20.836v-34z"
        fill="#d4f9f5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#595959"
        fillRule="evenodd"
      />
      <path
        className="withdrawal_svg__c"
        d="M9.424 31.236v2.838h2.449v2.9h10.823v-2.869l2.8-.026v-2.843M25.491 12.873v-2.838h-2.449v-2.9M12.219 7.135v2.869l-2.8.031v2.838"
      />
      <path
        className="withdrawal_svg__d"
        d="M19.628 23.936a2.311 2.311 0 10-2.311-2.311 2.311 2.311 0 11-2.307-2.311M23.562 21.625h-1.623M12.699 21.625h-1.623"
      />
    </svg>
  );
}

export default SvgWithdrawal;

