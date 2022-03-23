import Routes from './src/routes/Routes'
import ContextProviders from './src/contexts/ContextProviders'

export default function App() {
  return (
    <ContextProviders>
      <Routes />
    </ContextProviders>
  )
}
