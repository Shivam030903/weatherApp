const baseURL = "http://api.weatherapi.com/v1/current.json?key=0e255978d1824106bcd170235261403"

export const getWeatherDataForCity = async (city) =>{

    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()
    

    }


export const getWeatherDataForLocation = async (lat,lon) =>{

    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json()
    

    }

