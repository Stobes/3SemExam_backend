import { useState } from "react";
import userFacade from "../Facades/UserFacade";

const CreateBooking = () => {
    const initialValue = {
        date: "",
        time: "",
        duration: "",
        washerList: []
      };

      const [addBooking, setBooking] = useState(initialValue);

      const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setBooking({ ...addBooking, [name]: value });
        console.log(addBooking.date)
        console.log(addBooking.pLanguage)
        console.log(addBooking.yearsOfExperience)
        console.log(addBooking.pricePrHour)
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        userFacade.createBooking(addBooking);
      }

      return (
        <>
            <div className="bookingInfo">
              <form onSubmit={handleSubmit}>
                <p>Date:</p>
                <input
                  onChange={handleChange}
                  name="date"
                  value={addBooking.date}
                  placeholder="date"
                ></input>
    
                <br />
                <p>Time:</p>
                <input
                  onChange={handleChange}
                  name="time"
                  value={addBooking.time}
                  placeholder="time"
                ></input>
    
                <br />
                <p>Duration:</p>
                <input
                  onChange={handleChange}
                  name="duration"
                  value={addBooking.duration}
                  placeholder="duration"
                ></input>
    
                <br />
                <button type="submit">Add Booking</button>
              </form>
            </div>
        </>
      );
}
export default CreateBooking;