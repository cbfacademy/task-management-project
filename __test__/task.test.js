const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './../index.htm'), 'utf8');

let window,container;

describe('index.htm', () => {
  beforeEach(() => {
    window = new JSDOM(html, { runScripts: 'dangerously' , resources: "usable"}).window;
    container = window.document.body;
  });

  it('renders a heading element', () => {
    expect(container.querySelector('h1')).not.toBeNull();
  })

});