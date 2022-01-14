import { useEffect } from "react";
import { useState } from "react"
import userFacade from "../Facades/UserFacade";



const GetAllBookings = () => {
    const [userName] = useState(userFacade.getUsername)
    const [bookings, setBookings] = useState([]);

    const test = (data) => {
        setBookings(data.all)
    }

    useEffect(() => {
        userFacade.getAllBookings(userName, test)
        console.log(bookings)
    }, [])

    return (
        <>
        <table>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Washing Assistants</th>
            </tr>

            {bookings.map((booking) => (
                <tr>
                    <td>{booking.id}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.duration}</td>
                    {booking.washerList.map((washer) => (
                        <>
                        <td>{washer.name}</td>
                        <td>{washer.pLanguage}</td>
                        <td>{washer.yearsOfExperience}</td>
                        <td>{washer.pricePrHour}</td>
                        </>
                    ))}
                </tr>
            ))}
        </table>
        </>
    )
}
export default GetAllBookings;