import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jams/$jam')({
  component: RouteComponent,
})

function RouteComponent() {
  const { jam } = Route.useParams()

  return (
    <div className="max-w-2xl w-full flex flex-col gap-4 mt-32 mb-32">
      <h1 className="text-3xl font-extrabold text-center">Jams for you ♥ </h1>
      <h2></h2>
      <h3></h3>
      {/* happy Jam */}
      {jam === 'happy' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/377JgyibsyYZ1NEF9aa1ZZ?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* sad Jam */}
      {jam === 'sad' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1fDFHXcykq4iw8Gg7s5hG9?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/7eJMfftS33KTjuF7lTsMCx?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5O932cZmzOZGOGZz9RHx20?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/40BomFCBuJok3OjxM9oG7e?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0EfsDEYaSjGYd66Pr881nq?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5qaEfEh1AtSdrdrByCP7qR?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0otRX6Z89qKkHkQ9OqJpKt?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/52iLDrSoRtf9lcgFuLVfqE?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1SKPmfSYaPsETbRHaiA18G?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* excited jam */}
      {jam === 'excited' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* loved jam */}
      {jam === 'loved' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1ITbrYluZnnVIUXE4PAq2s?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1dB1kzLOjTcmSHttRd8bnV?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/4j5ffIFh7bFT7GZciP1TCy?utm_source=generator&"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2FCXQHugkoHE1K3tiDu8pu?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5uCax9HTNlzGybIStD3vDh?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1RMJOxR6GRPsBHL8qeC2ux?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/377JgyibsyYZ1NEF9aa1ZZ?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3iBgrkexCzVuPy4O9vx7Mf?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/7txLCGOXyDlDXTjtR1Sk4v?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* tired Jam */}
      {jam === 'tired' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/4Tp4gRuDo1sIMP6gH9LwuH?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/21jGcNKet2qwijlDFuPiPb?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2pUpNOgJBIBCcjyQZQ00qU?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5F2AuFzEiuAQD0JVNjVJQz?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1Fid2jjqsHViMX6xNH70hE?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2FCXQHugkoHE1K3tiDu8pu?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1v1oIWf2Xgh54kIWuKsDf6?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* lonely Jam */}
      {jam === 'lonely' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1B62o4CbdL9ckGvwsz2cgn?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/72sfmdpuO5r8cBDgs7MqZZ?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/6Pgkp4qUoTmJIPn7ReaGxL?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1gH1h30wkQdd9zhY3j7a8T?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5LrN7yUQAzvthd4QujgPFr?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2pUpNOgJBIBCcjyQZQ00qU?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5E5MqaS6eOsbaJibl3YeMZ?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2f0pn9DkEJwAzXApnFh5cr?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0RdUX4WE0fO30VnlUbDVL6?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/21yCOhgaDMc0KEtxhZHTbI?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* angry Jam */}
      {jam === 'angry' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
      {/* confused Jam */}
      {jam === 'confused' && (
        <div className="flex flex-col gap-2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/7B3z0ySL9Rr0XvZEAjWZzM?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1?utm_source=generator&theme=0"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2K7xn816oNHJZ0aVqdQsha?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3siwsiaEoU4Kuuc9WKMUy5?utm_source=generator"
            width="100%"
            height="250"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  )
}
