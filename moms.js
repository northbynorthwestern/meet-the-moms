/*jslint browser: true*/
/*global $, jQuery, alert*/

var main = function () {

    "use strict";
    
	var paused = true;

	$('.arrowR').click(function (e) {
		paused = true;
		$('#slideshow > div:first')
		      .fadeOut(1000)
		      .next()
              .fadeIn(1000)
		      .end()
		      .appendTo('#slideshow');
        
	});
		
	$('.arrowL').click(function () {
		paused = true;
		$('#slideshow > div:last')
		      .fadeIn(1000)
		      .prependTo('#slideshow')
		      .next()
		      .fadeOut(1000)
		      .end();
	});


	
	setInterval(function () {
		if (paused === false) {
			$('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
		}
	},  5000);
   
	
    $('#jody').click(function () {
        $('.audio').attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344942624&amp;color=%2300cc11&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        
        $('#deck').html("The 2008 recession hit home for everyone a little differently. The economic recession took realtor Jody Springer from selling houses to living in one - as a livelihood. Now in her seventh year as a house director, today she lives with and learns from the Northwestern Upsilon chapter of the Tri Delta sorority. Forty years before Evanston, Springer earned her bachelor’s degree at Purdue University and worked as an honorary bulldog at Butler University, directing the Alpha Chi Omega house there for three years. She never had the chance to participate in Greek life in college, but she has finally found her place among her “instant friends” in the sorority quad.");
        
        $('#img1').attr("src", "Jody1.JPG");
        $('#img2').attr("src", "Jody2.JPG");
        $('#img3').attr("src", "Jody3.JPG");
        $('#img4').attr("src", "Jody4.JPG");
        $('#img5').attr("src", "Jody5.JPG");
        $('#img6').attr("src", "Jody6.JPG");

    });
    
    $('#micki').click(function () {
        $('.audio').attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344942371&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        
        $('#deck').html("In a “different lifetime,” Micki Love was a paralegal. Her other “lifetimes” include: 17 years of teaching yoga in California and helping open her daughter’s business - which supports national nonprofits and their fundraisers - in Oregon. Yoga, however, has followed her across the country: she taught a bit to Kappa Kappa Gamma at the University of Oregon. She doesn’t have a gym, and has yet to pick up the practice regularly in Evanston since she arrived this year. It’s quieter here, she says, and much cleaner. Lake Michigan reminds her a bit of her beloved Pacific ocean, but the waves are not quite big enough for her tastes.");
        
        $('#img1').attr("src", "Micki1.jpg");
        $('#img2').attr("src", "Micki2.jpg");
        $('#img3').attr("src", "Micki3.jpg");
        $('#img4').attr("src", "Micki4.jpg");
        $('#img5').attr("src", "Micki5.jpg");
        $('#img6').attr("src", "Micki6.jpg");
    });
    
    $('#darlene').click(function () {
        $('.audio').attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344941654&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
        
        $('#deck').html("She answers to many names: “house mom,” “house director,” “‘Hey, you!’” and “Darlene Burns.” Originally from Indiana, Burns also answered to the title of first grade teacher for over 25 years there, and for two more years in Savannah, Georgia. When she finally set down the chalk and arithmetic, she moved in with her daughter to help look after her grandchildren. Burns fell into the role of house director almost by accident — she botched her interview on purpose, not sure she wanted the new position. As fate would have it, the girls loved her and she loved living near her “grandbabies.” Her first priority in the house may be safety, but she laughs with the girls “all the time.”");
        
        $('#img1').attr("src", "Darlene1.jpg");
        $('#img2').attr("src", "Darlene2.jpg");
        $('#img3').attr("src", "Darlene3.jpg");
        $('#img4').attr("src", "Darlene4.jpg");
        $('#img5').attr("src", "Darlene5.jpg");
        $('#img6').attr("src", "Darlene6.jpg");
    });
};

$(document).ready(main);

function toggleColorJ() {
    "use strict";
    $("#jody").addClass("black");
    $("#micki").removeClass("black");
    $("#darlene").removeClass("black");

}

function toggleColorM() {
    "use strict";
    $("#micki").addClass("black");
    $("#darlene").removeClass("black");
    $("#jody").removeClass("black");

}

function toggleColorD() {
    "use strict";
    $("#darlene").addClass("black");
    $("#jody").removeClass("black");
    $("#micki").removeClass("black");

}



