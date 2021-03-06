var Ticket = {
    priceCalc: function() {
        return 8 - (this.movie_time * 3) - (this.person_age * 2)
    }
};

$(document).ready(function() {
    $("form#ticket").submit(function(event) {
        event.preventDefault();

        var time = parseInt($('#movie_time').val());
        var age = parseInt($('#person_age').val());

        var newTicket = Object.create(Ticket);

        newTicket.person_age = age;
        newTicket.movie_time = time;

        var ticketPrice = newTicket.priceCalc();

        $(".result h3").text(ticketPrice);
    });
});
