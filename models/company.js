'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = Schema({
     name: String, 
     permalink: String, 
     crunchbase_url: String, 
     homepage_url: String, 
     blog_url: String, 
     blog_feed_url: String, 
     twitter_username: String, 
     category_code: String, 
     number_of_employees: Number,
     founded_year: Number, 
     founded_month: Number, 
     founded_day: Number, 
     deadpooled_year: Number, 
     tag_list: String, 
     alias_list: String, 
     email_address: String, 
     phone_number: String, 
     description: String, 
     created_at: Object, 
     updated_at: String, 
     overview: String, 
     image: Object, 
     products: Array,         
     relationships: Array,
     competitions: Array,         
     providerships: Array,
     total_money_raised: String,
     funding_rounds: Array,         
     investments: Array,
     acquisition:Object,  
     acquisitions: Array,
     offices: Array,         
     milestones: Array,         
     video_embeds: Array,
     screenshots: Array,        
     external_links: Array,        
     partners: Array
    
});
module.exports = mongoose.model('Comapny', CompanySchema, 'companies')

