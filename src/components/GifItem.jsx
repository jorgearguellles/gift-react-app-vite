import React from 'react'

export const GifItem = (props) => {
    const { title, urlImg } = props;

    return (
    <div className='card'>
        <img src={urlImg} alt={title} />
        <p>{title}</p>
    </div>
    )
}
