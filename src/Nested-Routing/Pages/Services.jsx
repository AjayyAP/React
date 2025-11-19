
import './Services.css'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div className='services-container '>
            <h2 className='services-title'> our services</h2>
            <p> Choose one of our services below</p>

            <div className='services-links'>
                {/* web dev */}
                <Link to='web-dev' className='service-link web'>
                    Web Development
                </Link>

                {/* app dev */}

                <Link to='app-dev' className='service-link app'>
                    App Development
                </Link>
            </div>

            {/* nested route content */}

            <Outlet />

        </div>
  )
}

export default Services




