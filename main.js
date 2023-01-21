const chart = document.querySelector("#chart").getContext('2d');

// Create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'Income',
                data: [200,40,60,150,234,600,1000,800,600],
                borderColor: '#F76F01',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-varibles');

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})