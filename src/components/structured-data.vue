<template>
  <teleport to="head">
    <component :is="'script'" type="application/ld+json">
      {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Game Developer Carousel",
      "startDate": "2024-03-21T11:00-07:00",
      "endDate": "2024-03-21T18:00-07:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
      "@type": "Place",
      "name": "Leroy King Carousel",
      "address": {
      "@type": "PostalAddress",
      "streetAddress": "221 4th Street",
      "addressLocality": "San Francisco",
      "postalCode": "94103",
      "addressRegion": "CA",
      "addressCountry": "US"
      }
      },
      "image": [
      "https://gdcarousel.com/og/social-media-preview.png"
      ],
      "description": "Carousel rides for everyone at the LeRoy King Carousel. No cost. No catch. Everyone can ride!
      Courtesy of John 'Seg' Seggerson.",
      "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01T00:00"
      },
      "organizer": {
      "@type": "Organization",
      "name": "Space Between Studios",
      "url": "https://spacebetweenstudios.com"
      }
      }
    </component>
  </teleport>
</template>
