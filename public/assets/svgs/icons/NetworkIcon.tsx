import { createSvgIcon, SvgIcon } from '@mui/material';

export const NetworkIcon = ({ isLightMode = false, ...props }) => {
  const svg = createSvgIcon(
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0352 21C16.5602 21 21.0391 16.5211 21.0391 10.9961C21.0391 5.47109 16.5602 0.992188 11.0352 0.992188C5.51015 0.992188 1.03125 5.47109 1.03125 10.9961C1.03125 16.5211 5.51015 21 11.0352 21Z"
        stroke={!isLightMode ? props.color || '#60647E' : '#fff'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.20802 9.25637C9.289 9.25637 10.1653 8.38006 10.1653 7.29908C10.1653 6.2181 9.289 5.3418 8.20802 5.3418C7.12704 5.3418 6.25073 6.2181 6.25073 7.29908C6.25073 8.38006 7.12704 9.25637 8.20802 9.25637Z"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9924 17.0849C13.593 17.0849 14.0798 16.5981 14.0798 15.9975C14.0798 15.397 13.593 14.9102 12.9924 14.9102C12.3919 14.9102 11.905 15.397 11.905 15.9975C11.905 16.5981 12.3919 17.0849 12.9924 17.0849Z"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9071 10.9958C17.7479 10.9958 18.4294 10.3143 18.4294 9.47351C18.4294 8.63274 17.7479 7.95117 16.9071 7.95117C16.0663 7.95117 15.3848 8.63274 15.3848 9.47351C15.3848 10.3143 16.0663 10.9958 16.9071 10.9958Z"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1653 7.08398C12.1099 7.15806 13.9628 7.9301 15.3847 9.25875"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2129 10.9688L17.5609 11.4333C17.5609 11.4333 18.8657 13.1731 18.8657 17.0877"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2317 1.91211L15.3857 2.29922C16.0153 4.16452 16.3099 6.12656 16.2556 8.09452"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8191 10.5645C15.7101 12.361 15.0626 14.0831 13.9609 15.5064"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4723 16.957L12.3401 17.091C12.3401 17.091 10.1653 19.2658 5.38086 19.2658"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0352 0.996094C9.8451 2.26898 8.88813 3.74125 8.20801 5.34562"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.19192 8.97461L7.12058 9.25994C6.64661 11.6126 6.95199 14.0556 7.99049 16.2192C9.46933 19.1821 13.2099 20.5687 13.2099 20.5687L13.5344 20.6896"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25197 7.29883C6.25197 7.29883 2.91502 7.53805 1.22827 9.01515"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.27588 13.2038L1.46726 13.1742C1.46726 13.1742 7.45307 12.2538 12.3185 15.1489"
        stroke={props.color || '#60647E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...props} viewBox="0 0 22 22" component={svg} />;
};
