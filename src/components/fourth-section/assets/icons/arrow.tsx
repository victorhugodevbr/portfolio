import { SVGProps } from "react";

export const ArrowIcon = ({ open, ...props }: SVGProps<SVGSVGElement> & { open?: boolean }) => (
  <svg
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      verticalAlign: 'middle',
      transition: 'transform 0.3s',
      transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
    }}
    {...props}
  >
    <path d="M6.02759 8.37454L10.8748 16.77C11.4936 17.8425 12.5061 17.8425 13.1248 16.77L17.9721 8.37379C18.5916 7.30129 18.0846 6.42529 16.8471 6.42529H7.15259C5.91509 6.42529 5.40809 7.30204 6.02759 8.37454Z" fill="black"/>
  </svg>
);