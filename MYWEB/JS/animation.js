    let currentIndex = 0;
    const slider = document.getElementById('table-slider');
    const slides = document.querySelectorAll('.table-slide');

    function slideTable(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= slides.length) currentIndex = slides.length - 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') slideTable(1);
      if (e.key === 'ArrowLeft') slideTable(-1);
    });