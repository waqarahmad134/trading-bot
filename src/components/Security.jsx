import React from "react"
import Ripple from "./UI/Ripple"

export default function Security() {
  return (
    <>
      <section className="py-20">
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <Ripple/>
          </div>
        </div>
      </section>
    </>
  )
}
