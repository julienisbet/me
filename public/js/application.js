$(document).ready(function(){
    console.log("yo")
    $(this).scrollTop(0);
    var timelineBlocks = $('.timeline-block'),
        offset = 0.8;

    $('#nav-link-bio').on("click", function(){
        $('.timeline').addClass("hide");
        $('.bio').removeClass("hide");
        $(this).addClass("selected");
        $('#nav-link-timeline').removeClass("selected");
    })
    $('#nav-link-timeline').on("click", function(){
        $('.bio').addClass("hide");
        $('.timeline').removeClass("hide")
        //hide timeline blocks which are outside the viewport
        hideBlocks(timelineBlocks, offset);
        $(this).addClass("selected");
        $('#nav-link-bio').removeClass("selected");
    })



    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        if ($('#nav-link-timeline').hasClass('selected')) {
            (!window.requestAnimationFrame) 
                ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
                : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
        }
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop() + 200 + $(window).height()*offset ) && $(this).find('.timeline-text').removeClass('slide').addClass('hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop() + 200 + $(window).height()*offset && $(this).find('.timeline-text').hasClass('hidden') ) && $(this).find('.timeline-text').removeClass('hidden').addClass('slide');
        });
    }
});