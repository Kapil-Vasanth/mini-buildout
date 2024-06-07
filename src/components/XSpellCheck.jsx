import { useEffect, useState } from "react";
const customDictionary = {teh:'the',wrok:'work',fot:'for',exampl:'example'};


function XSpellCheck() {
    const [search,setSearch] = useState('')
    const [suggestion,setSuggestion] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
        
    }

    useEffect(() => {
        const parseSearchArray = search.split(" ")
        for(let i = 0; i < parseSearchArray.length; i++){
            let item = parseSearchArray[i].toLowerCase()
            if (Object.prototype.hasOwnProperty.call(customDictionary, item)) {
                setSuggestion(customDictionary[item]);
                break;
            } else {
                setSuggestion('')
            }
        }
    },[search])

    
    

  return (
   <div>
     <h2>Spell Check and Auto Correction</h2>
        <textarea name="" id="" cols="30" rows="10" value={search} placeholder="Enter text..." onChange={handleChange}>
            
        </textarea>
        {suggestion && <p>Did you mean: <strong>{suggestion}</strong>?</p>}
   </div>
  )
}

export default XSpellCheck