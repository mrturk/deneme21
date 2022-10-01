import { createSvgIcon, SvgIcon } from '@mui/material';

export const AppleLoginIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6241 7.22201C10.7481 7.22201 9.39206 6.22601 7.96406 6.26201C6.08006 6.28601 4.35206 7.35401 3.38006 9.04601C1.42406 12.442 2.87606 17.458 4.78406 20.218C5.72006 21.562 6.82406 23.074 8.28806 23.026C9.69206 22.966 10.2201 22.114 11.9241 22.114C13.6161 22.114 14.0961 23.026 15.5841 22.99C17.0961 22.966 18.0561 21.622 18.9801 20.266C20.0481 18.706 20.4921 17.194 20.5161 17.11C20.4801 17.098 17.5761 15.982 17.5401 12.622C17.5161 9.814 19.8321 8.47001 19.9401 8.41001C18.6201 6.47801 16.5921 6.26201 15.8841 6.21401C14.0361 6.07001 12.4881 7.22201 11.6241 7.22201ZM14.7441 4.39001C15.5241 3.45401 16.0401 2.14601 15.8961 0.850006C14.7801 0.898006 13.4361 1.59401 12.6321 2.53001C11.9121 3.35801 11.2881 4.69001 11.4561 5.96201C12.6921 6.05801 13.9641 5.32601 14.7441 4.39001Z"
        fill="#363A53"
      />
    </svg>,
    'Svg'
  );

  return <SvgIcon {...rest} viewBox="0 0 24 24" component={svg} />;
};
