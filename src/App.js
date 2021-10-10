import Introduccion from './components/Introducción/Introduccion';
import AboutAs from './components/AboutAs/AboutAs';
import Arrangement from './components/Arrangement/Arrangement';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ApiRepository from './repositories/ApiRepository';
import { useEffect, useState } from 'react'
import './App.scss'

function App() {
  const [getStates, setStates] = useState([]);
  const [responseApi, setResponseAPi] = useState({})
  const [citys, setCitys] = useState([]);

  const filterStates = (data) => {
    let currentStates = [];
    data.data.records.map((city) => {
      const currentCity = city.fields.state;
      if (!currentStates.includes(currentCity)) {
        currentStates = [...currentStates, currentCity]
      }
      return currentCity
    }, [])

    return currentStates;
  }

  const filterCitysForState = (e) => {
    const filterCitys = responseApi.records.filter(city => city.fields.state === e.target.value);
    const getNameCitys = filterCitys.map(city => city.fields.name);
    setCitys(getNameCitys);

    return getNameCitys
  }

  useEffect(() => {
    const requestStates = async () => {
      const request = await ApiRepository.get();
      const data = await request;
      const states = filterStates(data);
      setStates(states);
      setResponseAPi(data.data);
    }
    requestStates();
  },[])

  return (
    <div className="App">
      <Introduccion />
      <AboutAs />
      <Arrangement />
      <Contact
        states={getStates}
        citys={citys}
        handleChangeSelect={filterCitysForState}
      />
      <Footer />
    </div>
  );
}

export default App;
