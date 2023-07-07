import React, { useState } from 'react'

const ScrollImages3D = ({ mapped3DImages, item }) => {
  const [curIndex, setCurIndex] = useState(0)

  return (
    <div className='scroll3D'>
      {
         item && <>
          <img src={`http://127.0.0.1:8000/media/media/item_content/item_${item.id}/3d/${item.name.split(" ").join("_")}_${curIndex}.png`}></img>
          <input type="range" min="0" max={mapped3DImages.length - 1} value={curIndex} onChange={(e) => setCurIndex(e.target.value)}/>
        </>
      }
    </div>
  )
}

export default ScrollImages3D