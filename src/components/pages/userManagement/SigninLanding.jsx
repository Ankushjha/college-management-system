import BackgroundImage from "../../../assets/images/signinBg.jpg"
import LeftImage from "../../../assets/images/signin-left.png"
import SigninModal from './SigninModal'


const SigninLanding = () => {

    const background = {
        backgroundImage: `url(${BackgroundImage})`
      }
    
      return (
        <div style={background} className='bg-cover bg-center'>
          <h1 className='text-4xl text-center font-bold pt-10'>Login as per your role</h1>
          <div className="flex mx-10 h-[82vh]">
            <div className="left-container w-1/2 flex items-center">
              <img src={LeftImage} alt="Login" />
            </div>
            <div className="right-container flex flex-col justify-center w-1/2 items-center gap-7">
    
              <SigninModal />
    
            </div>
          </div>
        </div>
      )
}

export default SigninLanding