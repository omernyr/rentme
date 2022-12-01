import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <a href='#' className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVmH4uDAHOP5El8k2r-SPYJUo8xfNjc9Ydg&usqp=CAU" alt="" />
                <span>rentme</span>
            </a>
            <section>
                <button>How its works</button>
                <button>Car Locations</button>
                <button>Community</button>
            </section>
            <button className='login'>Login</button>
        </div>
    )
}

export default Navbar