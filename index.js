window.onscroll = function() {scrollFunction()};
let animate = 0;


function scrollFunction() {
	let scrollheight = document.documentElement.scrollTop / 430
	document.getElementById("container-header").style.background = "rgba(0,0,0," + scrollheight + ")"
	document.getElementById("logobtnimage").style.filter = "invert(" + scrollheight + ")"
	for(let i=0; i<6; i++){
		let id = i + "href"
		document.getElementById(id).style.color = "rgba(" + scrollheight*200 + "," + scrollheight*200  + "," + scrollheight*200  + "," + "1)"
	}
	// console.log(scrollheight * 430)

	if (scrollheight * 430 > 600) {
		var aboutMe = document.getElementById("aboutMeid");
		aboutMe.classList.add("anim-typewriter");
	}

	let widths = [0, '63', '35', '28', '28', '25', '73', '94', '60']

	if (scrollheight * 430 > 300 && animate == 0) {
		for(let i=1; i<9; i++)
		{
			document.getElementsByClassName('skill' + i)[0].animate([{
				opacity: '0',
				width: '0%',
				padding: '0'
			},
			{
				opacity: '100%',
				width: widths[i] + '%',
				padding: '0 16px 0 16px'
			}
			], {
			duration: 1000,
			});
			document.getElementsByClassName('skill' + i)[0].style.opacity = '100%'
			document.getElementsByClassName('skill' + i)[0].style.width = widths[i] + '%'
			document.getElementsByClassName('skill' + i)[0].style.padding = '0 16px 0 16px'
		}
		animate = 1
	}
}

function scrollFunctionAnims() {
	let scrollheight2 = document.documentElement.scrollTop
}

let count = 0;
function rotateY180() {
	if (count == 0)
		count++;
	else
		count = 0;
	degrees = count * 180
	const rotated = document.getElementById("introcard")
	rotated.style.transform = "rotateY(" + degrees + "deg)"
}





// document.getElementById("indexhref").style.color = "rgba(" + scrollheight*200 + "," + scrollheight*200  + "," + scrollheight*200  + "," + "1)";

// "rgba(" + scrollheight + "," + scrollheight + "," + scrollheight + "," + "1)";

// if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
//   {
// 	document.getElementById("container-header").style.background = "transparent";
//   }
//   else
//   {
//     document.getElementById("container-header").style.background = "black";
//   }
