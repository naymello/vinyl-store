import VinylContextProvider from './VinylContext'
import BagContextProvider from './BagContext'

const ContextProviders: React.FC = ({ children }) => {
  return (
    <VinylContextProvider>
      <BagContextProvider>{children}</BagContextProvider>
    </VinylContextProvider>
  )
}

export default ContextProviders
