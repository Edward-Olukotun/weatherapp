import axios from "axios";
import React, { useEffect, useState } from "react";

function Main() {
  const [container, setContainer] = useState([]);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b74a31a10298cad05dde2a264e4ab819`;
  const search = (e) => {
    axios.get(url).then((response) => {
      setContainer(response.data);
      console.log(container);
    });
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <div className="text-gray-200 font-semibold text-lg w-[90%] h-screen mx-auto bg-[url('../src/image/weatherbg.jpg')] bg-cover bg-no-repeat ">
        <div className="w-[90%] mx-auto">
          <div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Location"
              className="my-8 rounded-md text-black"
            />
            <button
              onClick={search}
              className="bg-white/25 w-8 rounded-md ml-2 hover:bg-white hover:text-black"
            >
              Go
            </button>
          </div>
          <div className="flex flex-col">
            <section className="font-bold text-3xl">{container.name}</section>
            <section className="text-5xl font-bold text-yellow-300">
              {container.main ? <p>{container.main.temp}°F</p> : null}
            </section>
          </div>
          <section className="my-4 text-4xl text-yellow-500/70">
            {container.weather ? (
              <p>{container.weather[0].description}</p>
            ) : null}
          </section>
          <div className="flex bg-white/25 w-fit mt-[70%] md:mt-[30%] md:w-[50%] justify-center rounded-md font-bold text-yellow-300">
            <section className="mx-2">
              <p className="font-semibold text-center py-3 text-2xl">
                {container.main ? <p>{container.main.feels_like}°F</p> : null}
              </p>
              <p className="my-2 text-center ">Feels like</p>
            </section>
            <section className="mx-2">
              <p className="font-semibold text-center py-3 text-2xl">
                {container.main ? <p>{container.main.humidity}%</p> : null}
              </p>
              <p className="my-2 text-center ">Humidty</p>
            </section>
            <section className="mx-2">
              <p className="font-semibold text-center py-3 text-2xl">
                {container.main ? <p>{container.wind.speed}MPH</p> : null}
              </p>
              <p className="my-2 text-center ">wind</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
