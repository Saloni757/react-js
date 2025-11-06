import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'

const App = () => {

  const users =
    [
      {
        img: 'https://i.pinimg.com/736x/02/f0/c5/02f0c530688f5ff01929beb38fac9312.jpg',
        intro: '',
        color: 'royalblue',
        tag: 'Satisfied'
      },
      {
        img: 'https://i.pinimg.com/736x/a4/bb/7d/a4bb7dd0fb40ebd9a23ff9dcea4afc47.jpg',
        intro: '',
        color: 'gray',
        tag: 'Underserved'
      },
      {
        img: 'https://i.pinimg.com/736x/88/8b/f8/888bf8d0e514ab1cb7352b006215fc3a.jpg',
        intro: '',
        color: 'lightseagreen',
        tag: 'Underbanked'
      },
      {
        img: 'https://i.pinimg.com/736x/ac/b5/c3/acb5c33cee6ab8db6844c6b06adfd9ab.jpg',
        intro: '',
        color: 'black',
        tag: 'Average'

      }
    ]

  return (
    <div >
      <Page1 users={users} />
      <Page2 />

    </div>
  )
}

export default App
