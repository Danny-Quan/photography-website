import React from 'react'
import { imageData } from '../data/images'
import ModalImage from "react-modal-image";


export default function GalleryPage() {
  return (
    <section className='mt-10 pb-10'>
        <div className="container">
          <h2 className='font-bold text-black xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-center uppercase'>our Gallery</h2>
        <div className="gallery">
          {imageData.map((image) => (
            <div className="pics" key={image.id}>
              <ModalImage
                small={image.source}
                large={image.source}
                alt="work"
              />
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}
