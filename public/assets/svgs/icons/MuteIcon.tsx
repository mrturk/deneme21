import { createSvgIcon, SvgIcon } from '@mui/material';

export const MuteIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="60"
      fill="none"
      viewBox="0 0 61 60"
    >
      <g filter="url(#filter0_b_8139_66491)">
        <circle
          cx="30.269"
          cy="30"
          r="30"
          fill="#fff"
          fillOpacity="0.1"
        ></circle>
      </g>
      <g fill="#fff" clipPath="url(#clip0_8139_66491)">
        <path d="M34.516 33.094a5.197 5.197 0 01-3.67 1.523 5.197 5.197 0 01-5.19-5.192V21.35a5.192 5.192 0 1110.382 0v8.075a5.197 5.197 0 01-1.522 3.67z"></path>
        <path d="M38.105 25.727a1.153 1.153 0 011.969.816v2.884a9.245 9.245 0 01-7.831 9.123.289.289 0 00-.245.285v3.86a1.153 1.153 0 11-2.307 0v-3.86a.288.288 0 00-.244-.285 9.244 9.244 0 01-7.831-9.123v-2.884a1.153 1.153 0 112.307 0v2.884a6.922 6.922 0 0013.844 0v-2.884c0-.306.121-.6.338-.816z"></path>
      </g>
      <defs>
        <filter
          id="filter0_b_8139_66491"
          width="80"
          height="80"
          x="-9.731"
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
            result="effect1_backgroundBlur_8139_66491"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_8139_66491"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_8139_66491">
          <path
            fill="#fff"
            d="M0 0H27.692V27.692H0z"
            transform="translate(17 16.154)"
          ></path>
        </clipPath>
      </defs>
    </svg>,

    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 61 60" component={svg} />;
};
