import { SvgIcon } from '@mui/material';

export const PlusIcon = ({ isLightMode = false, ...rest }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...rest}>
      <path
        stroke={isLightMode ? '#fff' : '"#00041C"'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 4v16M4 12h16"
      ></path>
    </SvgIcon>
  );
};
