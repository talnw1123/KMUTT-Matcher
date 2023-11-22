import React from 'react'

function Register() {
  return (
    <section className=' mx-auto bg-blue-0'>
      <div className='LoginForm bg-yellow-0 flex flex-wrap flex-col items-center '>
        <div className='BoxLogin bg-zinc-950/60 rounded-md '>
          <div className='WelcomeText  bg-red-0 py-16 rounded-md '>
            <h1 className='text-center  text-white text-7xl font-semibold '>NO ACCOUNT YET?</h1>
          </div>
          <div className='UserInfo bg-green-0 flex flex-wrap flex-col items-center pb-20'>
            <h1 className=' text-center text-5xl font-semibold text-white'> Register</h1>
            <input type="email" name="email" id="email" class="InfoLogin py-2  mt-12 text-center text-1xl font-semibold" placeholder="You@example.com"></input>
            <input type="email" name="email" id="email" class="InfoLogin py-2  mt-7 text-center text-1xl font-semibold" placeholder="Password"></input>
            <input type="email" name="email" id="email" class="InfoLogin py-2  mt-7 text-center text-1xl font-semibold" placeholder="Confirm Password"></input>
            <div className='flex flex-wrap flex-row justify-evenly bg-blue-00 w-full'>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-cyan-600 rounded-full  bg-green-100 mt-10 py-3 px-20 font-semibold">Register</button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register