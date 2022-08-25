const Header = () => {
    const currentDate = () => {
        const currentYear = new Date().getFullYear();
        const nameOfMonth = new Intl.DateTimeFormat('en-UK', {month: 'long'}).format(
            new Date(),
          );    
          let currentDay = new Date().getDate();
          currentDay += nth(currentDay)
        const together = [nameOfMonth, currentDay, currentYear].join(' ');
        return together;
    }

    const nth = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }

  return (
    <div className='header'>
        <h1>NASA API</h1>
        <h4>{currentDate()}</h4>
    </div>
  )
}

export default Header
