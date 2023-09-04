// Get current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

// Months array for displaying month names
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

// Function to update calendar
function updateCalendar(year, month) {
    const calendarTitle = document.querySelector('.months h1');
    const calendarDate = document.querySelector('.date p');
    const daysContainer = document.querySelector('.days');

    // Set the title and date
    calendarTitle.textContent = months[month] + ' ' + year;
    calendarDate.textContent = currentDate.toDateString();

    // Clear existing days
    daysContainer.innerHTML = '';

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Calculate the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty divs for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'empty';
        daysContainer.appendChild(emptyDiv);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        if (day === currentDay && year === currentYear && month === currentMonth) {
            dayDiv.classList.add('today');
        }
        daysContainer.appendChild(dayDiv);
    }
}

// Initial calendar update
updateCalendar(currentYear, currentMonth);
