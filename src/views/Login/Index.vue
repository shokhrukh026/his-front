<template>
<div class="login__page">
    <!-- particles.js container -->
    <div id="particles-js"></div>

    <!-- stats - count particles -->
    <!-- <div class="count-particles">
    <span class="js-count-particles">--</span> particles
    </div> -->

    <!-- particles.js lib (JavaScript CodePen settings): https://github.com/VincentGarreau/particles.js -->



    <div class="login__card">
        <span class="login__card_title">Войти</span>
        <span class="login__card_subtitle">Войдите и начните управлять своими сотрудниками!</span>

        <input type="text" class="login__card_input">
        <input type="text" class="login__card_input">

        <div class="login__card_remember">
            <div class="d-flex align-center">
                <input type="checkbox" class="login__card_checkbox">
                <span>Запомни меня</span>
            </div>
            
            <div>забыл пароль?</div>
        </div>

        <button class="login__card_btn">Авторизоваться</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    async mounted(){
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                "value": "#0000FF"
                },
                "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
                },
                "opacity": {
                "value": 0.2,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
                },
                "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0000FF",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 0,// speed 0
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                    },
                    "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                        "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });


        /* ---- stats.js config ---- */

        // var count_particles, stats, update;
        // stats = new Stats;
        // stats.setMode(0);
        // stats.domElement.style.position = 'absolute';
        // stats.domElement.style.left = '0px';
        // stats.domElement.style.top = '0px';
        // document.body.appendChild(stats.domElement);
        // count_particles = document.querySelector('.js-count-particles');
        // update = function() {
        // stats.begin();
        // stats.end();
        // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        // }
        // requestAnimationFrame(update);
        // };
        // requestAnimationFrame(update);
    }
}
</script>

<style>
/* ---- reset ---- */

/* canvas {
  display: block;
  vertical-align: bottom;
} */

/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f6f9fb;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

/* ---- stats.js ---- */

/* .count-particles{
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles{
  font-size: 1.1em;
}

#stats,
.count-particles{
  -webkit-user-select: none;
}

#stats{
  border-radius: 3px 3px 0 0;
  overflow: hidden;
} */

/* .count-particles{
  border-radius: 0 0 3px 3px;
} */
</style>