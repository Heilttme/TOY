import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import useWindowDimensions from "./useWindowDimensions"
import { motion } from 'framer-motion'

const Store = ({ setQuickShop, items, storeRef, displayImages }) => {
  const [oneLineItems, setOneLineItems] = useState([])
  const [twoLineItems, setTwoLineItems] = useState([])
  const [threeLineItems, setThreeLineItems] = useState([])
  const { height, width } = useWindowDimensions()
  const [shownItems, setShownItems] = useState(3)
  const navigate = useNavigate()
  const [mobile] = useState((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
  const [filter, setFilter] = useState(false)

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
    <div className='block block-3'>
      {item.map(itemNew => 
      <>
        <div onClick={() => navigate(`items/${itemNew.id}`)} className='item'>
          {
            itemNew.orderType === "preorder" && 
            <>
              <motion.div initial={{x: 0}} animate={{x: -2000}} transition={{duration: 50, repeat: Infinity, repeatType: "reverse", ease: "linear"}} className='preorder'>
              {[...Array(100)].map(() => <p>PREORDER</p>)}
              </motion.div>
              <div className='blocker blocker-1'/>
              <div className='blocker blocker-2'/>
            </>
          }
          <img src={`http://127.0.0.1:8000${displayImages.length && displayImages.filter(image => image.item === itemNew.id)[0].image}`}/>
          <div className='text-wrapper'>
            <div className='text'>
              <h2 className='col'>{itemNew.collection}</h2>
              <h2 className='name'>{itemNew.name}</h2>
            </div>
            {
              !mobile && 
              <button onClick={(e) => {e.stopPropagation();setQuickShop(itemNew.id)}} className='quick-btn1 quick-btn'>QUICK SHOP</button>
            }
          </div>
        </div>
      </>
      )}
    </div>
  )) 
  : width > 600 ?
    twoLineItems.slice(0, shownItems).map(item => (
      <div className='block block-2'>
        {item.map(itemNew => 
        <>
          <div onClick={() => navigate(`items/${itemNew.id}`)} className='item'>
            {
              itemNew.orderType === "preorder" && 
              <>
                <motion.div initial={{x: 0}} animate={{x: -2000}} transition={{duration: 50, repeat: Infinity, repeatType: "reverse", ease: "linear"}} className='preorder'>
                {[...Array(100)].map(() => <p>PREORDER</p>)}
                </motion.div>
                <div className='blocker blocker-1'/>
                <div className='blocker blocker-2'/>
              </>
            }
            <img src={`http://127.0.0.1:8000${displayImages.length && displayImages.filter(image => image.item === itemNew.id)[0].image}`}/>
            <div className='text-wrapper'>
              <div className='text'>
                <h2 className='col'>{itemNew.collection}</h2>
                <h2 className='name'>{itemNew.name}</h2>
              </div>
              {
                !mobile && 
                <button onClick={(e) => {e.stopPropagation();setQuickShop(itemNew.id)}} className='quick-btn1 quick-btn'>QUICK SHOP</button>
              }
            </div>
          </div>
        </>
        )}
      </div>
    ))
  : 
  oneLineItems.slice(0, shownItems).map(item => (
    <div className='block block-1'>
      {item.map(itemNew => 
      <>
        <div onClick={() => navigate(`items/${itemNew.id}`)} className='item'>
          {
            itemNew.orderType === "preorder" && 
            <>
              <motion.div initial={{x: 0}} animate={{x: -1000}} transition={{duration: 100, repeatType: "reverse"}} className='preorder'>
              {[...Array(100)].map(() => <p>PREORDER</p>)}
              </motion.div>
              <div className='blocker blocker-1'/>
              <div className='blocker blocker-2'/>
            </>
          }
          <img src={`http://127.0.0.1:8000${displayImages.length && displayImages.filter(image => image.item === itemNew.id)[0].image}`}/>
          <div className='text-wrapper'>
            <div className='text'>
              <h2 className='col'>{itemNew.collection}</h2>
              <h2 className='name'>{itemNew.name}</h2>
            </div>
            {
              !mobile && 
              <button onClick={(e) => {e.stopPropagation();setQuickShop(itemNew.id)}} className='quick-btn1 quick-btn'>QUICK SHOP</button>
            }
          </div>
        </div>
      </>
      )}
    </div>
  ))

  const [stockFilter, setStockFilter] = useState(false)
  const [typeFilter, setTypeFilter] = useState(false)
  const [vendorFilter, setVendorFilter] = useState(false)

  return (
    <>
      <div ref={storeRef} className='store'>
          <div className='store-head'>
            <h2>{t("OUR STORE")}</h2>
            <svg onClick={() => setFilter(prev => !prev)} fill='currentColor' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.344 17.778c0-.414-.336-.75-.75-.75h-5.16c-.414 0-.75.336-.75.75s.336.75.75.75h5.16c.414 0 .75-.336.75-.75zm2.206-4c0-.414-.336-.75-.75-.75h-9.596c-.414 0-.75.336-.75.75s.336.75.75.75h9.596c.414 0 .75-.336.75-.75zm2.45-4c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75zm2-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
          </div>

          <motion.div initial={{y: -60}} animate={{y: filter ? 0 : -60}} transition={{type: "keyframes", ease: "linear", duration: .2}} className='filter-wrapper'>
            <motion.div className='filter'>
              <svg className='bin' fill='currentColor' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
              <div onClick={() => {setStockFilter(prev => !prev);setTypeFilter(false);setVendorFilter(false)}} className='filter-item'>
                <p>{t("Stock")}</p>
                <svg className={`${stockFilter ? "rotated" : ""}`} fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                {
                  stockFilter &&
                  <div onClick={(e) => e.stopPropagation()} className='pop'>
                    <div className="checkbox">
                      <input
                        className="checkbox-pop"
                        type="checkbox" 
                        id="inStock"
                      />
                      <label for="inStock"><span></span>In stock</label>
                    </div>
                    <div className="checkbox">
                      <input 
                        className="checkbox-pop"
                        type="checkbox" 
                        id="outOfStock"
                      />
                      <label for="outOfStock"><span></span>Out of stock</label>
                    </div>
                  </div>
                }
              </div>
              <div onClick={() => {setTypeFilter(prev => !prev);setStockFilter(false);setVendorFilter(false)}} className='filter-item'>
                <p>{t("Type")}</p>
                <svg className={`${typeFilter ? "rotated" : ""}`} fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                {
                  typeFilter &&
                  <div onClick={(e) => e.stopPropagation()} className='pop'>
                    <div className="checkbox">
                      <input className="checkbox-pop" type="checkbox" id="inStock"/>
                      <label for="inStock"><span></span>In stock</label>
                    </div>
                    <div className="checkbox">
                      <input className="checkbox-pop" type="checkbox" id="outOfStock"/>
                      <label for="outOfStock"><span></span>Out of stock</label>
                    </div>
                  </div>
                }
              </div>
              <div onClick={() => {setVendorFilter(prev => !prev);setStockFilter(false);setTypeFilter(false)}} className='filter-item'>
                <p>{t("Vendor")}</p>
                <svg className={`${vendorFilter ? "rotated" : ""}`} fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                {
                  vendorFilter &&
                  <div onClick={(e) => e.stopPropagation()} className='pop'>
                    <div className="checkbox">
                      <input className="checkbox-pop" type="checkbox" id="inStock"/>
                      <label for="inStock"><span></span>In stock</label>
                    </div>
                    <div className="checkbox">
                      <input className="checkbox-pop" type="checkbox" id="outOfStock"/>
                      <label for="outOfStock"><span></span>Out of stock</label>
                    </div>
                  </div>
                }
              </div>
            </motion.div>
          </motion.div>
          <motion.div animate={{marginTop: filter ? "60px": "0"}} transition={{type: "keyframes", ease: "linear", duration: .2}} className='items'>
            {threeItemsDisplay}
              {
                shownItems < (width > 1000 ? items.length / 3 : width > 600 ? items.length / 2 : items.length) &&
                <div className='more'>
                  <button onClick={() => setShownItems(prev => prev + 3)}>MORE</button>
                </div>
              }
          </motion.div>
      </div>
    </>
  )
}

export default Store