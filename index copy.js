#!/usr/bin/env node

const fs = require('fs')
var pdf_table_extractor = require("pdf-table-extractor");

//PDF parsed
function success(result)
{
   fs.writeFileSync('parsed.json', JSON.stringify(result))
}

//Error
function error(err)
{
   console.error('Error: ' + err);
}

pdf_table_extractor("2019PR_sex and age_LC_c.pdf",success,error);