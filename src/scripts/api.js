export const newList = async () => {  
    const list = await fetch  ("https://openmusic-fake-api.onrender.com/api/musics");
    const jsonList = await list.json();
    const seque = jsonList;
    return seque;
}