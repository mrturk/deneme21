import { createSvgIcon, SvgIcon } from '@mui/material';

export const LeaveEventIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="60"
      fill="none"
      viewBox="0 0 61 60"
    >
      <g filter="url(#filter0_b_18925_440197)">
        <circle
          cx="30.577"
          cy="30"
          r="30"
          fill="#fff"
          fillOpacity="0.1"
        ></circle>
      </g>
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_18925_440197)"
      >
        <path d="M18.827 30h14.75M29.827 33.75l3.75-3.75-3.75-3.75M20.382 34.596a10.5 10.5 0 10.179-9.542"></path>
      </g>
      <defs>
        <filter
          id="filter0_b_18925_440197"
          width="80"
          height="80"
          x="-9.423"
          y="-10"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="5"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_18925_440197"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_18925_440197"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_18925_440197">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(17.577 18)"
          ></path>
        </clipPath>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 61 60" component={svg} />;
};
