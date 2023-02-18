const { Client } = require('@notionhq/client')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = 'a25a442934894316afd1cdb070b919ef'

export default async (req, res) => {
  const tenteiContato = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Status',
      select: {
        equals: 'Contato em WhatsApp',
      },
    },
  })
  res.status(200).json(tenteiContato)
}