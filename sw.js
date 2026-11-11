<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker geregistreerd!'))
        .catch((err) => console.log('Registratie mislukt: ', err));
    });
  }
</script>
