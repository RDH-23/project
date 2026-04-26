document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Logika Modal Trailer ---
  const btnTontonTrailer = document.getElementById("btn-tonton-trailer");
  const modalTrailer = document.getElementById("trailer-modal");
  const btnTutupTrailer = document.getElementById("btn-tutup-trailer");
  const youtubeIframe = document.getElementById("youtube-iframe");

  if (btnTontonTrailer && modalTrailer) {
    btnTontonTrailer.addEventListener("click", () => {
      modalTrailer.classList.add("show");
      document.body.style.overflow = "hidden";
    });

    const tutupModalTrailer = () => {
      modalTrailer.classList.remove("show");
      document.body.style.overflow = "auto";
      // Trik mematikan video dengan refresh link src iframe
      const iframeSrc = youtubeIframe.src;
      youtubeIframe.src = iframeSrc;
    };

    btnTutupTrailer.addEventListener("click", tutupModalTrailer);
    modalTrailer.addEventListener("click", (event) => {
      if (event.target === modalTrailer) {
        tutupModalTrailer();
      }
    });
  }

  // --- 2. Logika Penggantian Server Streaming ---
  const serverBtns = document.querySelectorAll(".btn-server");
  const mainStreamingPlayer = document.getElementById("main-streaming-player");

  if (serverBtns.length > 0 && mainStreamingPlayer) {
    serverBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Hapus class 'active' dari semua tombol server
        serverBtns.forEach((b) => {
          b.classList.remove("active");
          b.innerHTML =
            `<i data-feather="video" width="14"></i> ` + b.innerText;
        });

        // Tambahkan class 'active' ke tombol yang sedang diklik
        this.classList.add("active");
        this.innerHTML =
          `<i data-feather="check-circle" width="14"></i> ` + this.innerText;

        // Render ulang icon Feather karena HTML baru saja diubah
        if (typeof feather !== "undefined") {
          feather.replace();
        }

        // Ambil link video baru dan ganti iframe
        const newVideoLink = this.getAttribute("data-src");

        mainStreamingPlayer.style.opacity = "0.5";
        setTimeout(() => {
          mainStreamingPlayer.src = newVideoLink;
          mainStreamingPlayer.style.opacity = "1";
        }, 300);
      });
    });
  }
});
