
import React, { useEffect, useRef, useState } from "react";

import "./weather.css";
import searchbar from "../assets/search-four.png";
import sun from "../assets/sun-image.png";
import humidity  from "../assets/humidity-five.png"
import wind from"../assets/wind.png";
import snow from "../assets/snow-image.png";
import rain from "../assets/rain-image.png";
import cloudtwo from "../assets/cloud-two.png"
import drizzzle from "../assets/drizzzle-image.jpg"
import axios from "axios";






const Weatherapplication =()=>{
const [WeatherData,setweatherData]=useState(false);
const inputRef =useRef();




const totalicons={
    "01d":sun,
    "01n":sun,
    "02d":cloudtwo,
    "02n":cloudtwo,
    "03d":cloudtwo,
    "03n":cloudtwo,
    "04d":drizzzle,
    "04n":drizzzle,
    "09d":rain,
    "09n":rain,
    "10d":rain,
    "10n":rain,
    "13d":snow,
    "13n":snow
 }




    useEffect(()=>{
        search("japan");
    },["london"])

const search = async (city)=>{
    if(city=== ""){
        alert("Enter City Name")
    }
    try{
        //  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c8f21f86ece4d2370667123432f0e078`;
        // const response=await fetch(url);
        // const data=await response.json();
        
        
        
        const {data}=  await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c8f21f86ece4d2370667123432f0e078`)   
        //   if(city!==search){
        //     alert("city not found");
        //     return;
        //   }
        console.log(data ,"fetching");

      const icon=totalicons[data.weather[0].icon] ;
    setweatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:icon
        
    })
        }catch (error){
            setweatherData(false);
            console.error("error in data")
        }
}



    return(
        <div><center><h1 cla>Weather-Application</h1></center>
        <div className="weather">
    
            <div className="search-icon">
         <input  ref={inputRef} type="text" placeholder="search" />
         <img src={searchbar} alt=""   onClick={()=>search(inputRef.current.value)}/>
         </div>

         {WeatherData?<>
            <img src={WeatherData.icon} alt=""  className="weather-images"/>
         <p className="temperature">{WeatherData.temperature}°c</p>
         <p className="city">{WeatherData.location}</p>
         <div className="w-data">
           <div className="col-left">
            <img src={humidity} />
            <div>
                <p>{WeatherData.humidity}%</p>
                <span>humidity</span>
            </div>
           </div>

           <div className="col-left">
            <img src={wind}  />
            <div>
                <p>{WeatherData.windSpeed} km/h</p>
                <span>wind speed</span>
            </div>
           </div>
         </div>
         
         </>:<></>}
         
        </div>
        </div>
    )
}
export default Weatherapplication;







// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./weather.css";
// import searchbar from "../assets/search-four.png";
// import sun from "../assets/sun-image.png";
// import humidity from "../assets/himidity-five.png";
// import wind from "../assets/wind.png";
// import snow from "../assets/snow-image.png";
// import rain from "../assets/rain-image.png";
// import cloudtwo from "../assets/cloud-two.png";
// import drizzle from "../assets/drizzzle-image.jpg"; // Fixed typo

// const WeatherApplication = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [city, setCity] = useState("london");
//     const [error, setError] = useState(null);

//     const totalIcons = {
//         "01d": sun,
//         "01n": sun,
//         "02d": cloudtwo,
//         "02n": cloudtwo,
//         "03d": cloudtwo,
//         "03n": cloudtwo,
//         "04d": drizzle, // Fixed typo
//         "04n": drizzle, // Fixed typo
//         "09d": rain,
//         "09n": rain,
//         "10d": rain,
//         "10n": rain,
//         "13d": snow,
//         "13n": snow
//     };

//     useEffect(() => {
//         searchFetchApi(city);
//     }, [city]);

//     const searchFetchApi = async (city) => {
//         try {
//             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8f21f86ece4d2370667123432f0e078&units=metric`);
//             const data = response.data;
//             console.log("Weather data:", data); // Log data to debug

//             const icon = totalIcons[data.weather[0].icon] || sun; // Default to sun if icon not found
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windSpeed: data.wind.speed,
//                 temperature: Math.floor(data.main.temp),
//                 location: data.name,
//                 icon: icon
//             });
//             setError(null); // Clear previous errors if any
//         } catch (error) {
//             console.error("API call error:", error); // Log error to debug
//             setError("Failed to fetch weather data. Please try again.");
//             setWeatherData(null); // Clear previous weather data
//         }
//     };

//     const handleSearch = () => {
//         if (city.trim() !== "") {
//             searchFetchApi(city);
//         }
//     };

//     return (
//         <div className="weather">
//             <div className="search-icon">
//                 <input
//                     type="text"
//                     placeholder="Search city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//                 />
//                 <img src={searchbar} alt="Search" onClick={handleSearch} />
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             {weatherData ? (
//                 <>
//                     <img src={weatherData.icon} alt="Weather" className="weather-images" />
//                     <p className="temperature">{weatherData.temperature}°C</p>
//                     <p className="city">{weatherData.location}</p>
//                     <div className="w-data">
//                         <div className="col-left">
//                             <img src={humidity} alt="Humidity" />
//                             <div>
//                                 <p>{weatherData.humidity}%</p>
//                                 <span>Humidity</span>
//                             </div>
//                         </div>

//                         <div className="col-left">
//                             <img src={wind} alt="Wind Speed" />
//                             <div>
//                                 <p>{weatherData.windSpeed} km/h</p>
//                                 <span>Wind Speed</span>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default WeatherApplication;
