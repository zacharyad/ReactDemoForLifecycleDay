// functional comp

const Rezy = (props) => {


// props data from api call

console.log() // {rezyData: ..data, coolGuy: "Leland"}

let arrOfHours = [];
    let hoursObj = props.rezyData.hours
    // One way to build an arr, BUT look a way to loop through a bunch of object to get an array.
    for(let day in hoursObj){
        let dayObj = hoursObj[day];
        dayObj.name = day;
        arrOfHours.push(dayObj)
    }

        console.log("*******", arrOfHours)


    return (
        <div>
          {
              arrOfHours.map(day => {
                  return (
                    <div key={day.name + "heyhey"}>
                        <p>{day.name}</p>
                        <p>Open From: {day.opens_at[0] === "8" ? "Time is an illusion" : day.opens_at} to {day.closes_at}</p>
                    </div>
                  )
              })
          }
        </div>
    )
}

export default Rezy