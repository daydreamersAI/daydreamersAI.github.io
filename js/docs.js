$(document).ready(function(){
    // Header scroll effect (matching main.js pattern)
    $(window).on('load scroll',function(){
        if($(window).scrollTop() > 35) {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        } else {
            $('.header').css({'background':'#002e5f','box-shadow':'none'});
        }
    });

    // Mobile menu handling (matching main.js pattern)
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Close mobile menu on scroll
    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    // Documentation specific features
    // Copy code block functionality
    $('.docs-code-block').each(function() {
        const $codeBlock = $(this);
        const $copyButton = $('<button>', {
            class: 'copy-button',
            text: 'Copy'
        }).appendTo($codeBlock);

        $copyButton.click(function() {
            const code = $codeBlock.find('code').text();
            navigator.clipboard.writeText(code).then(() => {
                $copyButton.text('Copied!');
                setTimeout(() => {
                    $copyButton.text('Copy');
                }, 2000);
            });
        });
    });

    // Search functionality for documentation
    $('#docs-search').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        $('.docs-section').each(function() {
            const $section = $(this);
            const sectionText = $section.text().toLowerCase();
            
            if(sectionText.includes(searchTerm)) {
                $section.show();
            } else {
                $section.hide();
            }
        });
    });

    // Smooth scroll to documentation sections
    $('.docs-nav-link').click(function(e) {
        e.preventDefault();
        const targetSection = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top - 100
        }, 1000, 'easeInOutExpo');
    });

    // Table of contents highlight on scroll
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();

        $('.docs-section').each(function() {
            const $section = $(this);
            const sectionTop = $section.offset().top - 120;
            const sectionBottom = sectionTop + $section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                const sectionId = $section.attr('id');
                $('.docs-nav-link').removeClass('active');
                $(`.docs-nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    });

    // Initialize tooltips for API parameters
    $('.api-parameter').hover(
        function() {
            const $tooltip = $(this).find('.parameter-tooltip');
            $tooltip.fadeIn(200);
        },
        function() {
            const $tooltip = $(this).find('.parameter-tooltip');
            $tooltip.fadeOut(200);
        }
    );

    // Handle documentation version switching
    $('#version-selector').change(function() {
        const version = $(this).val();
        // You can implement version-specific content loading here
        console.log(`Switched to version: ${version}`);
    });

    // Handle theme switching (if you want to add dark mode)
    $('#theme-toggle').click(function() {
        $('body').toggleClass('dark-mode');
        const isDarkMode = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load saved theme preference
    if(localStorage.getItem('darkMode') === 'true') {
        $('body').addClass('dark-mode');
    }

    // Back to top button (matching main.js pattern)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
});

// React integration helpers
window.updateDocumentation = function(newData) {
    // Function to allow React component to trigger jQuery updates
    if (window.documentationComponent) {
        window.documentationComponent.setState(newData);
    }
};