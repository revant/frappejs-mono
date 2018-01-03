const app = require('express')();
const frappe = require('frappe-core');

async function start() {
	await frappe.init();
	await frappe.init_db('sqlite', {db_path: 'test.db'});
	await frappe.init_app(app);
	await frappe.start();
}

start();
