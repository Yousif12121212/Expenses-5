<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(reg => {
      console.log('Service Worker مسجل', reg);
    }).catch(err => {
      console.error('Service Worker لم يسجل', err);
    });
  }
</script>