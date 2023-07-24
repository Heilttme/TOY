import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import useWindowDimensions from "./useWindowDimensions"

const Store = ({ setQuickShop, items, storeRef, displayImages }) => {
  const [oneLineItems, setOneLineItems] = useState([])
  const [twoLineItems, setTwoLineItems] = useState([])
  const [threeLineItems, setThreeLineItems] = useState([])
  const { height, width } = useWindowDimensions()
  const [shownItems, setShownItems] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const newItems = []
    let newAr = [] 
    for (let i = 0; i < items.length; i++) {
      newAr.push(items[i])
      if (newAr.length === 3) {
        newItems.push(newAr)
        newAr = []
      }
    }
    newItems.push(newAr)
    setThreeLineItems(newItems)
  }, [items])

  useEffect(() => {
    const newItems = []
    let newAr = [] 
    for (let i = 0; i < items.length; i++) {
      newAr.push(items[i])
      if (newAr.length === 2) {
        newItems.push(newAr)
        newAr = []
      }
    }
    newItems.push(newAr)
    setTwoLineItems(newItems)
  }, [items])

  useEffect(() => {
    const newItems = []
    let newAr = [] 
    for (let i = 0; i < items.length; i++) {
      newAr.push(items[i])
      if (newAr.length === 1) {
        newItems.push(newAr)
        newAr = []
      }
    }
    newItems.push(newAr)
    setOneLineItems(newItems)
  }, [items])

  const threeItemsDisplay = width > 1000 ? threeLineItems.slice(0, shownItems).map(item => (
    <div className='block'>
      {item.map(itemNew => 
      <>
        <div onClick={() => navigate(`items/${itemNew.id}`)} className='item'>
          <img src={`http://127.0.0.1:8000${displayImages.length && displayImages.filter(image => image.item === itemNew.id)[0].image}`}/>
          <div className='text-wrapper'>
            <div className='text'>
              <h2 className='col'>{itemNew.collection}</h2>
              <h2 className='name'>{itemNew.name}</h2>
            </div>
            <button onClick={(e) => {e.stopPropagation();setQuickShop(itemNew.id)}} className='quick-btn1 quick-btn'>QUICK SHOP</button>
          </div>
        </div>
      </>
      )}
    </div>
  )) 
  : width > 600 ?
    twoLineItems.slice(0, shownItems).map(item => (
      <div className='block'>
        {item.map(itemNew => 
        <>
          <div onClick={() => navigate(`items/${itemNew.id}`)} className='item'>
            <img src={`http://127.0.0.1:8000${displayImages.length && displayImages.filter(image => image.item === itemNew.id)[0].image}`}/>
            <div className='text-wrapper'>
              <div className='text'>
                <h2 className='col'>{itemNew.collection}</h2>
                <h2 className='name'>{itemNew.name}</h2>
              </div>
              <button onClick={(e) => {e.stopPropagation();setQuickShop(itemNew.id)}} className='quick-btn1 quick-btn'>QUICK SHOP</button>
            </div>
          </div>
        </>
        )}
      </div>
    ))
  : 
  oneLineItems.slice(0, shownItems).map(item => (
    <div className='block'>
      {item.map(itemNew => 
      <>
        <div onClick={() => navigate(`items/${itemNew.id}`)} className='item'>
          <img src={`http://127.0.0.1:8000${displayImages.length && displayImages.filter(image => image.item === itemNew.id)[0].image}`}/>
          <div className='text-wrapper'>
            <div className='text'>
              <h2 className='col'>{itemNew.collection}</h2>
              <h2 className='name'>{itemNew.name}</h2>
            </div>
            <button onClick={(e) => {e.stopPropagation();setQuickShop(itemNew.id)}} className='quick-btn1 quick-btn'>QUICK SHOP</button>
          </div>
        </div>
      </>
      )}
    </div>
  ))

  return (
    <>
      <div ref={storeRef} className='store'>
          <div className='store-head'>
              <h2>{t("OUR STORE")}</h2>
          </div>
          <div className='items'>
            {threeItemsDisplay}
            <div className='more'>
              <button onClick={() => setShownItems(prev => prev + 3)}>MORE</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Store