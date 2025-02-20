import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-light font-sans text-lg">
      {/* Banner */}
      <div className="w-full flex flex-col">
      <div className="h-10 bg-blue-900"></div>
      <div className="h-10 bg-red-900"></div>
      </div>

      {/* Header Image */}
      <div className="w-full h-96 relative overflow-hidden">
        <img
          src="./flood.jpg"
          alt="Header"
          className="absolute w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Our Team Section */}
        <section className="mb-16">
          <h2 className="text-4xl text-gray-900 mb-8">Our Team</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl text-gray-900 mb-8">Executive Leadership Team</h3>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-8">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Micah Berger</h4>
                    <p className="text-gray-600">
                      Cofounder and Head Coach of Three's Hockey, with over 15 years of professional hockey experience. 
                      Specializing in player development and innovative training techniques.
                    </p>
                  </div>
                  <img 
                    src="./micah2.jpg" 
                    alt="Coach Micah" 
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
                <div className="flex items-center gap-8">
                  <img 
                    src="./kareem1.jpg" 
                    alt="Coach Kareem" 
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Kareem Alazem</h4>
                    <p className="text-gray-600">
                      Director of Player Development with extensive NCAA Division I coaching background.
                      Focused on building complete athletes through technical skills and strategic gameplay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-gray-900 mb-8">Coaching Staff</h3>
            </div>
          </div>
        </section>

        <div className="w-full flex flex-col">
        <div className="h-10 bg-red-700"></div>
      </div>        
      
      <hr className="my-12 border-gray-200" />

        {/* Pro 3v3 Section */}
        <div className="w-full flex flex-col">
          
        <section className="mb-16 ">
          <h2 className="text-4xl text-gray-900 mb-8">Pro 3v3</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Experience high-intensity 3v3 hockey at the professional level.
            </p>
          </div>
        </section>

        </div>

        <hr className="my-12 border-gray-200" />

        {/* Youth 3v3 Section */}
        <section className="mb-16">
          <h2 className="text-4xl  text-gray-900 mb-8">Youth 3v3</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Develop skills and have fun with youth 3v3 hockey programs.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Camps & Summer Tournaments Section */}
        <section className="mb-16">
          <h2 className="text-4xl  text-gray-900 mb-8">Camps & Summer Tournaments</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Join our intensive summer camps and exciting tournament events.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200" />

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-4xl text-gray-900 mb-8">Contact Us</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Have questions? Get in touch with us at{' '}
              <a href="mailto:hello@hockeythrees.com" className="text-red-700 hover:text-red-800">
                hello@hockeythrees.com
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
