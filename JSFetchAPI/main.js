// Async/Await
function walkDog(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const dogWalked=false;
            if(dogWalked){
                resolve("You walk the dog");
            }
        else {
            reject("You DIDN'T walk the dog");
        }

        }, 1500 );
    } );
}
function cleanKitchen(){

}
function takeOutTrash() {

}
async function doChores(){
    const walkDogResult=await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult=await cleanKitchen();
    console.log
    (cleanKitchenResult);

    const takeOutTrashResult=await takeOutTrash();
    console.log(takeOutTrashResult);

}

doChores()