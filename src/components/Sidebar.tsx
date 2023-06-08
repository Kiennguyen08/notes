import React, { useState, useRef } from 'react'
import ImageModal from './ImageModal'

interface SidebarProps {
  pages: any
}

const defaultUserImg = 'https://bit.ly/3rDDSOw'

const Sidebar: React.FC<SidebarProps> = ({ pages }) => {
  const [userName, setUserName] = useState('')
  const [userImg, setUserImg] = useState(defaultUserImg)
  const [clicked, setClicked] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const popUp = useRef<HTMLInputElement>(null)
  function showInfo (): void {
    // const popup = document.querySelector(".user-popup");
    setClicked((prev) => !prev)
    if (popUp.current != null) {
      if (clicked) {
        popUp.current.style.transform = 'scale(1)'
        popUp.current.style.opacity = '1'
      } else {
        popUp.current.style.transform = 'scale(0)'
        popUp.current.style.opacity = '0'
      }
    }
  }

  function changeImg (e: any): void {
    if (e.target.value.length > 0) {
      setUserImg(e.target.value)
    }
  }

  if (userImg === '') {
    setUserImg(defaultUserImg)
  }

  return (
    <>
      <div className="side-navigation-bar">
        <div className="side-bar-user-info-outer">
          <div onClick={showInfo} className="info-hitbox" />
          <div className="side-bar-user-info">
            <div className="user-img">
              <img
                onClick={() => { setImageModalOpen((prev) => !prev) }}
                src={userImg}
                alt="img"
              />
            </div>
            <div className="user-name">
              <input
                onChange={(e) => { setUserName(e.target.value) }}
                className="sidebar-name-input"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
              {userName === '' ? (userName.slice(-1) === 's' ? "'" : "'s") : ''}
            </div>
          </div>

          <ImageModal
            open={imageModalOpen}
            close={() => { setImageModalOpen(false) }}
          >
            <input
              className="image-modal-input"
              type="text"
              name="image"
              id="image"
              placeholder="Enter image url"
              onChange={changeImg}
            />
          </ImageModal>

          <div ref={popUp} className="user-popup">
            <div className="user-popup-inner">
              <div className="user-popup-flex">
                <div className="user-popup-main">
                  <div className="user-popup-info">
                    <div className="user-popup-icon">
                      <img
                        src={userImg}
                        alt="user-img"
                        width="32px"
                        height="32px"
                      />
                    </div>
                    <div className="user-name-plan">
                      <span className="popup-name-txt">{userName}</span>
                      <span className="popup-plan-txt">Personal Plan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
          </div>
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
          </button>
        </form>

        </div>
        <div className="scrollbar">
          <div>
            <div className="scrollbar-title">
              <div className="scrollbar-title-inner">
                <div className="scrollbar-title-inner-2">
                  <div className="scrollbar-title-inner-3">
                    <span>Pages</span>
                  </div>
                </div>
              </div>
            </div>
            {pages.map((page: any) => {
              return (
                <div key={page.name} className="page-button-outer">
                  <a href="#">
                    <div className="page-button">
                      <div className="page-button-inner">
                        <div className="triangle-container">
                          <div className="triangle-container-inner">
                            <span>
                              <svg viewBox="0 0 100 100" className="triangle">
                                <polygon points="5.9,88.2 50,11.8 94.1,88.2"></polygon>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <span>
                          <span className="scrollbar-page-icon">
                            {page.icon}
                          </span>
                          <span className="scrollbar-page-txt">
                            {page.name === '' ? page.name : 'No name'}
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
