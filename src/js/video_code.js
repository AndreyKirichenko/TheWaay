const REGEXPS = {
  VIMEO: /vimeo/,
  YOUTUBE: /youtube/,
};

function videoCode(url, width, height) {
  let hosting = getVideoHostingFromUrl(url);
  let html = '';
  switch (hosting) {
    case 'VIMEO':
      html = createVimeo(url, width, height);
      break;

    case 'YOUTUBE':
      html = createYoutube(url, width, height);
      break;

    default:
      html = createUnknown();
  }
  return html;
}

function getVideoHostingFromUrl(url) {
  return Object.keys(REGEXPS).find(function(key){
    return REGEXPS[key].test(url);
  });
}

function createVimeo(url, width, height) {
  let id = url.split('/').pop();

  return `
    <iframe src="https://player.vimeo.com/video/${id}?autoplay=1" 
            width="${width}" 
            height="${height}" 
            frameborder="0" 
            webkitallowfullscreen  
            mozallowfullscreen 
            allowfullscreen 
    >
            
    </iframe>`;
}

function createYoutube(url, width, height) {
  let id = url.split('watch?v=').pop();

  return `
    <iframe width="${width}"
            height="${height}"
            src="https://www.youtube.com/embed/${id}"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
    >
    </iframe>`;
}

function createUnknown() {
  return '<p>Видео не работает</p>'
}

export default videoCode;
