import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)


    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='h-min-screen lg:flex lg:h-screen bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl text-white font-bold'>Add Notes</h1>
        {/* First Input for Notes Heading */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}

        />
        {/* Detailed input */}
        <textarea

          className='px-5 h-32 flex items-start flex-row w-full font-medium py-2 border-2 outline-none rounded '
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          className='bg-white active:scale-85 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Notes
        </button>

      </form>

      <div className=' lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5  mt-6 '>
          {task.map(function (elem, idx) {

            return <div key={idx} className='relative flex  flex-col items-start w-48 h-64  py-9 px-4 rounded-xl text-black bg-[url("https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-page-memory-page-binder-png-image_10006589.png")] bg-cover bg-top bg-no-repeat '>

              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-4 text-xs leading-tight font-semibold text-gray-600'>{elem.details}</p>
              </div >
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full mt-30 cursor-pointer active:scale-95 bg-red-500  text-xs font-bold text-white py-1 '>Delete</button>
            </div>
          })}

        </div>

      </div>
    </div>
  )
}

export default App
