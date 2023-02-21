let sectionContainer = document.querySelector('.section_container');
let sliderContainer = document.getElementById('sliderContainer');
let sliderContainer1 = document.getElementById('sliderContainer1');
let sliderContainer2 = document.getElementById('sliderContainer2');
let leftIcon = document.querySelector('.left_icon')
let rightIcon = document.querySelector('.right_icon')
let leftIcon1 = document.querySelector('.left_icon1')
let rightIcon1 = document.querySelector('.right_icon1')
let leftIcon2 = document.querySelector('.left_icon2')
let rightIcon2 = document.querySelector('.right_icon2')
let favorite = document.querySelector('.uil-bookmark-full')

fetch('././db/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach(data => {
            sectionContainer.innerHTML += `
        <div class="section_card">
                <video src="${data.video}" controls></video>
                <p>${data.title}</p>
            </div>
        `
        });
    })



fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.results.forEach(movie => {
            sliderContainer.innerHTML += `
                <div class="section1_card">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
                    <p>${movie.title}</p>
                    <input type="checkbox" class="nav_checkk">
                    <label for="nav_checkk">
                    <i class="uil uil-bookmark-full"></i>
                        </label>
                </div>
        `

        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer.children.length; i++) {
                sliderContainer.children[i].style.transform = `translateX(${-300 * count}px)`
            }

        }

        setInterval(() => {
            if (count < sliderContainer.children.length - 4) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        }, 4000);

        leftIcon.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon.addEventListener('click', () => {
            if (count < sliderContainer.children.length - 4) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })


fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.results.forEach(movie => {
            sliderContainer1.innerHTML += `
                 <div class="section1_card">
                     <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
                     <p>${movie.title}</p>
                     <i class="uil uil-bookmark-full"></i>
        </div>
            `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer1.children.length; i++) {
                sliderContainer1.children[i].style.transform = `translateX(${-300 * count}px)`
            }
        }
        setInterval(() => {
            if (count < sliderContainer1.children.length - 4) {
                count++;
                slide();
            } else {
                count = 0;
                slide()
            }

        }, 4000);

        leftIcon1.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon1.addEventListener('click', () => {
            if (count < sliderContainer1.children.length - 4) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })
    })


fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.results.forEach(movie => {
            sliderContainer2.innerHTML += `
        <div class="section1_card">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
        <p>${movie.title}</p>
        <i class="uil uil-bookmark-full"></i>
        </div>
        `
        })
        let count = 0;
        function slide() {
            for (let i = 0; i < sliderContainer2.children.length; i++) {
                sliderContainer2.children[i].style.transform = `translateX(${-300 * count}px)`
            }
        }
        setInterval(() => {
            if (count < sliderContainer2.children.length - 4) {
                count++;
                slide()
            } else {
                count = 0;
                slide()
            }

        }, 4000)
        leftIcon2.addEventListener('click', () => {
            if (count > 0) {
                count--;
                slide();
            } else {
                count = 0;
                slide();
            }
        })

        rightIcon2.addEventListener('click', () => {
            if (count < sliderContainer2.children.length - 4) {
                count++;
                slide();
            } else {
                count = 0;
                slide();
            }
        })



    })


