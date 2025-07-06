import React from 'react'
import { mediaData } from './MediaData'

const Media = () => {
    return (
        <div id="media" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">{mediaData.mainData.title}</span>
                        <h1 className="display-3 fw-medium mb-0">{mediaData.mainData.title2}<span className="text-gradient">{mediaData.mainData.title2Span}</span></h1>
                        {mediaData.mainData.description && <p>{mediaData.mainData.description}</p>}
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4">
                            {mediaData.articles.map((item, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div className="fancy-box">
                                        <h4>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                {item.title}
                                            </a>
                                        </h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> {/* end row(inner) */}
                    </div>
                </div> {/* end row */}
            </div> {/* end container */}
        </div>
    )
}

export default Media
