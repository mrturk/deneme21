import { createSvgIcon, SvgIcon } from '@mui/material';

export const CloseCamIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="60"
      fill="none"
      viewBox="0 0 61 60"
    >
      <g filter="url(#filter0_b_15355_263462)">
        <circle cx="30.653" cy="30" r="30" fill="#fff"></circle>
      </g>
      <path
        fill="#00020F"
        d="M32.973 23.298H19.569c-.57 0-1.03.461-1.03 1.03V35.67c0 .57.46 1.031 1.03 1.031h13.404c.569 0 1.03-.461 1.03-1.03V24.328c0-.57-.461-1.031-1.03-1.031zM42.521 23.889a.516.516 0 00-.502-.023l-6.186 3.093a.516.516 0 00-.285.462v5.155a.516.516 0 00.285.461l6.186 3.093a.515.515 0 00.747-.46V24.327a.517.517 0 00-.245-.44z"
      ></path>
      <defs>
        <filter
          id="filter0_b_15355_263462"
          width="80"
          height="80"
          x="-9.347"
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
            result="effect1_backgroundBlur_15355_263462"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_15355_263462"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 61 60" component={svg} />;
};
