const urls = [
  "https://fake-json-api.mock.beeceptor.com/users",
  "https://fake-json-api.mock.beeceptor.com/companies",
  "https://dummy-json.mock.beeceptor.com/todos",
  "https://dummy-json.mock.beeceptor.com/posts",
  "https://dummy-json.mock.beeceptor.com/posts",
  "https://asdajkbjkfjhagsvjkcvhisdj-45r34u0jsdn.com",
];

//  , "https://asdajkbjkfjhagsvjkcvhisdj-45r34u0jsdn.com"

// ------------------------------------------------------------------Fetching data----------------------------------------------------------------------------

//  function getDataSync(url){
//     fetch(url)
//     .then(data=> data.json())
//     .then(data=> console.log(data))

//     // .then(data=> console.log(data));

// }

// urls.map(async url=> getDataSync(url));

// -------------------------------------------------------------------Fetch data parallely--------------------------------------------------------------------

const fetchAPI = (urls) => {
  return Promise.all(
    urls.map(async (url) => {
      try {
        const result = await fetch(url);
        if (!result) throw new Error("Data not Fetched");
        const data = await result.json();
        return Promise.resolve(data);
      } catch (err) {
        return Promise.reject("Data Not fetched");
      }
    })
  );
};

async function getData() {
  try {
    const data = await fetchAPI(urls);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();

// ---------------------------------------------------------------------Promise.allSettled----------------------------------------------------

// const fetchAPIall = (urls) => {
//     return Promise.allSettled(urls.map(async url =>
//         await new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(response => {
//                     if (!response) {
//                         reject("Unable to fetch data");
//                     } else {
//                         return response.json().then(data => resolve(data));
//                     }
//                 })
//                 .catch(err => reject("Data not fetched: " + err));
//         })
//     ));
// }

// function getData(){
//     fetchAPIall(urls).then(data=> {
//         console.log(data)
//         // data.forEach(data=>{
//         //     if(data.status=='fulfilled'){
//         //         data.value.map(data=> console.log(data))
//         //     }
//         //     else{
//         //         console.log("Data Not fetched")
//         //     }
//         // })
//     })
// }
// getData()

// ################################################################# Using async await ###########################################

// const fetchAPI=(urls)=>{
//     return Promise.allSettled(urls.map(async url=>
//             {
//             try{
//                 const result=await fetch(url);
//                 if(!result) throw new Error("data not found")
//                 const data=await result.json();
//                 return Promise.resolve(data)
//             }
//             catch(err){
//                 // console.log(err)
//                 return Promise.reject("Unable to fetch data")
//             }

//         }
//     ))
// }

// async function getData() {
//     try{
//     const data=await fetchAPI(urls);
//     data.forEach(data=>{
//         if(data.status=='fulfilled'){
//             data.value.forEach(data=> console.log(data))
//         }
//     })
//     }catch(err){
//         console.log(err)
//     }

// }
// getData()

// --------------------------------------------------------------------------Promise.any--------------------------------------------------------------------

// const fetchAPI = (urls) => {
//     return Promise.any(urls.map(async url => {
//         return await new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json().then(data => resolve(data));
//                     } else {
//                         reject("Unable to fetch data");
//                     }
//                 })
//                 .catch(err => reject("Data Not fetched: " + err));
//         });
//     }));
// }

// function getdata() {
//     fetchAPI(urls)
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// }

// getdata();

// ###########################################################################using async await ##################################################################

// const fetchAPI=async(urls)=>{
//     return await Promise.any(urls.map(async url=>
//             {
//             try{
//                 const result =await fetch(url)
//                 if(!result) throw new Error ("Data not found")
//                 const data=await result.json()
//                 return await Promise.resolve(data)
//             }
//             catch(err){
//                 return await Promise.reject("Unable to fetch data")
//             }
//         }
//     ))

// }
// async function getData() {
//     try{const data=await fetchAPI(urls)
//     console.log(data)}
//     catch(err){
//         console.log(err)
//     }
// }

// getData()

// ---------------------------------------------------------------------------Promise.race-------------------------------------------------------------------

// const fetchAPIs=(urls)=>{
//     return Promise.race(urls.map(async url=>{
//         return await new Promise((resolve,reject)=>{
//             fetch(url)
//             .then(data=>{
//                 if(data.ok){

//                     return data.json().then(data=> resolve(data))
//                 }
//                 else{
//                     reject(("Unable to fetch data"))
//                 }
//             })
//             .catch(err=> reject("Data not Fetched"+err))
//         })
//     }))
// }

// function getdata() {
//     fetchAPIs(urls)
//         .then(data=> console.log(data))
//         .catch(error => console.log(error));
// }

// getdata();

// ################################################################## using async await #####################################################################

// const fetchAPI=(urls)=>{
//     return Promise.race(urls.map(async url=>

//             {
//             try{
//                 const result= await fetch(url)
//                 if(!result) throw new Error("data not fetched")
//                 const data=await result.json()
//                 return Promise.resolve(data)
//             }
//             catch(err){
//                 return Promise.reject("Unable to fetch data")
//             }
//         }
//     ))
// }

// async function getData(){
//     try{
//         const data=await fetchAPI(urls);
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// getData()
