import { createSvgIcon, SvgIcon } from '@mui/material';

export const CommunityPeopleIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 12.208C9.77817 12.208 11.625 10.3612 11.625 8.08301C11.625 5.80483 9.77817 3.95801 7.5 3.95801C5.22183 3.95801 3.375 5.80483 3.375 8.08301C3.375 10.3612 5.22183 12.208 7.5 12.208Z"
        stroke="#60647E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 20.458C0.75 18.6678 1.46116 16.9509 2.72703 15.685C3.9929 14.4192 5.70979 13.708 7.5 13.708C9.29021 13.708 11.0071 14.4192 12.273 15.685C13.5388 16.9509 14.25 18.6678 14.25 20.458"
        stroke="#60647E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7266 13.708C19.5905 13.708 21.1016 12.197 21.1016 10.333C21.1016 8.46905 19.5905 6.95801 17.7266 6.95801C15.8626 6.95801 14.3516 8.46905 14.3516 10.333C14.3516 12.197 15.8626 13.708 17.7266 13.708Z"
        stroke="#60647E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8125 15.2755C16.6476 14.9677 17.5447 14.8662 18.4274 14.9796C19.3101 15.093 20.1525 15.4179 20.8827 15.9267C21.6129 16.4355 22.2094 17.1131 22.6215 17.902C23.0336 18.6908 23.249 19.5675 23.2495 20.4575"
        stroke="#60647E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 25" component={svg} />;
};
