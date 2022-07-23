import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3tu5zsxn',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'skvBTCOFCK7ZsJ8dTPciJUEsaxyAkkCx83rjIxM16GfgHBnClrq0sCRTfeFsgkt7CzlYuUejFLKGUTf41VFlq2IZQCSdxElsZWdlJ6gCHPs70Ghcl4Ey5FLYrpVPvSSsqorwKzQkX02ttWqumjNOh5r9toJd6ew1xZcliWSW2fi1Htv76hef',
  useCdn: false,
})
