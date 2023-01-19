import './App.css';
import logo from "../src/assets/pictures/logo.png";
import logoText from "../src/assets/pictures/logo-text.png";
import background from "../src/assets/pictures/background.jpg";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <section className='mb-5'>
      <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='/'>Pricing</a></li>
                <li><a href='/'>Features</a></li>
                <li><a href='/'>Customers</a></li>
                
                
                <li><a href='/'>Contact Us</a></li>
              </ul>
            </div>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img className='w-full' src={logo} alt='logo'/>
              </div>
            </div>
            <div className="avatar">
              <div className="w-28 max-h-12">
                <img className='w-full max-h-12' src={logoText} alt='logo'/>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='/'>Pricing</a></li>
              <li><a href='/'>Features</a></li>
              <li><a href='/'>Customers</a></li>
              
              <li><a href='/'>Contact Us</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href='/' className="btn btn-primary rounded-xl text-white">Get started</a>
          </div>
        </div>
      </section>
      <section className='mb-5'>
        <div className="hero min-h-screen bg-white border-solid border-2 border-primary rounded-xl">
          <div className="hero-content flex-col lg:flex-row-reverse p-0">
            <div className='lg:w-3/5 text-center'>
            <img src={background} className="max-w-sm rounded-lg m-auto" alt='' />
            </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className='lg:w-2/5 p-10'>
        <h1 className="text-3xl font-bold mb-5">Education<span className='text-red-600'>*</span></h1>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Year of passing<span className='text-red-600'>*</span></span>
            </label>
            <input type="text" placeholder="2024" className="input input-bordered border-2 border-gray-400 input-sm w-full rounded" />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">0/100</span>
            </label>
          </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Region<span className='text-red-600'>*</span></span>
            </label>
            <input type="text" placeholder="Jalandhar" className="input input-bordered border-2 border-gray-400 input-sm w-full rounded" />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">0/100</span>
            </label>
          </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">college Name<span className='text-red-600'>*</span></span>
            </label>
            <input type="text" placeholder="NIT Jalandhar" className="input input-bordered border-2 border-gray-400 input-sm w-full rounded" />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">0/100</span>
            </label>
          </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Describe College<span className='text-red-600'>*</span></span>
              <span className="label-text-alt text-blue-600">Need Help ?</span>
            </label>
            <textarea type="text" placeholder="NITJ is a college of national
                importance and students can get
                admission into this college through
                the JEE mains entrance exam and
                then the JoSSA counselling ...." className="textarea textarea-bordered h-40 border-2 border-gray-400 w-full rounded" />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">0/200</span>
            </label>
          </div>
          <p className='py-6'>You need to provide all the information to join us, ensure that you are providing everything on top</p>
            <button className="btn btn-primary rounded-xl text-white">Get Started</button>
          </div>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default App;
