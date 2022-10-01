import { createSvgIcon, SvgIcon } from '@mui/material';

export const LocationPinIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#60647E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C14.1217 2 16.1566 2.79506 17.6569 4.21028C19.1571 5.62551 20 7.54496 20 9.54638C20 12.7679 15.2213 18.8972 13.0507 21.5166C12.926 21.6672 12.7665 21.789 12.5845 21.8727C12.4024 21.9565 12.2025 22 12 22C11.7975 22 11.5976 21.9565 11.4155 21.8727C11.2335 21.789 11.074 21.6672 10.9493 21.5166C8.77867 18.8989 4 12.7679 4 9.54638C4 7.54496 4.84285 5.62551 6.34315 4.21028C7.84344 2.79506 9.87827 2 12 2V2Z" />
      <circle cx="12" cy="9" r="2" />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
