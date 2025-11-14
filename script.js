// === Carrusel de imágenes del Hero ===
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = Array.from(document.querySelectorAll(".carousel-image"));
  const prevButton = document.querySelector(".carousel-btn.prev");
  const nextButton = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  const totalImages = images.length;
  let autoSlideInterval;

  // Muestra la imagen correspondiente al índice desplazando el track
  function showImage(index) {
    const offset = -index * 100; // mover de a 100% del ancho
    track.style.transform = `translateX(${offset}%)`;
  }

  // Ir a la siguiente imagen
  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  // Ir a la imagen anterior
  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  // Auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Listeners
  nextButton.addEventListener("click", () => {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
  });

  prevButton.addEventListener("click", () => {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
  });

  // Pausar al pasar el mouse
  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);

  // Iniciar
  showImage(currentIndex);
  startAutoSlide();

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  // Form
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("customer-name").value;
    const email = document.getElementById("customer-email").value;
    const mensaje = document.getElementById("customer-message").value;

    const params = {
      from_name: nombre,
      message: mensaje,
      email: email
    };

    emailjs
      .send("service_mdipbkr","template_oaezifj", params)
      .then(() => {
        alert("Mensaje enviado correctamente!");
        form.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Hubo un error al enviar el mensaje.");
      });
  });
});
