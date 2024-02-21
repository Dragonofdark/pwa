const staticStratForge = "Strat-Forge-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/bronya-rand.jpg",
  "/images/seele.jpg",
  "/images/jing yuan.jpg",
  "/images/luocha.jpg",
  "/images/blade.jpg",
  "/images/Dan heng.jpg",
  "/images/bleach.jpg",
  "/images/jingliu.jpg",
  "/images/feira de profissoes.jpeg",
  "/images/a gangue do capus.jpeg",
  "/images/uma bela foto.jpeg",
  "/images/ayaka e rimuru.jpeg",
  "/images/rimuru no teleporte.jpeg",
  "/images/luder e eu.jpeg",
  "/images/uma obra de arte.jpeg",
  "/images/dormindo com estilo.jpeg",
  "/images/eminence in shadow.jpg",
  "/images/final fantasy XV.jpg",
  "/images/final fantasy VII remake.jpg",
  "/images/spyxfamily.jpg",
  "/images/1-16 Mass Destruction.mp3"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticStratForge).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  