import Particles from "react-particles";


import { loadFull , tsParticles } from "tsparticles";
import React, { useCallback } from 'react';



function Main() {
    const customInit = useCallback(async (engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    const options = {
        fullScreen: {
            enable: true,
            zIndex: 1,
        },
        fpsLimit: 120,
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#ec4899",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: true,
                    speed: 20,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0ea5e9",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                    parallax: {
                        enable: true,
                        smooth: 10,
                        force: 60,
                    },
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };

    return (<Particles options={options} init={customInit} >
     </Particles>
    
    )
}

export default Main;