import React from 'react'

type Props = {}

const NewPage = (props: Props) => {
  const handAlert = () => {
    console.log("HELLO WORLD");
  }
  const handAlert1 = () => {
    console.log("HELLO WORLD");
  }
  const handAlert2 = () => {
    console.log("HELLO WORLD");
  }
  console.log("HELLO WROLD");
  
  return (
    <div onClick={handAlert2}>NewPage</div>
  )
}

export default NewPage