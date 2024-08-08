async function getImages(formdata){
    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

    const main=fetch('https://anemo.productsearch.app/search?platform=web&searchInStores=&model=general&offset=0&limit=50&ekey=U2FsdGVkX1%2BXgJs9r3S8qfX%2B1jpaaA%2B922EuaYH2W1bYQooM4xoa7IvYrnWq0lHhw9GTAnzqHmMI1K0lcw7TfImf2UCZhiYJDaIN9Oee56c%3D',requestOptions);
    const response=await main;
    const data=await response.json();
    
    console.log(data);
    return data;
}

module.exports = getImages;