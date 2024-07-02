import { Toaster, toast } from 'sonner'

function App() {
  return (
    <div>
      <button onClick={() => toast('Hello World')} className="text-blue-500 text-center text-3xl font-bold flex justify-center items-center h-screen">
        Hit Me Up
      </button>
      <Toaster />
    </div>
  )
}


export default App;
