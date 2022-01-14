import { useEffect } from "react";
import { useState } from "react";
import userFacade from "../Facades/UserFacade";

const GetAllWashers = () => {
    const [washers, setWashers] = useState([]);

    const test = (data) => {
        setWashers(data.all)
    }

    useEffect(() => {
        userFacade.getAllWashers(test)
        console.log(washers)
    }, [])

    return (
        <>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Language</th>
                <th>Years of experience</th>
                <th>price pr. hour</th>
            </tr>

            {washers.map((washer) => (
            <tr>
                <td>{washer.id}</td>
                <td>{washer.name}</td>
                <td>{washer.pLanguage}</td>
                <td>{washer.yearsOfExperience}</td>
                <td>{washer.pricePrHour}</td>
            </tr>
            ))}
        </table>
        </>
    )
}
export default GetAllWashers;