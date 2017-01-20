import fetch from 'isomorphic-fetch'

const baseUrl = 'https://api.flickr.com/services/rest/';
const apiKey = '40f9d15a08f7e832a7ad16a10a670e7c';

const API = {
    gallery:{
        async getImages(page = 1){
           const response = await fetch(`${baseUrl}`,{
               method:'post',
               headers: {
                   'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                   'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
               },
               body:`method=flickr.photos.search&api_key=40f9d15a08f7e832a7ad16a10a670e7c&text=Austria&format=json&nojsoncallback=1&per_page=11&page=${page}`
           });
           var data = await response.json();
            //{ id: 8, post_name: "Post 8", picture: "8", width: "100%"},
            //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
            data = data.photos.photo.map(function(photo){
                return {
                    id:photo.id,
                    post_name:photo.title,
                    picture:`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`
                }
            });
           return data;
        }
    }
};

export default API;