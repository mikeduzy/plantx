import React, { useEffect, useState } from 'react'
export function Testcomponent() {
    const [testdata, settestdata] = useState([])
    const fetchtestdata = () => {
        fetch("http://localhost:4000/testdata")
          .then(response => {
            return response.json()
          })
          .then(data => {
            settestdata(data)
          })
      }
      useEffect(() => {
        fetchtestdata()
      }, [])
      
      return (
        <div>
          {testdata.msg}
        </div>
      );
    
  }
