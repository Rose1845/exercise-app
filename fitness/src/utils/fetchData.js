export const exerciseOptions = { 
    
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
  
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1238384b68msh4a2b8cb1bee5d3bp1b4be9jsnd869bc8dafd1',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data; 
};
