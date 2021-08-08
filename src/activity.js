import React, { useState, useEffect } from "react";

export const CurrentActivity = () => {
  const [day, setDay] = useState(1);
  const [prevDay, setPrevDay] = useState([]);
  const [activity, setActivity] = useState("");

  const test = () => {
    let today = new Date().getDay();
    setDay(today);
    const checkDay = [
      [13, 6],
      [0, 7],
      [1, 8],
      [2, 9],
      [3, 10],
      [4, 11],
      [5, 12]
    ];

    setPrevDay(checkDay[today]);

    if (prevDay[0] === 13 && day === 13) {
      setDay(0);
      return;
    } else {
      if (day === prevDay[0]) {
        setDay(prevDay[0] + 1);
        return;
      } else if (day === prevDay[1]) {
        setDay(prevDay[1] + 1);
        return;
      }
    }

    // for (let i = 0; i < checkToday.length; i++) {
    //   if (today === checkToday[i]) {
    //     console.log("TODAY", today);
    //     setPrevDay(checkDay[i]);
    //     console.log("prevDay", prevDay);
    //     // return;
    //     if (day === prevDay[0] && prevDay[0] !== 13) {
    //       console.log("gate 1");
    //       setDay(prevDay[0] + 1);
    //       console.log("day 1a", day);
    //       return;
    //     } else if (day === prevDay[0] && prevDay[0] === 13) {
    //       console.log("gate 2");
    //       setDay(0);
    //       console.log("day 1b", day);
    //       return;
    //     } else if (day === prevDay[1]) {
    //       console.log("gate 3");
    //       setDay(prevDay[1] + 1);
    //       console.log("day 2", day);
    //       return;
    //     }
    //   }
    // }
    // console.log("DAY", day);
  };

  // This function will change current day (0-13) based on previous day
  // Will come back and refactor this to make it dry later
  // const currDay = (day) => {
  //   let today = new Date().getDay();
  //   setDay(today);
  //   console.log('prevDay', prevDay)
  //   if (today === 0) {
  //     if (day === 13) {
  //       setDay(0);
  //       return;
  //     } else if (day === 6) {
  //       setDay(7);
  //       return;
  //     }
  //   } else if (today === 1) {
  //     if (day === 0) {
  //       setDay(1);
  //       return;
  //     } else if (day === 7) {
  //       setDay(8);
  //       return;
  //     }
  //   } else if (today === 2) {
  //     if (day === 1) {
  //       setDay(2);
  //       return;
  //     } else if (day === 8) {
  //       setDay(9);
  //       return;
  //     }
  //   } else if (today === 3) {
  //     if (day === 2) {
  //       setDay(3);
  //       return;
  //     } else if (day === 9) {
  //       setDay(10);
  //       return;
  //     }
  //   } else if (today === 4) {
  //     if (day === 3) {
  //       setDay(4);
  //       return;
  //     } else if (day === 10) {
  //       setDay(11);
  //       return;
  //     }
  //   } else if (today === 5) {
  //     if (day === 4) {
  //       setDay(5);
  //       return;
  //     } else if (day === 11) {
  //       setDay(12);
  //       return;
  //     }
  //   } else if (today === 6) {
  //     if (day === 5) {
  //       setDay(6);
  //       return;
  //     } else if (day === 12) {
  //       setDay(13);
  //       return;
  //     }
  //   }
  // };

  // This function will find the current activity based on current day and set to state
  const currActivity = () => {
    const activityList = {
      0: "Big Final Reveal",
      1: "Read",
      2: "Draw",
      3: "Write",
      4: "Squadding Up",
      5: "Point Share",
      6: "Matchup 1",
      7: "Voting Session 1",
      8: "Matchup 2",
      9: "Voting Session 2",
      10: "Matchup 3",
      11: "Voting Session 3",
      12: "Matchup 4",
      13: "Big Final Reveal"
    };
    setActivity(activityList[day]);
    return activity;
  };

  // useEffect to call both functions on render
  useEffect(() => {
    currDay();
    currActivity();
  }, [prevDay]);

  return <div>Current Activity: {activity}</div>;
};
