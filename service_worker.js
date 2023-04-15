const 캐시이름 = '캐시';
const 캐시할_파일들 = [
    './', './index.html',
    './vite.svg', './manifest.json', './logo.png',
    './assets/index-c425e1ad.css', './assets/index-da457b3a.js',
    './images/IM1015878.jpeg', './images/IM1015893.jpeg',
    './images/IM1015894.jpeg', './images/IM1015895.jpeg',
    './images/IM1015896.jpeg', './images/IM1015897.jpeg',
    './images/IM1015898.jpeg', './images/IM1015899.jpeg',
    './images/IM1015900.jpeg', './images/IM1015901.jpeg',
]

// 1. 서비스 워커 인스톨
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(캐시이름)
            .then(cache => cache.addAll(캐시할_파일들))
    )
})

// 2. 서비스 워커 활성화
self.addEventListener('active', () => console.log('서비스 워커 동작'))

// 3. 네트워크 요청에 대해 서비스 워커가 응답
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request))
        .then(res => {
            // 3-1. 캐시에 값이 없다면
            if (!res) {
                // 3-2. 네트워크에 리소스를 요청
                return fetch(e.request)
            }

            // 3-0. 캐시에서 응답
            return res
        })
        .cache(console.error)
})
