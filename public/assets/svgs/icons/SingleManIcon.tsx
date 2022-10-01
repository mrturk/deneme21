import { createSvgIcon, SvgIcon } from '@mui/material';

export const SingleManIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.0835 6.3125C6.69311 6.94502 7.42403 7.4481 8.23253 7.79166C9.04104 8.13521 9.91053 8.31219 10.789 8.312C11.6787 8.31225 12.5592 8.13106 13.3765 7.7795"
        stroke="#363A53"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47656 12.25C11.6512 12.25 13.4141 10.4871 13.4141 8.3125C13.4141 6.13788 11.6512 4.375 9.47656 4.375C7.30194 4.375 5.53906 6.13788 5.53906 8.3125C5.53906 10.4871 7.30194 12.25 9.47656 12.25Z"
        stroke="#363A53"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6615 16.6571C13.9822 15.9735 13.1743 15.431 12.2845 15.0608C11.3947 14.6906 10.4405 14.5 9.47674 14.5C8.51299 14.5 7.55876 14.6906 6.66895 15.0608C5.77914 15.431 4.97133 15.9735 4.29199 16.6571"
        stroke="#363A53"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47656 18.4375C14.1365 18.4375 17.9141 14.6599 17.9141 10C17.9141 5.3401 14.1365 1.5625 9.47656 1.5625C4.81666 1.5625 1.03906 5.3401 1.03906 10C1.03906 14.6599 4.81666 18.4375 9.47656 18.4375Z"
        stroke="#363A53"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 19 20" component={svg} />;
};
