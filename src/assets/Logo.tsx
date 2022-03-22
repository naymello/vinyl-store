import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

const Logo = (props: SvgProps) => (
  <Svg width={165} height={50} fill="none" {...props}>
    <Path
      d="m65.59 28.66 2.42-7.82h3.64L67.69 32h-4.24l-3.96-11.16h3.64l2.46 7.82Zm7.157-10.96c0-.52.186-.947.56-1.28.373-.347.866-.52 1.48-.52.613 0 1.106.173 1.48.52.373.333.56.76.56 1.28 0 .507-.187.933-.56 1.28-.374.333-.867.5-1.48.5-.614 0-1.107-.167-1.48-.5a1.678 1.678 0 0 1-.56-1.28Zm3.74 3.14V32h-3.42V20.84h3.42Zm9.441-.12c1.28 0 2.293.427 3.04 1.28.76.853 1.14 2.027 1.14 3.52V32h-3.42v-6.08c0-.747-.2-1.327-.6-1.74-.387-.427-.907-.64-1.56-.64-.693 0-1.247.22-1.66.66-.4.44-.6 1.067-.6 1.88V32h-3.42V20.84h3.42v2.04a3.7 3.7 0 0 1 1.42-1.58c.64-.387 1.387-.58 2.24-.58Zm9.016.12 2.68 6.84 2.5-6.84h3.78l-6.96 16.48h-3.76l2.62-5.74-4.68-10.74h3.82Zm13.515-3.64V32h-3.42V17.2h3.42Zm12.522 10.82c0 .747-.194 1.433-.58 2.06-.374.627-.934 1.127-1.68 1.5-.734.373-1.627.56-2.68.56-1.587 0-2.894-.387-3.92-1.16-1.027-.773-1.587-1.853-1.68-3.24h3.64c.053.533.24.953.56 1.26.333.307.753.46 1.26.46.44 0 .786-.12 1.04-.36.253-.24.38-.56.38-.96 0-.36-.12-.66-.36-.9a2.517 2.517 0 0 0-.86-.58 16.75 16.75 0 0 0-1.44-.56c-.894-.307-1.627-.6-2.2-.88a4.278 4.278 0 0 1-1.46-1.28c-.4-.573-.6-1.313-.6-2.22 0-.84.213-1.567.64-2.18.426-.613 1.013-1.08 1.76-1.4.76-.333 1.626-.5 2.6-.5 1.573 0 2.82.373 3.74 1.12.933.747 1.46 1.773 1.58 3.08h-3.7c-.067-.467-.24-.833-.52-1.1-.267-.28-.634-.42-1.1-.42-.4 0-.727.107-.98.32-.24.213-.36.527-.36.94 0 .333.106.62.32.86.226.227.506.413.84.56.333.147.813.333 1.44.56.906.307 1.646.613 2.22.92.573.293 1.066.727 1.48 1.3.413.573.62 1.32.62 2.24Zm8.21 1.04V32h-1.54c-1.306 0-2.326-.32-3.06-.96-.72-.653-1.08-1.727-1.08-3.22v-4.1h-1.5v-2.88h1.5V18.1h3.42v2.74h2.24v2.88h-2.24v4.16c0 .44.087.747.26.92.187.173.494.26.92.26h1.08Zm7.143-8.36c1.106 0 2.093.233 2.96.7a4.918 4.918 0 0 1 2.06 1.98c.506.867.76 1.88.76 3.04 0 1.16-.254 2.173-.76 3.04a5.048 5.048 0 0 1-2.06 2c-.867.453-1.854.68-2.96.68-1.107 0-2.1-.227-2.98-.68a5.171 5.171 0 0 1-2.08-2c-.494-.867-.74-1.88-.74-3.04 0-1.16.246-2.173.74-3.04a5.037 5.037 0 0 1 2.08-1.98c.88-.467 1.873-.7 2.98-.7Zm0 2.96c-.654 0-1.207.24-1.66.72-.44.467-.66 1.147-.66 2.04s.22 1.573.66 2.04c.453.467 1.006.7 1.66.7.653 0 1.2-.233 1.64-.7.44-.467.66-1.147.66-2.04s-.22-1.573-.66-2.04c-.44-.48-.987-.72-1.64-.72Zm10.973-.72c.427-.68.973-1.22 1.64-1.62.68-.4 1.413-.6 2.2-.6v3.66h-.98c-.907 0-1.613.193-2.12.58-.493.387-.74 1.04-.74 1.96V32h-3.42V20.84h3.42v2.1Zm15.871 3.18c0 .28-.033.587-.1.92h-7.74c.04.84.254 1.447.64 1.82.387.36.88.54 1.48.54.507 0 .927-.127 1.26-.38.334-.253.554-.58.66-.98h3.62a4.785 4.785 0 0 1-.96 2.12 5.258 5.258 0 0 1-1.88 1.46c-.76.347-1.606.52-2.54.52-1.093 0-2.066-.227-2.92-.68a5.015 5.015 0 0 1-1.98-2c-.48-.867-.72-1.88-.72-3.04 0-1.173.234-2.187.7-3.04a4.85 4.85 0 0 1 2-1.98c.854-.467 1.827-.7 2.92-.7 1.107 0 2.08.227 2.92.68a4.72 4.72 0 0 1 1.94 1.92c.467.813.7 1.753.7 2.82Zm-3.46-.52c.014-.733-.186-1.28-.6-1.64-.4-.373-.9-.56-1.5-.56-.626 0-1.146.187-1.56.56-.413.373-.646.92-.7 1.64h4.36Z"
      fill="#001F24"
    />
    <Circle cx={24.615} cy={25} r={24.135} fill="#0E0E0E" />
    <Circle cx={24.615} cy={25} r={9.306} fill="#DD4848" />
    <Circle cx={24.615} cy={25} r={1.255} fill="#000" />
  </Svg>
)

export default Logo
