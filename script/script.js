(function() {
    document.addEventListener("DOMContentLoaded", function() {});
})();
window.addEventListener("load", () => {

    window.addEventListener('resize', redimFenetre);


    document.getElementById('svg-chemin').style.width = '100%';
    document.getElementById('svg-chemin').style.height = document.body.offsetHeight + 'px';


    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger); // Déclarer les pluggin motionpath et scrollTrigger
    gsap.defaults({
        ease: "none"
    }); // Enlever la valeur par défaut pour synchroniser le scroll et l’animation


    // Déclencher l’apparition du bateau au scroll
    window.addEventListener('scroll', () => {
        document.getElementById('bateau').classList.remove('invisible');

    })
    let animation = gsap
        .timeline({
            scrollTrigger: {
                trigger: "#chemin",
                scrub: true,
                start: "top top",
                end: "bottom bottom",
            },
            invalidateOnRefresh: true,
        })
        .to("#bateau", {
            motionPath: {
                path: "#chemin",
                align: "#chemin",
                alignOrigin: [0.5, 0.5],
                start: 1,
                end: 0
            },
            duration: 1,
        });


    function redimFenetre() {
        /* window.innerWidth */
        if (window.innerWidth >= 1900) {
            document.getElementById('chemin').setAttribute('d', 'M4.8 0c.7 73.5 5.7 93.5 23.7 93.5s38-41 24-52-31-21-19-27 48-14 51 18-31 67-31 67'); // Si grand écran : tracé alternatif
        } else {
            document.getElementById('chemin').setAttribute('d', 'M40.5 98.5c-7.9-.9-15.9-6.1-20-28-3-16 32.4-10.2 50-16 11.8-3.9 19-17 14-23-5.9-7 4-11 4-28') // Sinon retour au tracé intial
        }
        animation.kill(); // Arrêter l’animation pour recalculer le tracé
        document.getElementById('svg-chemin').style.width = '100%';
        document.getElementById('svg-chemin').style.height = document.body.offsetHeight + 'px';
        animation = gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#chemin",
                    scrub: true,
                    start: "top top",
                    end: "bottom bottom",
                },
                invalidateOnRefresh: true,
            })
            .to("#bateau", {
                motionPath: {
                    path: "#chemin",
                    align: "#chemin",
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0
                },
                duration: 1,
            });
    }





    /*
        // ------------------------------------------------------
        // 	début initialisation du scroll avec lenis.js
        // ------------------------------------------------------
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
            smooth: true,
            direction: 'vertical',
        });
    
        // //get scroll value
        // lenis.on('scroll', ({
        //     scroll,
        //     limit,
        //     velocity,
        //     direction,
        //     progress
        // }) => {
        //     console.log({
        //         scroll,
        //         limit,
        //         velocity,
        //         direction,
        //         progress
        //     });
        // })
    
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
        // ------------------------------------------------------
        // 	fin initialisation du scroll avec lenis.js
        // ------------------------------------------------------
        */
}); // Fin window load