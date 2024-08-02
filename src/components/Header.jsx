import React from "react"

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-5">
        <div>
          <a href="">
            <img
              src="https://preview.cruip.com/stellar/images/logo.svg"
              alt=""
            />
          </a>
        </div>
        <nav>
          <ul className="text-[#cbd5e1] font-semibold flex items-center gap-x-5">
            <li>About</li>
            <li>Terms</li>
            <li>How Bot Works</li>
            <li>Features</li>
          </ul>
        </nav>
      </header>
    </>
  )
}
