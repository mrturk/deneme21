import { createSvgIcon, SvgIcon } from '@mui/material';

export const VideoCameraIcon = ({ color = '#60647E', ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 5.76172H3.75C2.09315 5.76172 0.75 7.10486 0.75 8.76172V16.2617C0.75 17.9186 2.09315 19.2617 3.75 19.2617H12.75C14.4069 19.2617 15.75 17.9186 15.75 16.2617V8.76172C15.75 7.10486 14.4069 5.76172 12.75 5.76172Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 15.5092L22.165 17.2163C22.2793 17.2733 22.4064 17.3003 22.534 17.2945C22.6617 17.2886 22.7858 17.2503 22.8945 17.1831C23.0032 17.1159 23.0929 17.022 23.1551 16.9104C23.2173 16.7987 23.25 16.6731 23.25 16.5453V8.47225C23.2501 8.34443 23.2175 8.21871 23.1553 8.10706C23.093 7.9954 23.0033 7.90153 22.8945 7.83437C22.7858 7.76721 22.6616 7.729 22.5339 7.72338C22.4062 7.71776 22.2792 7.74491 22.165 7.80225L18.75 9.50925"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 25" component={svg} />;
};
