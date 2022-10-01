import { createSvgIcon, SvgIcon } from '@mui/material';

export const ChatIcon = ({ isLightMode = true, ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3805 17.7389C10.6116 17.8313 10.8735 17.8031 11.0795 17.6636C11.2856 17.524 11.4091 17.2914 11.4091 17.0425V15.1175C12.9284 14.9482 14.3541 14.268 15.4455 13.1766C16.7149 11.9071 17.4281 10.1854 17.4281 8.39014C17.4281 6.59488 16.7149 4.87314 15.4455 3.6037C14.1761 2.33426 12.4543 1.62109 10.6591 1.62109H7.64954C5.85428 1.62109 4.13254 2.33426 2.8631 3.6037C1.59366 4.87314 0.880493 6.59488 0.880493 8.39014C0.880493 11.1512 2.38288 13.1351 4.27906 14.5822C6.1583 16.0163 8.50743 16.9896 10.3805 17.7389Z"
        stroke={isLightMode ? '#fff' : '#363A53'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 19 19" component={svg} />;
};
