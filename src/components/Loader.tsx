import { type ReactElement } from 'react';

export const Loader = (): ReactElement => (
  <svg
    width='120'
    height='120'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'>
    <style>
      {`
        #top-left {
          animation: move 1s linear infinite, first 1s linear infinite;
        }
          
        #top-right {
          animation: move 1s linear infinite, second 1s linear infinite;
          animation-delay: .15s;
        }

        #bottom-right {
          animation: move 1s linear infinite, third 1s linear infinite;
          animation-delay: .3s;
        }

        #bottom-left {
          animation: move 1s linear infinite, fourth 1s linear infinite;
          animation-delay: .45s;
        }

        @keyframes move {
          0%, 50% {
            width: 9px;
            height: 9px;
          }

          10% {
            width: 11px;
            height: 11px;
          }
        }

        @keyframes first {
          0%, 50% {
            x: 1.5px;
            y: 1.5px;
          }

          10% {
            x: .5px;
            y: .5px;
          }
        }

        @keyframes second {
          0%, 50% {
            x: 13.5px;
            y: 1.5px;
          }

          10% {
            x: 12.5px;
            y: .5px;
          }
        }

        @keyframes third {
          0%, 50% {
            x: 13.5px;
            y: 13.5px;
          }

          10% {
            x: 12.5px;
            y: 12.5px;
          }
        }

        @keyframes fourth {
          0%, 50% {
            x: 1.5px;
            y: 13.5px;
          }

          10% {
            x: .5px;
            y: 12.5px;
          }
      }`}
    </style>
    <rect
      id='top-left'
      x='1.5'
      y='1.5'
      rx='1'
      width='9'
      height='9'
      fill='#22c55e'
    />
    <rect
      id='top-right'
      x='13.5'
      y='1.5'
      rx='1'
      width='9'
      height='9'
      fill='#ef4444'
    />
    <rect
      id='bottom-right'
      x='13.5'
      y='13.5'
      rx='1'
      width='9'
      height='9'
      fill='#22c55e'
    />
    <rect
      id='bottom-left'
      x='1.5'
      y='13.5'
      rx='1'
      width='9'
      height='9'
      fill='#ef4444'
    />
  </svg>
);
