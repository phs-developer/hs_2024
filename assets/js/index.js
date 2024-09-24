$(function () {
    // eventHendelr
    $(".short-cut .line").click(function () {
        $(".short-cut").toggleClass("on");
    });

    // 풀페이지 스크롤
    const lenis = new Lenis({
        duration: 1,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // sc-intro
    gsap.matchMedia().add("(min-width: 768px)", function () {
        gsap.to("#sc-intro .inner", {
            margin: "0 7vw",
            padding: "0 5vw",
            fontSize: "7vw",
            scrollTrigger: {
                trigger: "#sc-intro",
                start: "0% 00%",
                end: "100% 40%",
                scrub: 1,
                invalidateOnRefresh: true,
                onLeave: function () {
                    return $("body").addClass("active");
                },
                onEnterBack: function () {
                    return $("body").removeClass("active");
                },
            },
        });
    });
    gsap.matchMedia().add("(max-width: 767px)", function () {
        gsap.to("#sc-intro .inner", {
            margin: "0 2vw",
            padding: "0 5vw",
            fontSize: "10vw",
            scrollTrigger: {
                trigger: "#sc-intro",
                start: "0% 00%",
                end: "100% 40%",
                scrub: 1,
                invalidateOnRefresh: true,
                onLeave: function () {
                    return $("body").addClass("active");
                },
                onEnterBack: function () {
                    return $("body").removeClass("active");
                },
            },
        });
    });

    // sc-about
    const about = $("#sc-about");
    gsap.to("#sc-about .obj", {
        rotate: "-100deg",
        scrollTrigger: {
            trigger: about,
            start: "0% 100%",
            end: "100% 50%",
            scrub: 1,
            onEnter: function () {
                return about.addClass("active");
            },
            onLeaveBack: function () {
                return about.removeClass("active");
            },
        },
    });

    // sc-work
    const work = $("#sc-work");
    ScrollTrigger.create({
        trigger: work,
        start: "0% 100%",
        end: "100% 100%",
        onEnter: function () {
            return work.addClass("active");
        },
        onLeaveBack: function () {
            return work.removeClass("active");
        },
    });

    function workItem(idx, item) {
        ScrollTrigger.create({
            trigger: item,
            start: "0% 100%",
            end: "100% 100%",
            onEnter: function () {
                return $(".work-item").eq(idx).addClass("on");
            },
            onLeaveBack: function () {
                return $(".work-item").eq(idx).removeClass("on");
            },
        });
    }

    $(".work-item").each(function (idx, el) {
        workItem(idx, el);
    });
});
