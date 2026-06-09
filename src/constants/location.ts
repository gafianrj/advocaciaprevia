export const OFFICE_ADDRESS = {
  street: 'Av. Brasil, 100 — Sala 201',
  neighborhood: 'Centro',
  city: 'Passo Fundo',
  state: 'RS',
  zip: '99010-000',
};

export const OFFICE_ADDRESS_FULL = `${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.neighborhood} — ${OFFICE_ADDRESS.city}/${OFFICE_ADDRESS.state} — ${OFFICE_ADDRESS.zip}`;

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.neighborhood}, ${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.state}`,
)}&hl=pt-BR&z=16&output=embed`;

export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.state}`,
)}`;
