// ! The Bubbling Phase
/*
! html structure
<form id="form">
	FORM
    <div id="div">
        DIV
        <p id="p">P</p>
    </div>
</form>
*/

// all event handlers are registered in the bubbling phase, by default.

const formEvent = () => console.log('form');
const divEvent = () => console.log('div');
const pEvent = () => console.log('p');

document.getElementById('form').addEventListener('click', formEvent, true);
document.getElementById('div').addEventListener('click', divEvent, true);
document.getElementById('p').addEventListener('click', pEvent, true);