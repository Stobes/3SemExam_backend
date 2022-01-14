import { useState } from "react";
import userFacade from "../Facades/UserFacade";

const CreateWasher = () => {
    const initialValue = {
        name: "",
        pLanguage: "",
        yearsOfExperience: "",
        pricePrHour: ""
      };

      const [addWasher, setWasher] = useState(initialValue);

      const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setWasher({ ...addWasher, [name]: value });
        console.log(addWasher.name)
        console.log(addWasher.pLanguage)
        console.log(addWasher.yearsOfExperience)
        console.log(addWasher.pricePrHour)
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        userFacade.createWasher(addWasher);
      }

      return (
        <>
            <div className="washerInfo">
              <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <input
                  onChange={handleChange}
                  name="name"
                  value={addWasher.name}
                  placeholder="name"
                ></input>
    
                <br />
                <p>Language:</p>
                <input
                  onChange={handleChange}
                  name="pLanguage"
                  value={addWasher.pLanguage}
                  placeholder="pLanguage"
                ></input>
    
                <br />
                <p>Years of experience:</p>
                <input
                  onChange={handleChange}
                  name="yearsOfExperience"
                  value={addWasher.yearsOfExperience}
                  placeholder="yearsOfExperience"
                ></input>
    
                <br />
                <p>Price Pr. Hour:</p>
                <input
                  onChange={handleChange}
                  name="pricePrHour"
                  value={addWasher.pricePrHour}
                  placeholder="pricePrHour"
                ></input>
                <button type="submit">Add Washing Assistant</button>
              </form>
            </div>
        </>
      );
}
export default CreateWasher;