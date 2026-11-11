 document.addEventListener('DOMContentLoaded', function () {

            const layer1 = document.getElementById('layer1');
            const layer2 = document.getElementById('layer2');
            const layer3 = document.getElementById('layer3');
            const layer4 = document.getElementById('layer4');
            const container = document.getElementById('parallax-container');

            //Definimos las velocidades de desplazamiento
            const speed1 = 0.4; // El fondo se mueve más rápido
            const speed2 = 0.2;
            const speed3 = 0.1; // El frente se mueve más lento
            const speed4 = 0.1; // El frente se mueve más lento

            function updateParallax() {
                // Es para que obtengamos la posición de scroll del elemento contenedor (respecto al top de la ventana)
                const scrollOffset = container.getBoundingClientRect().top;

                // Multiplicamos el desplazamiento por la velocidad de cada capa

                layer1.style.transform = `translate3d(0, ${scrollOffset * speed1}px, 0)`;


                layer2.style.transform = `translate3d(0, ${scrollOffset * speed2}px, 0)`;


                layer3.style.transform = `translate3d(0, ${scrollOffset * speed3}px, 0)`;

                layer4.style.transform = `translate3d(0, ${scrollOffset * speed3}px, 0)`;

            }

            //Agregamos el listener para el evento
            window.addEventListener('scroll', updateParallax);


            updateParallax();
        });