// Click-to-play for YouTube embeds (_includes/youtube-consent.html): the iframe, and with it every request to
// Google, is created only after the visitor clicks. Nothing is remembered between page views.
document.addEventListener("click", (e) => {
  const link = e.target.closest("a.yt-consent-play[data-yt-id]");
  if (!link) return;
  e.preventDefault();
  const id = encodeURIComponent(link.dataset.ytId);
  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  frame.title = link.dataset.ytTitle || "YouTube video";
  frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  frame.allowFullscreen = true;
  link.replaceWith(frame);
  frame.focus();
});
