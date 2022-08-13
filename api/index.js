const dotenv = require("dotenv").config()
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
    const databaseId = process.env.NOTION_DATABASE_ID
    const response = await notion.databases.query({ database_id: databaseId });
    const pageid = response.results[0].id
    const responsepg = await notion.pages.retrieve({ page_id: pageid });
    
    console.log(responsepg)
  })();

// (async () => {
//     const response = await notion.search({
//       query: 'Demo',

//     });
//     console.log(response.results[0].properties.Description.rich_text);
//   })();