import Main from "./Main"
import Nav from "./Nav"

const MainLayout = () => {
  return (
    <div className='flex flex-row p-3 min-h-screen w-full'>
        <Nav />
        <Main />
    </div>
  )
}

export default MainLayout