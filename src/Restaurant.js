


let Restaurant = (props) => {

    let arrOfHours = [];
    let hoursObj = props.resData.hours
    // One way to build an arr, BUT look a way to loop through a bunch of object to get an array.
    for(let day in hoursObj){
        let dayObj = hoursObj[day];
        dayObj.name = day;
        arrOfHours.push(dayObj)
    }

        console.log(arrOfHours)
    return (
        <div>
            <h1>{props.resData.name}</h1>
            <h2>Type: {props.resData.type}</h2>
            <img src={props.resData.logo} alt="" />
            {
                arrOfHours.map(day => {
                    return (
                        <>
                            <p>{day.name}</p>
                            <p>Open From: {day.opens_at[0] === "8" ? "Time is an illusion" : day.opens_at} to {day.closes_at}</p>
                        </>
                    )
                })
            }
       </div>
    )
}

export default Restaurant