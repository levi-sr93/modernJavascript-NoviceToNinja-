import Tooltip from './UI/tooltip';
import Dropdown from './UI/dropdown'
import Tabs from './UI/tabs';
import Snackbar from './UI/snackbar';

//Create a Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//Create Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

//creating tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


//creating the snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You clicked me! =D');
})