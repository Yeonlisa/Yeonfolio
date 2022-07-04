import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
    };
    return (
        <>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                    value: "#fff",
                },
                links: {
                    color: "#fff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
            }}
        />
        </>
    )
}

export default Particle;