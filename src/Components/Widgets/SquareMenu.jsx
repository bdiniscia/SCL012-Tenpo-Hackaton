import * as React from "react";

function SvgSquareMenu(props) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
      <defs>
        <style>
          {
            ".square-menu_svg__a,.square-menu_svg__c{fill:none}.square-menu_svg__a{stroke:#fff;stroke-width:1.2px}.square-menu_svg__b{stroke:none}"
          }
        </style>
      </defs>
      <g className="square-menu_svg__a">
        <rect className="square-menu_svg__b" width={11} height={11} rx={2} />
        <rect
          className="square-menu_svg__c"
          x={0.6}
          y={0.6}
          width={9.8}
          height={9.8}
          rx={1.4}
        />
      </g>
      <g className="square-menu_svg__a" transform="translate(13)">
        <rect className="square-menu_svg__b" width={11} height={11} rx={2} />
        <rect
          className="square-menu_svg__c"
          x={0.6}
          y={0.6}
          width={9.8}
          height={9.8}
          rx={1.4}
        />
      </g>
      <g className="square-menu_svg__a" transform="translate(13 13)">
        <rect className="square-menu_svg__b" width={11} height={11} rx={2} />
        <rect
          className="square-menu_svg__c"
          x={0.6}
          y={0.6}
          width={9.8}
          height={9.8}
          rx={1.4}
        />
      </g>
      <g className="square-menu_svg__a" transform="translate(0 13)">
        <rect className="square-menu_svg__b" width={11} height={11} rx={2} />
        <rect
          className="square-menu_svg__c"
          x={0.6}
          y={0.6}
          width={9.8}
          height={9.8}
          rx={1.4}
        />
      </g>
    </svg>
  );
}

export default SvgSquareMenu;

