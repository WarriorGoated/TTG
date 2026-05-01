export function loadAIChat() {
  if (document.querySelector('script[data-ai-chat]')) return;
  const script = document.createElement("script");
  script.src = "https://www.noupe.com/embed/019ddf0077497b43a8da6811b7892bf6a0cd.js";
  script.async = true;
  script.setAttribute("data-ai-chat", "true");
  document.body.appendChild(script);
}