const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  node: 'http://localhost:9200' // Replace this with the URL of your Elasticsearch instance
});