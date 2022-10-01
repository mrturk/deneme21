import { createSvgIcon, SvgIcon } from '@mui/material';

export const NewMessageIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="25"
      fill="none"
      viewBox="0 0 31 25"
    >
      <path
        stroke="url(#paint0_linear_17380_412164)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 4.523A8.605 8.605 0 0014.913 2h-4.304A8.605 8.605 0 004.52 4.523 8.619 8.619 0 002 10.615c0 7 7.532 10.231 12.913 12.385v-3.77c2.283 0 3.228-.313 5.021-1.48"
      ></path>
      <path
        stroke="url(#paint1_linear_17380_412164)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 12.5h7.029"
      ></path>
      <path
        stroke="url(#paint2_linear_17380_412164)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M24.514 8.984v7.029"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_17380_412164"
          x1="11.5"
          x2="11.5"
          y1="2"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#78BEFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_17380_412164"
          x1="24.514"
          x2="24.514"
          y1="12.5"
          y2="13.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#78BEFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_17380_412164"
          x1="25.014"
          x2="25.014"
          y1="8.984"
          y2="16.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#78BEFF"></stop>
        </linearGradient>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 31 25" component={svg} />;
};
