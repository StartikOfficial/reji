import * as React from "react";
const SvgLogoIcon = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#2B2B2B" />
    <path
      d="m27.057 26.52-5.513-3.398-1.468.847 2.85 4.936-4.106 2.371L10 16l6.447-3.722c1.063-.614 2.14-.943 3.231-.986a5.53 5.53 0 0 1 3.039.742c.949.53 1.718 1.305 2.308 2.327.344.595.579 1.216.706 1.861.118.632.123 1.262.014 1.893-.109.63-.33 1.23-.662 1.8l6.406 4.046-4.432 2.56Zm-10.85-9.253 1.867 3.234 1.872-1.08c.553-.32.907-.723 1.061-1.209.154-.486.092-.97-.186-1.453a1.855 1.855 0 0 0-.692-.707 1.717 1.717 0 0 0-.97-.205c-.351.013-.711.127-1.08.34l-1.872 1.08Z"
      fill="#F2F5F5"
    />
  </svg>
);
export default SvgLogoIcon;
