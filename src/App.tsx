import { QueryClient, QueryClientProvider } from 'react-query';
import useUserStore from './store/useUserStore';

const queryClient = new QueryClient();
function App() {

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setUser({ name: 'John Doe', email: 'john@example.com' })}>
        Login
      </button>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl font-bold">{user?.email} ¡Bienvenido(a) a mi aplicación con Tailwind!</h1>
        <p className="text-lg">Explora todas las posibilidades que ofrece Tailwind para tu proyecto de React.</p>
      </div>
    </QueryClientProvider>
  )
}

export default App
