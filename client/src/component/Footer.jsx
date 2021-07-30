import React from 'react'

 const Footer = () => {
    const date = new Date().getFullYear()
    // console.log(date)
    return (
        <div className="footer">
        <footer>
          <h4 className="text-light">Copyright {date} &copy; Made With &#x1F496; BY LK </h4>
        </footer>
      </div>
    )
}

export default  Footer;