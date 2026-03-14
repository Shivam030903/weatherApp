import React, { useEffect } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import './App.css'
import { useWeather } from './Context/Weather'



const App = () => {
  

  const weather = useWeather()
  console.log(weather);
  useEffect(()=>{
    // Get Currrent location here
    weather.fetchCurrentUserLocationData()
  },[])
  
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Submit" />
      <Card/>
      <Button value="Refresh"/>
    </div>
  )
}

export default App