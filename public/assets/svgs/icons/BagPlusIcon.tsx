import { createSvgIcon, SvgIcon } from '@mui/material';

export const BagPlusIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.9578 8.13477H6.04238C4.88744 8.13477 3.95117 9.07103 3.95117 10.226V49.959C3.95117 51.1139 4.88744 52.0502 6.04238 52.0502H49.9578C51.1128 52.0502 52.049 51.1139 52.049 49.959V10.226C52.049 9.07103 51.1128 8.13477 49.9578 8.13477Z"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4067 3.95508V14.4111"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.5933 3.95508V14.4111"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.95117 18.5938H52.049"
        stroke="#00020F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.3401 34.4459C39.3401 40.7091 34.2628 45.7863 27.9996 45.7863C21.7365 45.7863 16.6592 40.7091 16.6592 34.4459C16.6592 28.1828 21.7365 23.1055 27.9996 23.1055C34.2628 23.1055 39.3401 28.1828 39.3401 34.4459ZM28 29.0161C28.6904 29.0161 29.25 29.5758 29.25 30.2661V33.1963H32.1847C32.875 33.1963 33.4347 33.7559 33.4347 34.4463C33.4347 35.1366 32.875 35.6963 32.1847 35.6963H29.25V38.631C29.25 39.3213 28.6904 39.881 28 39.881C27.3096 39.881 26.75 39.3213 26.75 38.631V35.6963H23.8198C23.1295 35.6963 22.5698 35.1366 22.5698 34.4463C22.5698 33.7559 23.1295 33.1963 23.8198 33.1963H26.75V30.2661C26.75 29.5758 27.3096 29.0161 28 29.0161Z"
        fill="url(#paint0_linear_20444_485472)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_20444_485472"
          x1="32.2922"
          y1="28.0994"
          x2="28.0513"
          y2="47.2856"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E41B64" />
          <stop offset={1} stopColor="#4791FF" />
        </linearGradient>
      </defs>
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 56 56" component={svg} />;
};
