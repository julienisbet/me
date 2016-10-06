$(document).ready(function(){
    var timelineBlocks = $('.timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame) 
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop() + 200 + $(window).height()*offset ) && $(this).find('.timeline-text').addClass('hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop() + 200 + $(window).height()*offset && $(this).find('.timeline-text').hasClass('hidden') ) && $(this).find('.timeline-text').removeClass('hidden').addClass('slide-left');
        });
    }
});