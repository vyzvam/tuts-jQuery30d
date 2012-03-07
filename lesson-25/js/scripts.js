var Actors = {

	init: function( config ) {
		this.config = config;
		this.prepareTemplates();
		this.prepareEvents();

		$.ajaxSetup({
			url: 'index.php',
			type: 'POST'
		});

		$('button').remove();
	},

	prepareEvents: function() {
		$(this.config.letterSelection).on('change', this.fetchActors);
		$(this.config.actorsList).on('click', 'li',  this.displayActorInfo)
		$(this.config.actorInfo).on('click', 'span', function() {
			$(Actors.config.actorInfo).slideUp(300);
		});
	},

	prepareTemplates: function() {
		this.config.actorScriptTPL = Handlebars.compile( $(this.config.actorScriptTPL).html() );
		this.config.actorInfoScriptTPL = Handlebars.compile( $(this.config.actorInfoScriptTPL).html() );
		
		Handlebars.registerHelper( 'fullName', function(actor) {
			return actor.first_name + ' ' + actor.last_name;
		});
	},

	fetchActors: function() {
		var self = Actors;
		var htmlTPL = $(self.config.actorsList).empty(); 

		$.ajax({
			dataType: 'json',
			data: $(self.config.form).serialize(),
			success: function (actors) {

				if ( actors[0] ) {
					htmlTPL.append(self.config.actorScriptTPL(actors));
				}
				else {
					htmlTPL.empty().append('<li>No Results</li>');
				}
			}
		});
	},

	displayActorInfo: function(event) {
		event.preventDefault();
		var self = Actors,
			infoDIV = $(self.config.actorInfo).slideUp(200);
		;

		$.ajax({
			data: {actor_id: $(this).data('actor_id')}
		}).done(function(result) {
			infoDIV.html(self.config.actorInfoScriptTPL({info: result})).slideDown(200);
		});
	}
};

Actors.init({
	letterSelection: '#q',
	form: '#actor-selection',
	actorScriptTPL: '#actors_template',
	actorsList: 'ul.actors_list',
	actorInfoScriptTPL: '#actor_info_template',
	actorInfo: 'div.actor_info'
});