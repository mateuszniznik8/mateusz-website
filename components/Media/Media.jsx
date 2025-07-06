import React from 'react'
import Image from 'next/image'
import { mediaData } from './MediaData'

const Media = () => {
    return (
        <div id="media" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">{mediaData.mainData.title}</span>
                        <h1 className="display-3 fw-medium mb-0">{mediaData.mainData.title2} <span className="text-gradient">{mediaData.mainData.title2Span}</span></h1>
                        {mediaData.mainData.description && <p>{mediaData.mainData.description}</p>}
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4">
                            {mediaData.articles.map((item, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div className="fancy-box">
                                        {item.image && (
                                            <Image
                                                className="mb-2 border-radius"
                                                src={item.image}
                                                alt={item.title}
                                                width={300}
                                                height={200}
                                            />
                                        )}
                                        <h4 className="mb-1">
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                {item.title}
                                            </a>
                                        </h4>
                                        <p className="mb-2">{item.description}</p>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button button-sm button-arrow"
                                        >
                                            <i className="bi bi-arrow-right"></i>
                                            <span data-text="Read More">Read More</span>
                                        </a>
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
