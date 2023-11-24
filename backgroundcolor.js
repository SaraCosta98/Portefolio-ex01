const body = document.querySelector('body');
const date = new Date();
const hour = date.getHours();

if (hour < 12) {
    body.style.backgroundColor = '#F6F0ED';
} else if (hour < 18) {
    body.style.backgroundColor = '#E1C999';
} else {
    body.style.backgroundColor = '#BBB193';
}