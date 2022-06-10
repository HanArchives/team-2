function enableMap()
{
    if (document.readyState == "complete")
    {
        console.log("Switching on map on readystate complete");
        document.querySelector('#dropdown').classList.add('hidden');
        document.querySelector('#map').classList.remove('hidden');
    }
    else
    {
        console.log("waiting for document to be ready before switching on the map");
    }
}
// remove event listeners on each reload to prevent multi-trigger behavior
document.removeEventListener("readystatechange", enableMap);
document.addEventListener("readystatechange", enableMap);