import React from 'react';

const messageCircleIcon = (
  fill: string,
  size: number,
  style?: React.CSSProperties,
) => (
  <svg
    aria-hidden="true"
    data-testid="test-icon"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <title>message circle icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4783 5.79245C7.98559 5.79245 4.74596 8.59717 4.74596 11.6179C4.74596 12.3661 4.93466 13.085 5.28588 13.7513C5.33403 13.8427 5.38529 13.9331 5.4396 14.0226C5.63061 14.3373 5.66791 14.7367 5.51027 15.0934L4.28263 17.8711L8.26357 16.7754C8.50482 16.709 8.75683 16.7242 8.98307 16.8113C10.0292 17.214 11.2158 17.4434 12.4783 17.4434C16.9711 17.4434 20.2107 14.6387 20.2107 11.6179C20.2107 8.59717 16.9711 5.79245 12.4783 5.79245ZM2.95665 11.6179C2.95665 7.2141 7.44192 4 12.4783 4C17.5147 4 22 7.2141 22 11.6179C22 16.0217 17.5147 19.2358 12.4783 19.2358C11.0778 19.2358 9.7431 18.9948 8.5391 18.5584L3.45767 19.957C2.52235 20.2145 1.70845 19.2679 2.10113 18.3794L3.74363 14.6631C3.73012 14.6382 3.71678 14.6133 3.70359 14.5882C3.22534 13.6809 2.95665 12.6764 2.95665 11.6179Z"
      fill={fill}
    />
  </svg>
);
export default messageCircleIcon;
