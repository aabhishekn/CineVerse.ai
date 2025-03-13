import Header from "./Header"

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt="Background Image" 
        />
      </div>
      <form className="w-3/12 absolute bg-gradient-to-b from-black p-12 my-36 mx-auto rounded-lg left-0 right-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-400"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-400" />
        <button className="p-4 my-6 bg-red-700 w-full ">Sign In</button>
      </form>
    </div>
  )
}

export default Login