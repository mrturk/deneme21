import { createSvgIcon, SvgIcon } from "@mui/material";

export const MailIco = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="13"
      fill="none"
      viewBox="0 0 18 13"
    >
      <path
        fill="#fff"
        d="M.18.621V12.38h17.64V.62H.18zm16.895.787v.581L9 7.986.925 1.99v-.583h16.15zM.925 11.592v-8.64l7.86 5.838A.36.36 0 009 8.861c.076 0 .15-.023.214-.072l7.86-5.837v8.639H.926z"
      ></path>
    </svg>,
    "Svg"
  );

  return <SvgIcon {...rest} viewBox="0 0 18 13" component={svg} />;
};
