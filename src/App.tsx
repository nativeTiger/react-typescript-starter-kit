import { Toaster, toast } from 'sonner'

function App() {
  return (
    <div>
      <button onClick={() => toast('My first toast')} className="text-blue-500 text-center text-3xl font-bold flex justify-center items-center h-screen">
        Give me a toastdfg
      </button>
      <Toaster />
    </div>
  )
}


export default App;
