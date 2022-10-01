import { createSvgIcon, SvgIcon } from '@mui/material';

export const OpenCamIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="52"
      fill="none"
      viewBox="0 0 53 52"
    >
      <g filter="url(#filter0_b_15355_262835)">
        <circle cx="26.5" cy="26" r="26" fill="#fff" fillOpacity="0.1"></circle>
      </g>
      <g fill="#fff" clipPath="url(#clip0_15355_262835)">
        <path d="M17.165 20.432a.25.25 0 00-.279-.05A1.5 1.5 0 0016 21.75v9a1.5 1.5 0 001.5 1.5h10.879a.251.251 0 00.246-.299.25.25 0 00-.069-.128l-11.391-11.39zM35.737 21.451l-3 1.711a1.447 1.447 0 00-.737 1.25v3.676a1.45 1.45 0 00.737 1.25l3 1.711A1.5 1.5 0 0038 29.8v-7.1a1.5 1.5 0 00-2.263-1.249z"></path>
        <path d="M31.073 29.659a.247.247 0 01-.073-.177V21.75a1.5 1.5 0 00-1.5-1.5h-7.732a.25.25 0 01-.177-.073l-5.884-5.884a1 1 0 00-1.414 1.414l22 22a1 1 0 001.414-1.414l-6.634-6.634z"></path>
      </g>
      <defs>
        <filter
          id="filter0_b_15355_262835"
          width="69.333"
          height="69.333"
          x="-8.167"
          y="-8.667"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="4.333"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_15355_262835"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_15355_262835"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_15355_262835">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(14 14)"
          ></path>
        </clipPath>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 53 52" component={svg} />;
};
