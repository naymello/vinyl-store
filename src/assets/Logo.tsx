import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

const Logo = (props: SvgProps) => (
  <Svg width={148} height={33} fill="none" {...props}>
    <Path
      d="m42.412 17.531 2.178-7.038h3.276l-3.564 10.044h-3.816l-3.564-10.044h3.276l2.214 7.038Zm6.44-9.864c0-.468.169-.852.505-1.152.336-.312.78-.468 1.332-.468s.996.156 1.332.468c.336.3.504.684.504 1.152 0 .456-.168.84-.504 1.152-.336.3-.78.45-1.332.45s-.996-.15-1.332-.45a1.51 1.51 0 0 1-.504-1.152Zm3.367 2.826v10.044H49.14V10.493h3.078Zm8.497-.108c1.152 0 2.064.384 2.736 1.152.684.768 1.026 1.824 1.026 3.168v5.832H61.4v-5.472c0-.672-.18-1.194-.54-1.566-.348-.384-.816-.576-1.404-.576-.624 0-1.122.198-1.494.594-.36.396-.54.96-.54 1.692v5.328h-3.078V10.493h3.078v1.836a3.33 3.33 0 0 1 1.278-1.422c.576-.348 1.248-.522 2.016-.522Zm8.114.108 2.412 6.156 2.25-6.156h3.402L70.63 25.325h-3.384l2.358-5.166-4.212-9.666h3.438Zm12.164-3.276v13.32h-3.078V7.217h3.078Zm11.27 9.738c0 .672-.174 1.29-.522 1.854-.337.564-.84 1.014-1.513 1.35-.66.336-1.463.504-2.412.504-1.427 0-2.603-.348-3.527-1.044-.925-.696-1.428-1.668-1.513-2.916h3.276c.049.48.216.858.505 1.134.3.276.677.414 1.133.414.397 0 .709-.108.936-.324.229-.216.343-.504.343-.864 0-.324-.108-.594-.325-.81a2.256 2.256 0 0 0-.773-.522 15.005 15.005 0 0 0-1.296-.504 17.75 17.75 0 0 1-1.98-.792 3.853 3.853 0 0 1-1.315-1.152c-.36-.516-.54-1.182-.54-1.998 0-.756.192-1.41.576-1.962.385-.552.913-.972 1.585-1.26.683-.3 1.463-.45 2.34-.45 1.415 0 2.537.336 3.365 1.008.84.672 1.314 1.596 1.422 2.772H88.7c-.06-.42-.215-.75-.468-.99-.24-.252-.57-.378-.99-.378-.36 0-.653.096-.882.288-.215.192-.323.474-.323.846 0 .3.096.558.287.774.205.204.457.372.757.504s.731.3 1.296.504c.816.276 1.481.552 1.998.828.516.264.96.654 1.332 1.17.371.516.557 1.188.557 2.016Zm7.39.936v2.646h-1.387c-1.176 0-2.094-.288-2.754-.864-.648-.588-.972-1.554-.972-2.898v-3.69h-1.35v-2.592h1.35V8.027h3.078v2.466h2.016v2.592H97.62v3.744c0 .396.078.672.234.828.168.156.444.234.828.234h.972Zm6.427-7.524c.996 0 1.884.21 2.664.63a4.423 4.423 0 0 1 1.854 1.782c.456.78.684 1.692.684 2.736 0 1.044-.228 1.956-.684 2.736a4.54 4.54 0 0 1-1.854 1.8c-.78.408-1.668.612-2.664.612-.996 0-1.89-.204-2.682-.612a4.658 4.658 0 0 1-1.872-1.8c-.444-.78-.666-1.692-.666-2.736 0-1.044.222-1.956.666-2.736a4.537 4.537 0 0 1 1.872-1.782c.792-.42 1.686-.63 2.682-.63Zm0 2.664c-.588 0-1.086.216-1.494.648-.396.42-.594 1.032-.594 1.836s.198 1.416.594 1.836c.408.42.906.63 1.494.63s1.08-.21 1.476-.63c.396-.42.594-1.032.594-1.836s-.198-1.416-.594-1.836a1.92 1.92 0 0 0-1.476-.648Zm9.876-.648a4.395 4.395 0 0 1 1.476-1.458 3.838 3.838 0 0 1 1.98-.54v3.294h-.882c-.816 0-1.452.174-1.908.522-.444.348-.666.936-.666 1.764v4.572h-3.078V10.493h3.078v1.89Zm14.284 2.862c0 .252-.03.528-.09.828h-6.966c.036.756.228 1.302.576 1.638.348.324.792.486 1.332.486.456 0 .834-.114 1.134-.342.3-.228.498-.522.594-.882h3.258a4.32 4.32 0 0 1-.864 1.908 4.734 4.734 0 0 1-1.692 1.314c-.684.312-1.446.468-2.286.468-.984 0-1.86-.204-2.628-.612a4.513 4.513 0 0 1-1.782-1.8c-.432-.78-.648-1.692-.648-2.736 0-1.056.21-1.968.63-2.736a4.364 4.364 0 0 1 1.8-1.782c.768-.42 1.644-.63 2.628-.63.996 0 1.872.204 2.628.612a4.25 4.25 0 0 1 1.746 1.728c.42.732.63 1.578.63 2.538Zm-3.114-.468c.012-.66-.168-1.152-.54-1.476-.36-.336-.81-.504-1.35-.504-.564 0-1.032.168-1.404.504-.372.336-.582.828-.63 1.476h3.924Z"
      fill="#001F24"
    />
    <Circle cx={14.683} cy={15.199} r={14.662} fill="#0E0E0E" />
    <Circle cx={14.683} cy={15.199} r={5.654} fill="#DD4848" />
    <Circle cx={14.683} cy={15.199} r={0.762} fill="#000" />
  </Svg>
)

export default Logo
