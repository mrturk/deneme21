import { createSvgIcon, SvgIcon } from '@mui/material';

export const NewGroupIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="29"
      fill="none"
      viewBox="0 0 32 29"
    >
      <path
        stroke="url(#paint0_linear_17380_412172)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.786 14.059a4.832 4.832 0 100-9.664 4.832 4.832 0 000 9.664z"
      ></path>
      <path
        stroke="url(#paint1_linear_17380_412172)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M.878 23.72a7.907 7.907 0 0115.815 0"
      ></path>
      <path
        stroke="url(#paint2_linear_17380_412172)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.057 23.72a7.907 7.907 0 017.907-7.907"
      ></path>
      <path
        stroke="url(#paint3_linear_17380_412172)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23.429 21.086h7.028"
      ></path>
      <path
        stroke="url(#paint4_linear_17380_412172)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M26.943 17.57V24.6"
      ></path>
      <path
        stroke="url(#paint5_linear_17380_412172)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.086 14.056a3.514 3.514 0 100-7.029 3.514 3.514 0 000 7.029z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_17380_412172"
          x1="8.786"
          x2="8.2"
          y1="4.395"
          y2="26.359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#37A1FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_17380_412172"
          x1="8.786"
          x2="8.786"
          y1="7.027"
          y2="23.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#37A1FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_17380_412172"
          x1="18.743"
          x2="18.011"
          y1="12.298"
          y2="23.72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#37A1FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_17380_412172"
          x1="26.943"
          x2="26.943"
          y1="20.086"
          y2="22.086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#37A1FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_17380_412172"
          x1="27.443"
          x2="27.443"
          y1="17.57"
          y2="26.942"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="0.287" stopColor="#9F4492"></stop>
          <stop offset="1" stopColor="#37A1FF"></stop>
          <stop offset="1" stopColor="#00020F" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#D4145A"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_17380_412172"
          x1="21.086"
          x2="20.66"
          y1="7.027"
          y2="23.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4145A"></stop>
          <stop offset="1" stopColor="#37A1FF"></stop>
        </linearGradient>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 32 29" component={svg} />;
};
