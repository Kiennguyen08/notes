import React, { useEffect, useState, useRef } from 'react'

interface PageProps {
  pageName: string
  icon: any
}

const PageContent: React.FC<PageProps> = ({ pageName, icon }) => {
  const [showTextArea, setShowTextArea] = useState(false)

  function addTextArea (): void {
    setShowTextArea(!showTextArea)
  }

  return (
      <div className="page-content">
        <div className="page-content-header">
          <div className="page-content-header-inner">
            <div className="page-content-header-title-container">
              <div className="outermost-icon-container">
                <div className="icon-div-1">
                  <div className="icon-div-2">
                    <div className="icon-div-3">{icon}</div>
                  </div>
                </div>
              </div>

              <div className="page-title">
                <div className="title-dropdown-div">
                  <div className="dropdown">
                    <div className="dropdown_parent">
                      <span id="-1" className="add-element">
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          onClick={addTextArea}
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                      </span>
                    </div>

                  </div>
                  <span className="big-title">
                    {pageName ?? (
                      <p style={{ fontSize: 16, fontWeight: 500 }}>
                        Enter page name at top!
                      </p>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content-writings">
          <div className="page-writing-outer">
            <div className="page-writing-inner">
              <div className="page-writing-main-words">
                <div className="appended-fields"></div>
                  {showTextArea && (
                    <div>
                      <textarea id="message"
                        rows={4}
                        className="block p-2.5
                                  w-full text-sm
                                  text-gray-900
                                  bg-gray-50 rounded-lg border
                                  border-gray-300
                                  focus:ring-blue-500
                                  focus:border-blue-500
                                  dark:bg-gray-700
                                  dark:border-gray-600
                                  dark:placeholder-gray-400
                                  dark:text-white
                                  dark:focus:ring-blue-500
                                  dark:focus:border-blue-500"
                                  placeholder="Write your thoughts here...">
                      </textarea>

                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PageContent
