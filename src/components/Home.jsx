import homeBackground from "../assets/images/homeBackground1.jpg"
import RegisterModal from './pages/userManagement/registerModal'

//TODO
// --- 1. Add dynamic behaviour in argument of RegisterModal

const Home = () => {
  return (
    <>
      <div className="container w-screen h-[80vh] overflow-hidden text-white">
        <img src={homeBackground} alt="College management System" className=" absolute brightness-50 h-[90vh] w-full" />
        <div className="relative flex items-center justify-center h-[90vh] w-full">
          <div className="innerbox w-1/2 text-center leading-[70px]">
            <h1 className="text-7xl text-center">Welcome to <br /> My New University</h1>
            <p>Positive behavioural support is a behaviour management system</p>
            {/* <Button type="primary" shape="round" size="large">Learn More</Button> */}
            <RegisterModal type="primary" shape="round" size="large">Learn More</RegisterModal>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home