
import React from 'react';


const Logo = ({useIcon=true, iconColor = '#4834D4', textColor = '#100658', width = '150px', height = '40px', ...rest}) => {
  return (
<svg
      width={146}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#prefix__clip0_76_35417)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.376 26.148l.035.029c.888.734 11.65 9.627 12.02 9.823H12.89c-1.399 0-2.534-1.166-2.53-2.604l.017-7.248zM10.834 18c10.61 4.704 19.074 17.42 19.074 17.42C19.097 25.083 6.624 21.597 5.795 21.373l-.044-.012h5.083V18zm-.222-10.452s16.177 10.12 20.446 19.162c0 0-12.775-11.439-27.032-14.543l6.659.469-.073-5.088zM0 .065C6.098-.368 12.461 1.51 12.461 1.51l17.623.39c.862.019 1.55.725 1.55 1.591V18C20.94 3.823 0 .065 0 .065z"
          fill="#fff"
        />
        <path
          d="M52.363 27.6c1.603 0 3.905-.796 4.723-2.472l.175 2.046h3.352V13.166h-3.41l-.117 1.932c-.816-1.42-2.712-2.272-4.636-2.272-4.168 0-7.433 2.528-7.433 7.33 0 4.887 3.12 7.444 7.346 7.444zm.466-3.182c-2.36 0-4.256-1.592-4.256-4.262 0-2.67 1.895-4.233 4.256-4.233 2.798 0 4.197 2.131 4.197 4.233 0 2.13-1.399 4.262-4.197 4.262zm12.567-13.184c1.049 0 2.099-.681 2.099-2.016-.002-1.365-1.053-2.018-2.1-2.018-1.05 0-2.1.654-2.1 2.017 0 1.336 1.05 2.017 2.1 2.017zm1.777 15.94V13.11h-3.556v14.064h3.556zm6.765 0v-7.387c0-2.586 1.72-3.552 3.584-3.552 1.167 0 1.837.312 2.566.91l1.604-3.013c-.787-.768-2.216-1.335-3.702-1.335-1.458 0-2.945.255-4.052 1.99l-.264-1.62H70.38v14.007h3.558zm15.77 0l6.035-14.036H94.17L88.92 25.554l-5.247-12.416h-1.575l6.035 14.036h1.574zm14.897.2c2.303 0 4.81-.91 6.209-2.7l-1.02-.796c-1.079 1.392-3.294 2.13-5.189 2.13-2.973 0-5.568-1.902-5.86-5.199h12.973c.029-.37.058-.738.058-1.08 0-4.716-3.41-6.818-7.171-6.818-4.051 0-7.317 3.04-7.317 7.245 0 4.46 3.265 7.217 7.317 7.217zm5.831-7.786H98.745c.32-3.438 2.886-5.398 5.859-5.398 3.469 0 5.801 1.932 5.83 5.398h.002zm6.413 7.586v-7.813c0-2.927 2.098-5.115 5.13-5.115 3.061 0 5.045 1.704 5.045 4.86v8.068h1.428v-8.098c0-3.892-2.652-6.194-6.502-6.194-2.011.029-4.022.824-5.131 2.756v-2.5h-1.399v14.036h1.429zm21.748.228c2.449 0 4.809-1.194 6.005-3.324v3.096H146V7.284h-1.399v8.922c-1.167-2.274-3.498-3.296-5.977-3.296-4.023 0-7.229 2.613-7.229 7.245 0 4.66 3.177 7.245 7.2 7.245l.002.002zm.087-1.364c-3.236 0-5.889-1.99-5.889-5.882 0-3.949 2.653-5.91 5.889-5.91 3.323 0 5.889 2.387 5.889 5.882 0 3.494-2.507 5.91-5.889 5.91z"
          fill="#F7F8F9"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_76_35417">
          <path fill="#fff" d="M0 0h146v36H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;