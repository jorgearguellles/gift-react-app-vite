export const getGifs = async ( category ) => {

    const API_KEY = 'vcNIvxQefbbLciVjBeRQ4ZWOj27DIyQc';
    const LIMIT = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}s&limit=${LIMIT}`;
  
    const response = await fetch(url);
    const { data } = await response.json();
  
    const gifs = data.map( image => ({
      id: image.id,
      title: image.title,
      urlImg: image.images.downsized_medium.url,
    }))
    console.log(gifs)
    return gifs;
};