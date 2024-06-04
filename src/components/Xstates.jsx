import { useEffect,useState } from 'react';

function Xstates() {
  const [formData,setFormData] = useState({
    country:'',
    state:'',
    city:''
  })
  const [countries,setCountries] = useState([]) 
  const [cities,setCities] = useState([]) 
  const [states,setStates] = useState([]) 
  

  useEffect(() => {
    fetch('https://crio-location-selector.onrender.com/countries')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  },[])
  
  useEffect(() => {
    fetch(`https://crio-location-selector.onrender.com/country=${formData.country}/states`)
    .then(res => res.json())
    .then(data => setStates(data))
    .catch(err => console.log(err))
  },[formData.country])

  useEffect(() => {
    fetch(`https://crio-location-selector.onrender.com/country=${formData.country}/state=${formData.state}/cities`)
    .then(res => res.json())
    .then(data => setCities(data))
    .catch(err => console.log(err))
  },[formData.state])

  const handleChange = (e) => {
    setFormData(prev => ({...prev,[e.target.name]:e.target.value}))
    if(e.target.name == "country"){
      setCities([]);
      setFormData(prev => ({...prev,city:''}))
    } 
    if(e.target.name == "state"){
      setFormData(prev => ({...prev,city:''}))
    } 
  }
  
  return (
    <>
      <h1>Select Location</h1>

      {/* country */}
      <select name="country" id="country" onChange={handleChange}>
        <option value="">Select Country</option>
        {countries && countries.map(country => {
          return <option key={country} value={country}>{country}</option>
        })}
      </select>

      {/* state */}
      <select name="state" id="state" onChange={handleChange}>
        <option value="">Select State</option>
        {states && states.map(state => {
          return <option key={state} value={state}>{state}</option>
        })}
      </select>

      {/* city */}
      <select name="city" id="city" onChange={handleChange}>
        <option value="">Select City</option>
        {cities && cities.map(city => {
          return <option key={city} value={city}>{city}</option>
        })}
      </select>
      {formData.country && formData.state && formData.city && <p>You Selected <strong>{formData.city},</strong> {formData.state}, {formData.country}</p>}
    </>
  )
}

export default Xstates