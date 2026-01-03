export const getRestaurants =()=>{
    return JSON.parse(localStorage.getItem("testData")) || [];
};

export const saveRestaurants = (data) =>{
    localStorage.setItem("restData", JSON.stringify(data));
};