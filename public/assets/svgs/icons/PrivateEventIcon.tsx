import { createSvgIcon, SvgIcon } from '@mui/material';

export const PrivateEventIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 20C16.297 20 19.375 16.922 19.375 13.125C19.375 9.32804 16.297 6.25 12.5 6.25C8.70304 6.25 5.625 9.32804 5.625 13.125C5.625 16.922 8.70304 20 12.5 20Z"
        stroke="#363A53"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 33.75C1.25 30.7663 2.43526 27.9048 4.54505 25.795C6.65483 23.6853 9.51631 22.5 12.5 22.5C15.4837 22.5 18.3452 23.6853 20.455 25.795C22.5647 27.9048 23.75 30.7663 23.75 33.75"
        stroke="#363A53"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5443 22.5C32.6509 22.5 35.1693 19.9816 35.1693 16.875C35.1693 13.7684 32.6509 11.25 29.5443 11.25C26.4377 11.25 23.9193 13.7684 23.9193 16.875C23.9193 19.9816 26.4377 22.5 29.5443 22.5Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.3541 25.1122C27.7459 24.5992 29.241 24.43 30.7123 24.619C32.1835 24.8079 33.5874 25.3494 34.8044 26.1974C36.0214 27.0454 37.0156 28.1749 37.7024 29.4896C38.3892 30.8044 38.7483 32.2655 38.7491 33.7489"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 40 40" component={svg} />;
};
